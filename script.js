(function () {
	const parent = document.querySelector('#ctn');
	const getNodes = () => parent.querySelectorAll('.produto-ctn');
	const getValueFromNode = node => parseInt(node.querySelector('.produto-desconto b').innerText.replace(/[^0-9]+/g, ''), 10);

	const nodes = getNodes();
	let temp = [];

	nodes.forEach(node => {
		temp.push({
			desconto: getValueFromNode(node),
			node,
		});
	});

	let before = null;
	let c = 0;

	const newParent = parent.cloneNode();
	newParent.querySelectorAll('.produto-ctn').forEach(node => node.remove());

	const sorted = temp.sort((a, b) => b.desconto - a.desconto);
	console.log(sorted);
	sorted.forEach(node => {
		// before && newParent.insertBefore(node.node, before);
		// before = node.node;
		newParent.appendChild(node.node);
	});

	document.querySelector('article').appendChild(newParent);
	parent.remove();
}());
