let grades = [];
for (let i = 0; i < 12; i++){
    grades.push(Math.floor(Math.random()*100));
}
console.log(grades);

const averegeGrades = grades.reduce((accum , mark) =>{
    return accum + mark;
}, 0);
console.log(averegeGrades / grades.length);

const bestMark = Math.max.apply(null, grades);
console.log(bestMark);

const worstMark = Math.min.apply(null, grades);
console.log(worstMark);

const goodMarks = grades.filter((mark) => {
    if (mark >= 60) {
        return mark;
    }
});
console.log(goodMarks);

const notGoodMarks = grades.filter((mark) => {
    if (mark < 60) {
        return mark;
    }
});
console.log(notGoodMarks);

const markNames = grades.map(function (mark) {
    if (mark >= 80 && mark <= 100) {
        return "A";
    } else if (mark >= 60 && mark <= 79) {
        return "B";
    } else if (mark >= 40 && mark <= 59) {
        return "C";
    } else if (mark >= 20 && mark <= 39) {
        return "D";
    } else {
        return "E";
    }
});

console.log(markNames);
