import registrationModel from './registrationPageModel'
import LoginModel from './registrationPageModel'

describe('Registration testovi', () => {

var registration = new registrationModel();

/*function getRandomEmail() {
    
    var random_number = Math.floor(Math.random() * (100000, 999999));

    var email = (random_number+'@gmail.com');

    return email.toString();
}*/

function randomEmail() {
    return (
      Math.random()
        .toString(36)
        .substring(2, 11) + '@gmail.com'
    );
    }
var random_email = randomEmail();

    it('Poseti stranicu', () => {
        registration.visitRegistrationPage()
        registration.registerUser('ime', 'prezime', random_email, '12345678', '12345678')
    })
})