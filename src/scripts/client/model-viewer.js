const modelViewer = document.querySelector('model-viewer');

// Apply custom css
const style = document.createElement('style');
style.textContent = ':focus-visible { outline: none; }';
modelViewer.shadowRoot.appendChild(style);