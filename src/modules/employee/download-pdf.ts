import jsPDF from 'jspdf';
import {Employee, Education, Experience} from './models';

export function downloadPDF(
    employee:Employee,
    education:Education,
    expertise:string[],
    currentPosition:Experience,
    experience:Experience[],
) {
    const doc = new jsPDF();
    const {name, title, phoneNumber, emailAddress, overview} = employee;
    const text1 = [
        name,
        title,
        phoneNumber,
        emailAddress,
        ...overview.split('.').map(o => `${o}.`),
        expertise.join(','),
    ];
    doc.text(text1, 10, 10, {maxWidth: 190});
    doc.addPage();
    const text2 = [
        currentPosition.position,
        currentPosition.companyName,
        ...currentPosition.description.split('.').map(o => `${o}.`),
    ];
    doc.text(text2, 10, 10, {maxWidth: 190});
    doc.save(`${name.replace(/\s/g, '-')}-${new Date().getTime()}.pdf`);
}
