(function () {
    const parent = document.querySelector('#ctn');

    const getNodes = parent => parent.querySelectorAll('.produto-ctn');
    const getValueFromNode = node => +node.querySelector('.produto-desconto b').innerText.replace(/[^0-9]+/g, '');

    const temp = [];
    getNodes(parent).forEach(node => temp.push({
        node,
        discount: getValueFromNode(node),
    }));

    const newParent = parent.cloneNode();
    getNodes(newParent).forEach(node => node.remove());

    temp.sort((a, b) => b.discount - a.discount)
        .forEach(node => newParent.appendChild(node.node));

    document.querySelector('article').appendChild(newParent);
    parent.remove();
}());
