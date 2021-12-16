interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
}

// Example Holberton project
const teacher3: Teacher = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false,
  };
  
  console.log(teacher3);

interface Directors extends Teacher {
    numberOfReports: number;
}

// Example Holberton project
const director1: Directors = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  console.log(director1);

function printTeacher(firstName: String, lastName: String): String {
  return `${firstName.charAt(0)}. ${lastName}`;
};

interface printTeacherFunction {
  (firstName: String, lastName: String): String;
}
   
console.log(printTeacher("John", "Doe"));

class StudentClass implements interfaceClass {
  firstName: String;
  lastName: String;

  constructor(firstName: String, lastName: String) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): String {
    return 'Currently working';
  }

  displayName(): String {
    return this.firstName;
  }
}

interface constructorClass {
  new (firstName: String, lastName: String): interfaceClass;
}

interface interfaceClass {
  firstName: String;
  lastName: String;
  workOnHomework(): String;
  displayName(): String;
}

const student1= new StudentClass("Kim", "HzA");
console.log(student1.workOnHomework());
console.log(student1.displayName());
