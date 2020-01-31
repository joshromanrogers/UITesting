# UITesting

To run tests: `npm test`

-- Proof of concept --

User flows with the highest traffic within pod website from Google Analytics data, during January:

1. / -> /en/login -> wallet
2. / -> /en/signup (through the 'Get Started' CTA)
3. / -> /en/price/btc -> /en/login
4. / -> /blog/en/post -> /blog/en

Decided to cover the 'Sign In' Flow and a fraction of the 'Sign Up' flow for now.

Using Jasmine to align with our angular testing, and installed Jasmine Console Reporter to output detailed test results to the console.

Issues:

1. Some difficulty locating elements on the DOM but this should be resolved once we've added IDs
2. Ocassionaly a few of the tests will give a false negative, with a rerun they work fine. This may be a timeout issue but it happens quite often with e2e testing and I think it's worth figuring out how to cover these irregularites. e.g. If the tests fail, rerun the tests to confirm there's actually an issue.

Going Forwards:

1. Naming convention for IDs
2. Add IDs relevant to 'Sign In' and 'Sign Up' flow, ensuring that we don't introduce duplicates, especially with reusable Angular components.
3. Tests aren't currently working in parallel 'afterEach(Driver.quit)' - should fix this to significantly increase overall speed.
4. Interested in implementing functionality to cycle over multiple users for tests.
