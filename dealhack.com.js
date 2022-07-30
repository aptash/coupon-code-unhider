document.querySelectorAll('.coupon_type-coupon-code .coupon-code-link').forEach((e) => {
	const p = e.parentElement;
	e.remove();
	p.querySelector('.coupon-hidden .cover').remove();

	const b = p.querySelector('.coupon-hidden .hidden-code');
	b.classList.add('btn');
	b.classList.add('coupon-code');
	b.classList.remove('hidden-code');
});
