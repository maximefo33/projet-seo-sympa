// essai https://fakerjs.dev/guide/usage.html - 17/6/25

// installation du package : npm install @faker-js/faker --save-dev
// puis suivi de la consigne : https://fakerjs.dev/guide/usage.html

import { faker } from '@faker-js/faker';
// or, if desiring a different locale
// import { fakerDE as faker } from '@faker-js/faker';

//*************************** */ see@ https://fakerjs.dev/api/person.html
// nom entier au hasard
const randomName = faker.person.fullName(); // Rowan Nikolaus
console.log(randomName, 'nom au hasard');

// mail au hasard
const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
console.log(randomEmail, "mail au hasard");


// prénom au hasard
const randomFirstName = faker.person.firstName(); // Rowan 
console.log(randomFirstName, 'prénom au hasard');

// nom de famille au hasard
const randomLastName = faker.person.lastName(); //  Nikolaus
console.log(randomLastName, 'nom de famille au hasard');

// bio au hasard
const randomBio = faker.person.bio(); 
console.log(randomBio, 'bio au hasard');

// job au hasard
const randomJobTitle = faker.person.jobTitle(); // pâtissier
console.log(randomJobTitle, 'job au hasard');

// tel au hasard
const randomPhone = faker.phone.number(); 
console.log(randomPhone, 'n° de tel au hasard');



// **********************************see@ https://fakerjs.dev/api/internet.html

// nom utilisateur au hasard (nom d'affichage)
const randomUserName = faker.internet.username(); 
console.log(randomUserName, 'nom utilisateur au hasard');

// mot de passe
const randomPassword = faker.internet.password(); 
console.log(randomPassword, 'mot de passe au hasard');

// emoji
const randomEmoji = faker.internet.emoji(); 
console.log(randomEmoji);


// nom de domaine site 
const randomDomainName = faker.internet.domainName();
console.log(randomDomainName, 'nom de domaine au hasard');


// url
const randomUrl = faker.internet.url(); 
console.log(randomUrl, 'url au hasard');


// ************************************* @see https://fakerjs.dev/api/location.html#
const randomStreetAddress = faker.location.streetAddress(); 
console.log(randomStreetAddress, 'rue etc adresse au hasard');

const randomCity = faker.location.city(); 
console.log(randomCity, 'ville au hasard');

const randomZipCode = faker.location.zipCode(); 
console.log(randomZipCode, 'CP au hasard');


// *********************************@see https://fakerjs.dev/api/number.html

const randomSiret = faker.string.numeric(14);
console.log(randomSiret, 'n° siret 14 chiffres au hasard');