# @cipherr/slug-generator

A quick slug generator for blog applications and apps that require keeping track of unique slugs.

## Installation

You can install the package using npm:

```bash
npm install @cipherr/slug-generator
```

## Usage

Here is a simple example of how to use the slug generator in your project:

```javascript
const generateSlug = require("@cipherr/slug-generator");

const title = "My First Blog Post";
const slug = generateSlug(title);

console.log(slug);
// Output example: my-first-blog-post-c8317e3371f44e82b3d37c35c91152a5
```

## How It Works

The `generateSlug` function takes a string as input and performs the following operations:

1. Converts the text to lowercase.
2. Replaces spaces with hyphens `-`.
3. Appends a generated UUID (with hyphens removed) to the end of the string to guarantee uniqueness.

This is particularly useful for systems where you need unique URL slugs for posts or items that might share similar titles.

## API

### `generateSlug(text)`

-   **text** _(string)_: The text you want to convert into a slug.
-   **Returns** _(string)_: The formatted slug identifying the text uniquely.

## License

ISC

## Author

[cipherr](https://github.com/AfolabiOlajide)
