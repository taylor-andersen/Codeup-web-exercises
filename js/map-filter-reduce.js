const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//.filter
const threeLanguages = users.filter(user => user.languages.length >= 3);
console.log(threeLanguages);

//.map
const userEmails = users.map(user => user.email);
console.log(userEmails);

//.reduce
const totalExp = users.reduce((total, person) => {
    return total + person.yearsOfExperience;
}, 0);
console.log(`Total experience is ${totalExp} years.`);
const averageExp = totalExp / users.length;
console.log(`Average experience is ${averageExp} years.`);

//.reduce
const longestEmail = users.reduce((currentLongest, user) => {
    if (user.email.length > currentLongest.length) {
        return user.email;
    }
    return currentLongest;
}, '');
console.log(longestEmail);

//.reduce
const instructorsList = users.reduce((accumulator, user, index, array) => {
    accumulator += user.name;

    if (index < array.length - 1) {
        accumulator += ', ';
    }
    return accumulator;
}, 'Your instructors are: ');

console.log(instructorsList);

