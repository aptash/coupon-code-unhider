const data = JSON.parse(document.querySelector('#__NEXT_DATA__').textContent).props.pageProps
	.serverState.apollo.data;

document.querySelectorAll("[class*='OfferCta__OfferCTAButton']>div:first-child").forEach((e) => {
	try {
		const id = e.closest('[data-qa-offer-uuid]').dataset.qaOfferUuid;
		const ab = e.closest('.anchor-button');
		const par = ab.parentElement;
		ab.style.display = 'none';
		const codeElement = document.createElement('button');
		par.insertBefore(codeElement, ab);
		const code = data[`OfferCard:${id}.redemption.0`].code;
		codeElement.outerHTML = `<button class="button-show-code-revealed">${code}</button>`;
	} catch (error) {}
});
