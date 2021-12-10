interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Kim',
    lastName: 'HzA',
    age: 28,
    location: 'Medellin'
}

const student2: Student = {
    firstName: 'Jhon',
    lastName: 'HzA',
    age: 21,
    location: 'Medellin'
}

const studentsList = [student1, student2];
const bodyTag = document.querySelector("body") as HTMLBodyElement;
const tableTag = document.createElement("table") as HTMLTableElement;
const tbodyTag = document.createElement("tbody") as HTMLTableSectionElement;

studentsList.forEach((student) => {
    const rowTag = tbodyTag.insertRow(0) as HTMLTableRowElement;
    const datacellTagA = rowTag.insertCell(0);
    datacellTagA.innerHTML = student.firstName;
    const datacellTagB = rowTag.insertCell(1);
    datacellTagB.innerHTML = student.location;
});

tableTag.append(tbodyTag);
bodyTag.append(tableTag);
