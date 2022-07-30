document.querySelectorAll('.deal-button.has-code').forEach((b) => {
	b.classList.add('is-uncovered');
	b.querySelector('.label').remove();
	b.addEventListener('click', (ev) => {
		ev.stopPropagation();
	});
	b.style = 'cursor: auto;';
});
