const classA = [
    {
      name: "Diego",
      grade: 10,
      disapproved: true
    },
    {
      name: "Dheyme",
      grade: 10
    },
    {
      name: "Fulano",
      grade: 4.5
    },
    {
      name: "Bil",
      grade: 3
    }
]
  
const classB = [
      {
        name: "Mark",
        grade: 10
      },
      {
        name: "Wallker",
        grade: 3
      },
      {
        name: "Jobs",
        grade: 8 
      }
]
  
function calculateAverage(students) {

    let sum = 0;

    for (let i = 0; i < students.length; i++) {
      sum = sum + students[i].grade;
    }

     const average = sum / students.length;

     return average
}
    
function sendMessage(average, turma) {

    if (average > 5) {
      console.log(`${turma} average, ${average} Nice`);
    }else{
      console.log(` ${turma} average, ${average} Is not good!`);
    }

}
  
function markAsFlunked(students) {

      students.disapproved = false;
      
      if (students.grade < 5) {
        students.disapproved = true;
      }
    
}

function SendDisapprovedMessage(students) {

    if (students.disapproved) {
      console.log(`O Aluno ${students.name} disapproved!`);
    } else {
      console.log(`O Aluno ${students.name} approved! Congratulations`);
    }

}

function studentDisapproved(students) {

  for (student of students) {
    markAsFlunked(student);
    SendDisapprovedMessage(student);
  }

}

const average1 = calculateAverage(classA);
const average2 = calculateAverage(classB);

sendMessage(average1, 'class A');
sendMessage(average2, 'class B');

studentDisapproved(classA);
console.log('##################')
studentDisapproved(classB);
