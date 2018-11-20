# Books

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```
yarn start # Start dev server
yarn run build # Build new version of producion code

yarn run build:lambda # Build lambda functions
AIRTABLE_API_KEY=XXXXXXXX yarn run start:lambda # Run lambda functions on port 9000
```

## TODO

- [ ] Create a Lambda function in `./functions` that gets Books from Githib and is called by the App component
- [x] Create an [Airtable base](https://airtable.com/tblfLodP8uDeVnTxR/viwsH7aS8Ae1aJapO)
- [ ] Wire up the [airtable API](https://airtable.com/appB4V75drkeQ0rJc/api/docs#curl/authentication), storing the credentials on Netlify
- [ ] Use CSS variables and repeat to set the number of columns in the `BooksGrid`.
- [ ] Clean up CSS for Book
- [ ] Clean up JS for Book - extract some stuff into components?
- [ ] Add proptypes for all components
- [ ] Add CSS overlay for book images (maybe use CSS filters?)
- [ ] Add default book image and use while loading real images
- [ ] Add some subtle animations with CSS and/or SVG
- [ ] Test on multiple viewports / add tiny responsive things.

## Then

- [ ] Write up article as Markdown
- [ ] Record screencasts from markdown
- [ ] Edit and publish screencasts/
