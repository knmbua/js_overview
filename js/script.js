const userData = {
    name: 'JD',
    age: 44,
    phone: '777-777-7777',
    address: '555 coding st',
    info: {
        location: 'Atlanta area',
        hobbies: ['pickleball', 'fishing']
    },

    printAge: function () {
        console.log(this.age);
    },
    haveBirthday: function () {
        this.age++;
        console.log("Happy Birthday");
    },
    addHobby: function (hobby) {
        // Need to reference an argument that is passed to addHobby (string of a hobby)
        this.info.hobbies.push(hobby);
    },
    // Push the argument(hobby) to the info.hobbies array
    printHobbies: function() {
        // console.log the hobbies array
        console.log(this.info.hobbies);
        // BONUS - Loop over the hobbies array and console.log each hobby
        for (let i = 0; i < this.info.hobbies.length; i++) {
            console.log(this.info.hobbies[i]);
        }
    }
}

userData.addHobby('traveling');
userData.printHobbies()
