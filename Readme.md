
# babel-plugin-jss-simple

[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

Add filename keys to your jss-simple declarations to help with hot reloading

## Installation

    $ npm install babel-plugin-jss-simple

## What it does

It transforms this:

```javascript
import css from 'jss-simple'

const style = css({
  primary: {
    color: 'green'
  }
})
```

into this:

```javascript
import css from 'jss-simple'

const style = css({
  primary: {
    color: 'green'
  }
})
```

## Why do I want this?

If you are using hot module replacement on the client, you won't be able to tell which styles are the new styles. This provides a key (the filename) to jss-simple so that it can replace the previous style with the new style, and your stylesheet doesn't grow huge.

## Do I have to call it 'css'?

No. It will track whatever you've called your default import and rewrite it appropriately.

## License

MIT
