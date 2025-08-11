import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone } from 'lucide-react';

const PWAInstallButton = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Check if it's iOS
    const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(isIOSDevice);

    // Listen for the beforeinstallprompt event (Android/Chrome)
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallButton(true);
    };

    // Check if app is already installed
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = window.navigator.standalone === true;
    
    if (!isStandalone && !isInWebAppiOS) {
      if (isIOSDevice) {
        // Show install button for iOS (manual instructions)
        setShowInstallButton(true);
      } else {
        // Listen for install prompt on other platforms
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIOS) {
      setShowIOSInstructions(true);
      return;
    }

    if (!deferredPrompt) return;

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setShowInstallButton(false);
      }
      
      setDeferredPrompt(null);
    } catch (error) {
      console.log('Install prompt failed:', error);
    }
  };

  const handleClose = () => {
    setShowInstallButton(false);
    setShowIOSInstructions(false);
  };

  if (!showInstallButton) return null;

  return (
    <>
      {/* Install Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-pulse">
        <button
          onClick={handleInstallClick}
          className="bg-gradient-to-r from-gold to-wine text-white px-6 py-3 rounded-full shadow-2xl flex items-center space-x-3 hover:scale-105 transition-all duration-300 font-semibold"
        >
          <Download className="w-5 h-5" />
          <span>Install App</span>
        </button>
      </div>

      {/* iOS Instructions Modal */}
      {showIOSInstructions && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-dark-card rounded-2xl p-8 max-w-md w-full border border-gold/30">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-display text-gold font-bold">Install Wedding App</h3>
              <button 
                onClick={handleClose}
                className="text-white/60 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">1</div>
                <p>Tap the <strong>Share</strong> button at the bottom of Safari</p>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">2</div>
                <p>Scroll down and tap <strong>"Add to Home Screen"</strong></p>
              </div>
              
              <div className="flex items-center space-x-3 text-white">
                <div className="w-8 h-8 bg-gold/20 rounded-full flex items-center justify-center text-gold font-bold">3</div>
                <p>Tap <strong>"Add"</strong> to install the wedding app</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-wine/20 rounded-lg">
              <div className="flex items-center space-x-2 text-wine-light">
                <Smartphone className="w-5 h-5" />
                <p className="text-sm">
                  Once installed, you can access the wedding website offline anytime!
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default PWAInstallButton;
