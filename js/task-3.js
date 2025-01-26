function getElementWidth(content, padding, border) {
    const parseValue = (str) => parseFloat(str);
    const contentWidth = parseValue(content);
    const paddingWidth = parseValue(padding);
    const borderWith = parseValue(border);
    return contentWidth + 2 * (paddingWidth + borderWith);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200