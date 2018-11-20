import fetch from 'node-fetch'
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY

exports.handler = function(event, context, callback) {
  // Fetch the Books from Airtable
  fetch('https://api.airtable.com/v0/appB4V75drkeQ0rJc/Books', {
    headers: {
      'content-type': 'application/json',
      Authorization: 'Bearer ' + AIRTABLE_API_KEY,
    },
  })
    // Parse the JSON
    .then((res) => res.json())

    // Filter out records with no fields
    .then((json) => {
      return json.records.filter(
        (book) =>
          !(
            Object.keys(book.fields).length === 0 &&
            book.fields.constructor === Object
          )
      )
    })

    // Serialize the data we want
    .then((books) => {
      return books.map((book) => {
        return {
          id: book.id,
          title: book.fields.Title,
          tags: book.fields.Tags.map((tag) => tag.toLowerCase()),
          progress: book.fields.Progress,
          author: book.fields.Author,
          review: book.fields.Review,
          complete: book.fields.Complete,
          rating: book.fields.Rating,
          imageUrl: book.fields.Image[0].thumbnails.large.url,
        }
      })
    })

    // Build and send the response
    .then((books) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(books),
      })
    })
}
