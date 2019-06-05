import * as jsPDF from 'jspdf';
import {Employee} from './models';

export function downloadPDF(employee:Employee, html:HTMLElement) {
    const doc = new jsPDF();
    const flags = {width: 190};
    const {name} = employee;
    // const fileName = `${name.replace(/\s/g, '-')}-${new Date().getTime()}.pdf`;
    const fileName = `${name.replace(/\s/g, '-')}.pdf`;
    const elementList = html.querySelectorAll('employee-summary > section');
    const elements:HTMLElement[] = Array.prototype.slice.call(elementList);

    const promiseArray = elements.map((element:HTMLElement, index:number) =>
        new Promise(resolve =>
            doc.fromHTML(element, 10, 10, flags, () => {
                resolve();
                if (index < elements.length - 1) {
                    doc.addPage();
                }
            })
        )
    );

    Promise.all(promiseArray).then(() => doc.save(fileName));
}
