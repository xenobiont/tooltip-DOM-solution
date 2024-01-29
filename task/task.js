/*  чтобы посмотреть решение задания 2, раскомметируйте код между соответствущиъ комментариев* ЗАДАНИЕ 2 * и закомккентируйте код .внеутр комментов ЗАДАНИE 1 , и т.д. 
Функция createTooltip(el) нужна для всех вариантов задания*/

/* ЗАДАНИE 1 */
const elems = document.querySelectorAll('.note');
elems.forEach(createTooltip);
/* ЗАДАНИE 1 */

/* ЗАДАНИЕ 2 */
/* const elems = document.querySelectorAll('.note');

elems.forEach((el) => {
	// el.addEventListener('mouseover', showTooltip);
	// el.addEventListener('mouseout', hideTooltip);
	el.addEventListener('mouseenter', showTooltip);
	el.addEventListener('mouseleave', hideTooltip);
});

function showTooltip(event) {
	console.log('showing'); // показать, что будет, если использовать mouseover / mouseout - многократное срабатывание при перемещении между вложенными элементами
	if (!this.tooltip) createTooltip(this);
	this.tooltip.style.display = '';
}

function hideTooltip(event) {
	console.log('hiding');
	this.tooltip.style.display = 'none';
} */
/* ЗАДАНИЕ 2 */

/* ЗАДАНИЕ 3 */
/* const notes = document.querySelector('.notes');
notes.addEventListener('mouseover', showTooltip);
notes.addEventListener('mouseout', hideTooltip);

function showTooltip(event) {
	// без проверки на closest будет показывать tooltip'ы для любого вложенного в .notes элемента
	const el = event.target.closest('.note');
	if (!el) return;

	if (!el.tooltip) createTooltip(el);
	el.tooltip.style.display = '';
}

function hideTooltip(event) {
	const el = event.target.closest('.note');
	if (!el) return;

	el.tooltip.style.display = 'none';
} */
/* ЗАДАНИЕ 3 */

function createTooltip(el) {
	const tooltip = document.createElement('div');
	tooltip.classList.add('tooltip');
	tooltip.innerHTML = el.textContent.length;
	tooltip.style.cssText = `
		padding: 5px;
		border: 1px solid blue;	
		position: absolute;
		left: ${el.offsetLeft + el.offsetWidth}px;
		top: ${el.offsetTop}px;
		transition: all 1s;
	`;

	/* tooltip.style.position = 'absolute';
	el.style.position = 'relative';
	el.style.top = 0;
	el.style.left= 100%;
	el.append(tooltip); */
	/* абсолютное позиционирование относительно элемента со скроллбаром overflow: auto не сработает (абсолютно позиционированный элемент уйдет под скролл) */

	document.body.append(tooltip);
	el.tooltip = tooltip;
	return tooltip;
}
