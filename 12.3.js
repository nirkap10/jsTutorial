const school = {
    teachers: [
    {
    id: 1,
    name: "Pinchas",
    subjects: ["chemistry", "biology", "physics"],
    students: [],
    capacityLeft: 3,
    },
    {
    id: 2,
    name: "Williams",
    subjects: ["history", "ethics"],
    students: [],
    capacityLeft: 2,
    },
    ],
    students: [
    {
    id: 10,
    name: "Jennifer",
    age: 20,
    },
    {
    id: 11,
    name: "Howard",
    age: 23,
    },
    {
    id: 12,
    name: "Old-Timmy",
    age: 86,
    },
    {
    id:13,
    name: "Houston",
    age: 21,
    },
    ],
    };
//     1. A method called “findPerson” takes two arguments, a type
// (either a student or teacher), and an id. It will return a
// particular object of that person.
// 2. A method called “assignStudent” that takes two
// arguments, a student’s id and a subject. Assign all of the
// students to the first available teacher who teaches that
// subject and who is not in full capacity. If all of the teachers
// are in the full capacity log to the console “Sorry, no
// available teachers left”.
// 3. A method called “assignTeachersSubject” that takes two
// arguments, the teacher’s id, and a new subject. Assign the
// new subject to that particular teacher if that subject
// doesn’t exist in their array of subjects.
// 4. Create a new method for anything you want


//1
function findPerson(arr,id){
    return school[arr].find(person => person.id === id)
}
// console.log(findPerson('students', 12));

//2
function assignStudent(subject,id){
    let found = false;
   const student = findPerson('students', id);
   school.teachers.find(teacher => {
    if(teacher.subjects.includes(subject) && teacher.capacityLeft>0){
        teacher.students.push(student);
        teacher.capacityLeft--;
        found = true;
    } 
    })
    if(found === false){
        console.log('Sorry, no available teachers left');
    }
}
assignStudent("history",10);

//3
function assignTeachersSubject(id,subject){
    school.teachers.find(teacher => {
        if(teacher.id === id){
          if(teacher.subjects[subject] === undefined){
            teacher.subjects.push(subject);
          }  
        }
    })
}
assignTeachersSubject(1,"hiyjstory");
console.log(school.teachers[0].subjects);

//4
function kickedOut(arr, id){
    const obj = school[arr].find(person => person.id === id)
    const index = school[arr].indexOf(obj);
    school[arr].splice(index, 1);
}
kickedOut('students', 10);
console.log(school.students);