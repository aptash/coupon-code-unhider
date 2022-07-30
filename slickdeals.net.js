const regex = /id":"(?<id>.*?)","code":"(?<code>.*?)"/gm;
const script = [...document.querySelectorAll('body>script:not([type], [src])')]?.find((script) =>
	script.innerText.includes('CouponOfferCard'),
)?.innerText;

for (const match of script.matchAll(regex)) {
	try {
		const btn = document.querySelector(`#${match.groups.id} span.bp-c-button`);
		if (!btn?.classList.replace('bp-c-button--primary', 'bp-p-couponCard_revealedCode')) contunue;
		btn.textContent = match.groups.code;
		btn.addEventListener('click', (ev) => {
			ev.stopPropagation();
		});
		btn.style = 'cursor: auto; user-select: text;';
	} catch (error) {}
}
