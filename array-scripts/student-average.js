let students = [
   { name: "Zephaniah", scores: [100, 96, 99, 92] },
   { name: "Pursalane", scores: [92, 89, 96, 100, 94] },
   { name: "Siddalee", scores: [65, 22, 11] },
   { name: "Ian", scores: [98, 84, 89, 100, 100, 76] },
   { name: "Elisha", scores: [89, 100] },
   { name: "Ezra", scores: [100, 99, 100, 87] },
];

function findStudentAverage(student) {
    for (let index = 0; index < student.length; index++) {
        console.log("Name: " + student[index].name);

        let scores = student[index].scores
        let sum = 0;

        for (let index = 0; index < scores.length; index++) {

            sum += scores[index]
            
        }

        sum /= scores.length;
        console.log("Grade Average: " + Math.round(sum));
    }
}

findStudentAverage(students)