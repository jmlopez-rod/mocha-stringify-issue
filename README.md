# mocha stringify issue

Run `npx karma start` to see karma fail properly when `JSON.stringify` is
overwritten. Comment out the patch and karma will eventually time out.
