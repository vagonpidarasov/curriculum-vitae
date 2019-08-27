import jsPDF from 'jspdf';
import {toPages} from './to-pages';
import {toHTMLElements} from './to-html-elements';

export function toPDF(filename:string, element:HTMLElement) {
    const elements = toHTMLElements(element);
    const pages = toPages(elements);
    pages.then((doc:jsPDF) => doc.save(filename));
}
