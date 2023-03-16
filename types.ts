// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

/** HTTP handler API. */
export interface Handler {
  (request: Request): Promise<Response> | Response;
}

/** HTTP middleware API. */
export interface Middleware {
  (request: Request, next: Handler): Response | Promise<Response>;
}
