const _ = require('lodash');

const user = {
    name: 'Michał',
    surname: 'Polak',
    allGrades: [
        {
            subjectName: 'Matematyka',
            grades: [5,4,3,5,2],
            weight: 3
        },
        {
            subjectName: 'Historia',
            grades: [3,3.5,2],
            weight: 1
        },
        {
            subjectName: 'Informatyka',
            grades: [4,3,3.5],
            weight: 5
        }
    ]
}

const average = (usr) => {
    let gradesFromSubject = usr.allGrades;

    let mianownik = 0;
    let dzielnik = 0;
    for(let i =0; i < gradesFromSubject.length; i++) {
        mianownik += _.sum(gradesFromSubject[i].grades) * gradesFromSubject[i].weight;
        dzielnik += gradesFromSubject[i].grades.length * gradesFromSubject[i].weight;
    }
    // console.log(mianownik/dzielnik);
    return mianownik / dzielnik;
}

console.log("Srednia ocen dla " + user.name + " " + user.surname + " wynosi: " + average(user));