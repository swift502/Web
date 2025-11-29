const modelViewer = document.querySelector('model-viewer');

// Disable outline
const style = document.createElement('style');
style.textContent = `
	:focus-visible {
		outline: none;
	}
`;
modelViewer.shadowRoot.appendChild(style);