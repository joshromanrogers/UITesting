//
// This file includes mock user entities. This will hopefully be replaced by the entities 
// that be available to import from the TestUp service.
//
// First user should has data that should pass all tests
// Second user has an illegal email
// Third user has an incorrect phone verification code
// Fourth user has an incorrect password

// authentication level?

let users = [
    {
        id: 1,
        email: "roman@luno.com",
        firstName: "Roman",
        lastName: "Rogers",
        phone: "+447526611845",
        password: "StagingPassword1",
        phoneVerification: "1337",
        country: "United Kingdom",
        wallets: ['GBP', "BTC", "BCH", "ETH"],
    },
    {
        id: 2,
        email: "hotrodluno.com",
        firstName: "Roddy",
        lastName: "Ricch",
        phone: "+447526611846",
        password: "StagingPassword1",
        phoneVerification: "1337",
        country: "South Africa",
        wallets: ['ZAR', "BTC", "BCH", "ETH"],
    },
    {
        id: 3,
        email: "roman@luno.com",
        firstName: "Roman",
        lastName: "Rogers",
        phone: "+447526611845",
        password: "StagingPassword1",
        phoneVerification: "1111",
        country: "United Kingdom",
        wallets: ['GBP', "BTC", "BCH", "ETH"],
    },
    {
        id: 4,
        email: "roman@luno.com",
        firstName: "Roman",
        lastName: "Rogers",
        phone: "+447526611845",
        password: "WrongPassword",
        phoneVerification: "1111",
        country: "United Kingdom",
        wallets: ['GBP', "BTC", "BCH", "ETH"],
    },
];


module.exports = users;