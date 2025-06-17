// essai https://fakerjs.dev/guide/usage.html - 17/6/25
// https://github.com/O-clock-Behemoth/Projects/blob/main/aide/README.md => si besoin de + de 20 entrées dans la BDD

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


// *********************************** @see https://fakerjs.dev/api/commerce.html

const randomProductDescription = faker.commerce.productDescription;
console.log(randomProductDescription, 'description de l\'activité');


// ************************************* @see https://fakerjs.dev/api/image.html

const randomAvatar = faker.image.avatar();
console.log(randomAvatar, 'avatar au hasard');

// ************************************** @see https://fakerjs.dev/api/lorem.html

const randomSentence = faker.lorem.sentence({ min: 4, max: 15 });
console.log(randomSentence, 'phrase au hasard');

const randomLines = faker.lorem.lines({ min: 1, max: 4 })
console.log(randomLines, 'petit texte de 1 à 4 lignes');


// ************************************* @see https://fakerjs.dev/api/date.html

const randomFutureDate = faker.date.future({ years: 2 }) // '2026-11-23T09:38:28.710Z'
console.log(randomFutureDate, 'date inventée dans les 2 ans à venir');

const randomPastDate = faker.date.past({ years: 1 }) // '2024-10-25T21:34:19.488Z'
console.log(randomPastDate, 'date passée au hasard dans la dernière année');
