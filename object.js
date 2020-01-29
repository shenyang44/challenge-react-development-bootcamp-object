const randomString = Math.random().toString(36).substring(6)

// ------------ only modify the following object --------------
const user = {
    firstName: 'Joey',
    lastName: 'Tribbiani',
    fullName() {
        return (`${this.firstName} ${this.lastName}`);
    },
    actions: {
        laugh() { console.log('Muahaha') },
        getJoke() { return 'A lawyer walks into a bar exam' }
    },
    hobbies: [first = () => { console.log('I like to eat') },
    second = () => { console.log('I love to sleep') },
    third = () => { console.log('I am not real') }
    ],
    [randomString]: 'Hello World'
}

// ------------------------------------------------------------------------------

// DO NOT MODIFY THE FOLLOWING CODE
// Edit the user object such that everything below works as intended

console.log(user.firstName) // print "Joey"
console.log(user['lastName']) // print "Tribbiani"
console.log(user.fullName()) // print "Joey Tribbiani"

user.actions.laugh() // print "Muahaha"
console.log(user.actions.getJoke()) // print "A lawyer walks into a bar exam"

user.hobbies.forEach(function (hobby) {
    hobby()
})
// The loop above should print out these 3 lines:
// I like to eat
// I love to sleep
// I am not real

console.log(user[randomString]) // print "Hello World"