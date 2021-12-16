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
