# http-middleware

HTTP middleware specification

## What

Define standard HTTP middleware specifications. This is intended to increase the
interoperability of the HTTP library's own middleware.

It consists only of the web standards stack and is compatible with many
browsers.

## Terms

<dl>
<dt>Upstream</dt>
<dd>Refers to HTTP requests forwarded from the client to the server.</dd>

<dt>Downstream</dt>
<dd>Refers to the HTTP response forwarded from the server to the client.</dd>
</dl>

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

- Compliant with [Fetch API](https://fetch.spec.whatwg.org/).
- Compliant with `Handler`.

  `Handler` is a powerful interface for handling HTTP requests. The `Middleware`
  is purely an extension and compatibility with `Handler`.

- It is a pure function.

  `Middleware` is a pure function that returns a value. Implementations are
  expected to have no side effects.
- It is self-contained.
- It can handle upstream.
- It can handle downstream.
- It can handle next handler.

## Implementation

See [chain-handler](https://github.com/httpland/chain-handler) for a concrete
implementation that can handle middleware

## License

Copyright © 2023-present [httpland](https://github.com/httpland).

Released under the [MIT](./LICENSE) license
