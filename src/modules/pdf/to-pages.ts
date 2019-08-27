import jsPDF from 'jspdf';

export function toPages(elements:Array<HTMLElement>):Promise<jsPDF> {
    const doc = new jsPDF();
    const flags = {width: 190};
    const promiseArray = elements.map((element:HTMLElement, index:number) =>
        new Promise(resolve =>
            doc.fromHTML(element, 10, 10, flags, () => {
                if (index < elements.length - 1) {
                    doc.addPage();
                }
                resolve();
            })
        )
    );

    return Promise.all(promiseArray).then(() => doc);
}
