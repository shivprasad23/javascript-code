// objects inside array 
// very useful in real world applications

const users = [
    {userId: 1,firstName: 'shiv', gender: 'male'},
    {userId: 2,firstName: 'viraj', gender: 'male'},
    {userId: 3,firstName: 'dipak', gender: 'male'},
]
for(let user of users){
    console.log(user.firstName);
}