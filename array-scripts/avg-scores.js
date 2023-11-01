let myScores = [45, 74, 89, 76, 90, 99];
let yourScores = [28, 56, 78, 89, 60, 70];

function getAverage(score) {
    let average = 0;

    for (let index = 0; index < score.length; index++) {
        average += score[index]
    }

    average /= score.length;
    console.log(Math.round(average));
}

getAverage(myScores);
getAverage(yourScores);