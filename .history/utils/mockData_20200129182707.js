//
// This file includes mock user entities. This will hopefully be replaced by the entities 
// that be available to import from the TestUp service
//

// authentication level?
// multiple different wallets, array of wallets?


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
        email: "hotrod@luno.com",
        firstName: "Roddy",
        lastName: "Ricch",
        phone: "+447526611846",
        password: "StagingPassword1",
        phoneVerification: "1337",
        country: "South Africa",
        wallets: ['ZAR', "BTC", "BCH", "ETH"],
    }
];