const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        children: 'Link'
    }
};

function generateHTML(reactElement) {
    const { type, props } = reactElement;
    const attributes = Object.keys(props).filter(p => p !== 'children')
        .map(attr => `${attr}="${props[attr]}"`).join(' ');
    const children = props.children || '';
    return `<${type} ${attributes}>${children}</${type}>`;
}

function customRenderer(reactElement, container) {
    const html = generateHTML(reactElement);
    container.innerHTML = html;
}
const rootElement = document.getElementById('root');
customRenderer(reactElement, rootElement);
