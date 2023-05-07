type StudentType<T, S> = {
  name: string;
  roll: number;
  class: T;
  subjects: S;
};

interface ISubjects {
  groups: string[];
  common: string;
  department: string;
}

interface ISubjectsTwo {
  groups: boolean[];
  common: string;
  department: string;
}

const studentOne: StudentType<number, ISubjects> = {
  name: "Arafat",
  roll: 23,
  class: 12,
  subjects: {
    groups: ["Biologay", "Physics", "Chemistry"],
    common: "Bangal",
    department: "Science",
  },
};

const studentTwo:StudentType<string, ISubjectsTwo> = {
  name: "Arafat",
  roll: 23,
  class: "Twelve",
  subjects: {
    groups: [true, false, true, false],
    common: "English",
    department: "Business"
  }
}



type a1 = string;
type a2 = a1 extends string ? string : null;

const mySelft:a2 = "hello world";

console.log(mySelft)