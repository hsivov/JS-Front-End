function editElement(element, match, replace) {

    let content = element.textContent;

    while (content.includes(match)){
        content = content.replace(match, replace);
    }
    element.textContent = content;
}
