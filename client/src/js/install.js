const butInstall = document.getElementById('buttonInstall');
butInstall.classList.add('hidden')

// Logic for installing the PWA
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.remove('hidden');
});

// Implementing a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();
    window.deferredPrompt = null;
    butInstall.classList.add('hidden');
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});
