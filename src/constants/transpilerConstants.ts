import { GQL_NAMED_TYPES, GQL_SCALAR_TYPES } from '../types';

export const TRANSPILED_SCALARS_MAP = {
  [GQL_SCALAR_TYPES.INT]: 'number',
  [GQL_SCALAR_TYPES.FLOAT]: 'number',
  [GQL_SCALAR_TYPES.STRING]: 'string',
  [GQL_SCALAR_TYPES.ID]: 'string',
  [GQL_SCALAR_TYPES.BOOLEAN]: 'boolean'
}

export const TRANSPILED_NON_SCALARS_MAP = {
  [GQL_NAMED_TYPES.ENUM]: 'enum',
  [GQL_NAMED_TYPES.INPUT]: 'interface',
  [GQL_NAMED_TYPES.INTERFACE]: 'interface',
  [GQL_NAMED_TYPES.OBJECT_TYPE]: 'interface',
  [GQL_NAMED_TYPES.UNION]: 'type'
}

export enum MAPPED_NON_SCALARS {
  ENUM = 'enum',
  INTERFACE = 'interface',
  TYPE = 'type'
}

export const INTRO_TEXT =
`/*
* Type Definitions automatically generated via gql-tg at ${new Date().toLocaleString()}.
* Do not change this file directly as the changes would be overwritten.
* Change the source GraphQL Schema File instead.
*/`;

export const DEFAULT_SCHEMA_PATH = "./schema.graphql";

export const DEFAULT_DEFINITIONS_PATH = "./definitions.ts";

export const DEF_FILE_EXTENSION = '.ts';

export const ARG_SUFFIX = "ARGS";

export const LIST_SUFFIX = "[]";

export const INDENT_SPACE = `  `;

export const EXPORT = 'export';

export const NEW_LINE = '\n';

export const UNION_BAR = '|';

export const INCORRECT_OUTPUT_FILE_NAME_ERROR = "\x1b[31m[Error]: Output file must be a TS file!\x1b[37m";

export const INCORRECT_OUTPUT_FILE_PATH_ERROR = "\x1b[31m[Error]: Invalid Output File Path!\x1b[37m";