# http-middleware

HTTP middleware specification

## What

Define standard HTTP middleware specifications. This is intended to increase the
interoperability of the HTTP library's own middleware.

It consists only of the web standards stack and is compatible with many
Browsers.

## Interface

Middleware interfaces can be defined in TypeScript as follows:

```ts
interface Middleware {
  (request: Request, next: Handler): Response | Promise<Response>;
}

interface Handler {
  (request: Request): Response | Promise<Response>;
}
```

## Features

`Middleware` has the following features:

- Compatible with `Handler`.

  `Handler` is a powerful interface for handling HTTP requests. The `Middleware`
  is purely an extension and compatibility with `Handler`.

- It can access to the `Request`.
- It can access the next handler.
- It can call the next handler.
- It can choose not to call the next handler.
- It can access the next handler's return value (`Response`).
- It can return `Response`.

## License

Copyright © 2023-present [httpland](https://github.com/httpland).

Released under the [MIT](./LICENSE) license
