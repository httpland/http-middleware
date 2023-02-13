// Copyright 2023-latest the httpland authors. All rights reserved. MIT license.
// This module is browser compatible.

import type { Handler } from "./deps.ts";

/** HTTP middleware API. */
export interface Middleware {
  (request: Request, next: Handler): Response | Promise<Response>;
}
