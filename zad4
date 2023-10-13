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

const getSubjectName = (usr, weight) => {
    return _.find(usr.allGrades, {'weight' : weight}).subjectName;
} 

console.log("Nazwa przedmiotu: " + getSubjectName(user, 1));