const person = {
    name: 'Edward',
    nickname: 'Duke',
    city: 'New York',
    age: 37,
    isStudent: true,
    skills: ['JavaScript', 'HTML', 'CSS']
};

for (let key in person) {
    console.log(`${key}: ${person[key]}`);
}
