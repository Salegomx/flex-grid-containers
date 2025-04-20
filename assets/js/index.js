flexContainers = document.querySelectorAll('.flex');

flexContainers.forEach((container) => {
    const gap = container.getAttribute('gap');
    const direction = container.getAttribute('direction');
    const wrap = container.getAttribute('wrap');
    const align = container.getAttribute('align');
    const valign = container.getAttribute('valign');
    
    if (gap) container.style.setProperty('--flex-gap', gap);
    if (direction) container.style.setProperty('--flex-direction', direction);
    if (align) container.style.setProperty('--justify-content', align);
    if (valign) container.style.setProperty('--align-items', valign);
    if (wrap)
        wrap === 'no' ? container.style.setProperty('--flex-wrap', 'nowrap')
        : wrap === 'yes' ? container.style.setProperty('--flex-wrap', 'wrap')
        : null;

    /* child nodes */
    const children = container.children;
    if (children.lenght = 0) return;

    Array.from(children).forEach((child) => {
        const grow = child.getAttribute('grow');
        const shrink = child.getAttribute('shrink');
        const order = child.getAttribute('order');
        const width = child.getAttribute('width');

        if (grow) child.style.setProperty('--grow', grow);
        if (shrink) child.style.setProperty('--shrink', shrink);
        if (width) child.style.setProperty('--flex-basis', width);
        if (order) child.style.setProperty('--order', order);
    })
});

gridContainers = document.querySelectorAll('.grid');

gridContainers.forEach((container) => {
    const gap = container.getAttribute('gap');
    const columns = container.getAttribute('columns');
    const column_width = container.getAttribute('column-width');

    if (gap) container.style.setProperty('--grid-gap', gap);
    if (columns) container.style.setProperty('--columns', columns);
    if (column_width) container.style.setProperty('--column-width', column_width);

    /* child nodes */
    const children = container.children;
    if (children.lenght = 0) return;
})