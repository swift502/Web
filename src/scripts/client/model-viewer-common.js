import customStyles from '../../styles/model-viewer-injection.css?raw';
const modelViewer = document.querySelector('model-viewer');

// Custom iFrame css
const style = document.createElement('style');
style.textContent = customStyles;
modelViewer.shadowRoot.appendChild(style);