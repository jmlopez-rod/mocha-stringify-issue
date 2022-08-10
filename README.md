# mocha stringify issue

This is a repo to reproduce a mocha issue:

https://github.com/mochajs/mocha/issues/4910

Start by running `npm install`. Then run `npx karma start` to see karma fail
properly when `JSON.stringify` is overwritten.

Comment out the patch in `index.jsx` and see karma get stuck until it karma
disconnects.
