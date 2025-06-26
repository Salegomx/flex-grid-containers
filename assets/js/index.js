flexContainers = document.querySelectorAll('[data-layout="row"]');

flexContainers.forEach((container) => {
    const gap = container.getAttribute('data-gap');
    const columnGap = container.getAttribute('column-gap');
    const rowGap = container.getAttribute('row-gap');
    const direction = container.getAttribute('data-direction');
    const wrap = container.getAttribute('data-wrap');
    const align = container.getAttribute('data-align');
    const valign = container.getAttribute('data-valign');
    const width = container.getAttribute('data-width');
    
    if (gap) container.style.setProperty('--flex-gap', gap);
    if (columnGap) container.style.setProperty('--column-gap', columnGap);
    if (rowGap) container.style.setProperty('--row-gap', rowGap);
    if (direction) container.style.setProperty('--flex-direction', direction);
    if (align) container.style.setProperty('--justify-content', align);
    if (valign) container.style.setProperty('--align-items', valign);
    if(width) container.style.setProperty('--flex-width', width);
    if (wrap)
        wrap === 'no' ? container.style.setProperty('--flex-wrap', 'nowrap')
        : wrap === 'yes' ? container.style.setProperty('--flex-wrap', 'wrap')
        : null;

    /* child nodes */
    const children = container.children;
    if (children.lenght = 0) return;

    Array.from(children).forEach((child) => {
        const grow = child.getAttribute('data-grow');
        const shrink = child.getAttribute('data-shrink');
        const order = child.getAttribute('data-order');
        const childWidth = child.getAttribute('data-width');

        if (grow) child.style.setProperty('--grow', grow);
        if (shrink) child.style.setProperty('--shrink', shrink);
        if (childWidth) child.style.setProperty('--flex-basis', childWidth);
        if (order) child.style.setProperty('--order', order);
    })
});

gridContainers = document.querySelectorAll('[data-layout="grid"]');

gridContainers.forEach((container) => {
    /* turn parent into CSS container */
    const parent = container.parentElement;
    parent.style.setProperty('container-type', 'inline-size');

    const gap = container.getAttribute('data-gap');
    const columnGap = container.getAttribute('column-gap');
    const rowGap = container.getAttribute('row-gap');
    const columns = container.getAttribute('data-columns');
    const width = container.getAttribute('data-width');

    if (gap) container.style.setProperty('--grid-gap', gap);
    if (columnGap) container.style.setProperty('--column-gap', columnGap);
    if (rowGap) container.style.setProperty('--row-gap', rowGap);
    if (columns) container.style.setProperty('--template-columns', getTemplateColumns(columns));
    if(width) container.style.setProperty('--grid-width', width);
    
    /* child nodes */
    const children = container.children;
    if (children.lenght = 0) return;

    Array.from(children).forEach((child) => {
        const span = child.getAttribute('data-span');

        if (span) child.style.setProperty('--span', span);
    })
})

/* Helper functions */
function getTemplateColumns(str) {
    return str
        .split(' ')
        .map(val => {
            if (val === 'auto') {
                return '1fr';
            } else if (!isNaN(val)) {
                return val+'fr';
            } else {
                return val;
            }
        })
        .join(' ');
};