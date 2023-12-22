# Simple URL Shortener

This is a basic URL shortener service designed to generate shortened URLs and track the total visits/clicks on each URL.

## Usage

### Shorten a URL

To shorten a URL, make a `POST` request to the following endpoint:

```
POST /URL
```

This will generate a new short URL in the format `example.com/random-id` and return it in the response.

### Redirect to the Original URL

To redirect a user to the original URL associated with a short ID, make a `GET` request to the following endpoint:

```
GET /:id
```

Replace `:id` with the short ID obtained when creating the shortened URL.

### URL Analytics

To retrieve the total clicks/visits for a specific short ID, make a `GET` request to the following endpoint:

```
GET /URL/analytics/:id
```

Replace `:id` with the short ID for which you want to retrieve analytics information.
