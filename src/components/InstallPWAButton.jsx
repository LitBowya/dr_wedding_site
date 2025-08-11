import React, { useState, useEffect } from 'react';
import { ArrowDownToLine, X, Share } from 'lucide-react';

const InstallPWAButton = () => {
  const [prompt, setPrompt] = useState(null);
  const [isIos, setIsIos] = useState(false);
  const [showIosModal, setShowIosModal] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setPrompt(event);
    };

    // Detect if the user is on an iOS device
    const isDeviceIos = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

    // Check if the app is already in standalone mode (installed)
    const isInStandaloneMode = () => ('standalone' in window.navigator) && (window.navigator.standalone);

    if (!isInStandaloneMode()) {
      if (isDeviceIos()) {
        setIsIos(true);
      } else {
        window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
    }

    return () => {
      if (!isDeviceIos()) {
        window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      }
    };
  }, []);

  const handleInstallClick = () => {
    if (isIos) {
      setShowIosModal(true);
    } else if (prompt) {
      prompt.prompt();
    }
  };

  const closeIosModal = () => {
    setShowIosModal(false);
  };

  if (!prompt && !isIos) {
    return null;
  }

  return (
    <>
      <button
        onClick={handleInstallClick}
        className="fixed bottom-4 right-4 z-50 flex items-center gap-3 px-4 py-3 bg-gold text-wine rounded-full shadow-2xl hover:bg-wine hover:text-gold transition-all duration-300 transform hover:scale-105 animate-bounce"
        aria-label="Install App"
      >
        <ArrowDownToLine className="w-6 h-6" />
        <span className="font-serif text-lg">Install App</span>
      </button>

      {isIos && showIosModal && (
        <div className="fixed inset-0 bg-white z-[100] flex items-center justify-center p-4" onClick={closeIosModal}>
          <div className="bg-dark border-2 border-gold/50 rounded-3xl p-8 max-w-sm w-full text-center relative" onClick={(e) => e.stopPropagation()}>
            <button onClick={closeIosModal} className="absolute top-4 right-4 text-white hover:text-gold">
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-serif text-gold mb-4">Install on iOS</h3>
            <p className="text-white/80 mb-4">To install the app, tap the Share button in Safari and then 'Add to Home Screen'.</p>
            <div className="flex justify-center items-center gap-2 text-white">
              <p>Tap</p>
              <Share className="w-8 h-8 text-gold" />
              <p>then "Add to Home Screen"</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstallPWAButton;
