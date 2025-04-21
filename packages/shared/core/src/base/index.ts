import { convertToPlainObject } from "./convert-to-plain-object";
import { formatNumberWithDecimal } from "./format-number-with-decimal";
import { IService, IPagination, IRepository } from "./interfaces";
import { Optional } from "./optional";
import { Either, Left, Right, left, right } from "./handle-errors";
import { Result } from "./result";

export type { IService, IPagination, IRepository, Optional, Either };
export {
  convertToPlainObject,
  formatNumberWithDecimal,
  Left,
  Right,
  left,
  right,
  Result,
};
