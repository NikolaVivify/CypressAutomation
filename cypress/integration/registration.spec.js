import {registration} from '../Models/registrationPageModel'

const faker = require('faker')

const userData = {
    randomName : faker.name.firstName(),
    randomLastName : faker.name.lastName(),
    randomEmail : faker.internet.email(),
    randomPassword : faker.internet.password()

}


describe('Registration testovi', () => {


/*function getRandomEmail() {
    
    var random_number = Math.floor(Math.random() * (100000, 999999));

    var email = (random_number+'@gmail.com');

    return email.toString();
}*/

/*function randomEmail() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 11) + '@gmail.com'
    );
    }
var random_email = randomEmail();*/

    it('Poseti stranicu', () => {
        registration.visitRegistrationPage()
        registration.registerUser(userData.randomName, userData.randomName, userData.randomEmail, userData.randomPassword, userData.randomPassword)
    })
})