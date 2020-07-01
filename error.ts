// Copyright 2020 the denogram authors. All rights reserved. MIT license.

/** Telegram error */
export class TelegramError extends Error {
  code: number;
  description: string;

  constructor(code: number, description: string) {
    super(`${code} ${description}`);

    this.code = code;
    this.description = description;
  }
}
