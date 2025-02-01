// nested destructuring 
const users = [
    {userId: 1,firstName: 'siv', gender: 'male'},
    {userId: 2,firstName: 'viraj', gender: 'male'},
    {userId: 3,firstName: 'dipak', gender: 'male'},
]

const [{firstName: user1firstName, userId}, , {gender: user3gender}] = users;
console.log(user1firstName);
console.log(userId);
console.log(user3gender);