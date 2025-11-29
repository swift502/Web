import cssInjection from '../../styles/model-viewer-injection.css?raw';
const modelViewer = document.querySelector('model-viewer');

// Inject shadow DOM CSS overrides
const style = document.createElement('style');
style.textContent = cssInjection;
modelViewer.shadowRoot.appendChild(style);