const targetNode = document.querySelector('body');
if (targetNode) {
	var observerOptions = {
		childList: true,
		subtree: true,
	};

	const observer = new MutationObserver((mutationList) => {
		[...mutationList]
			.filter((mutation) => mutation.addedNodes.length)
			.forEach((mutation) => {
				[...mutation.addedNodes]
					.filter((addedNode) => addedNode.nodeType === 1)
					.forEach((node) => {
						node.querySelectorAll('[class^="buttonWrapper"]>textarea').forEach((e) => {
							const code = e.textContent;

							if (!code) return;

							const codeElement = document.createElement('div');
							e.parentElement.appendChild(codeElement);
							codeElement.outerHTML = `
								<div class="CouponCard">
									<div class="CouponCard-coveredButton">
									<textarea class="CouponCard-textAreaContainer">${code}</textarea>
									</div>
								</div>
							`;

							e.parentElement.addEventListener('click', (ev) => {
								ev.stopPropagation();
							});
							e?.parentElement?.querySelector('button')?.parentElement?.remove();
						});
					});
			});
	});

	observer.observe(targetNode, observerOptions);
}
