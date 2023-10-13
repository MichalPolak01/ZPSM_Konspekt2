const collections = [
    {},
    15,
    "hello@test.pl",
    null,
    ['aaa', 'bbb', 5],
    'admin@gmail.com',
    undefined,
    'a34@yahoo.com',
    '321@a',
    '321.pl'
];

const getMails = (collection) => {
    const pattern = /^[a-zA-Z0-9]+@([a-zA-Z0-9]+\.)+[a-z]+$/i;

    collection.forEach(str => {(pattern.test(str))? console.log(str) : ""});
}

getMails(collections);