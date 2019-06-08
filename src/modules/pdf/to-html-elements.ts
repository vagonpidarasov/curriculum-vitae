export function toHTMLElements(htmlElement:HTMLElement, selector:string = 'section'):HTMLElement[] {
    const elementList = htmlElement.querySelectorAll(selector);
    return Array.prototype.slice.call(elementList);
}
