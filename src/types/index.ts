export enum ROOT_OP_NAMES {
  QUERY = "QUERY",
  MUTATION = "MUTATION",
  SUBSCRIPTION = "SUBSCRIPTION"
}

export enum GQL_NAMED_TYPES {
  SCALAR = "SCALAR",
  ENUM = "ENUM",
  OBJECT_TYPE = "TYPE",
  INPUT = "INPUT",
  INTERFACE = "INTERFACE",
  UNION = "UNION"
}

export enum GQL_INPUT_TYPES {
  SCALAR = "SCALAR",
  ENUM = "ENUM",
  INPUT = "INPUT"
}

export enum GQL_OUTPUT_TYPES {
  SCALAR = "SCALAR",
  ENUM = "ENUM",
  OBJECT = "OBJECT",
}

export enum GQL_WRAPPER_TYPES {
  LIST = "LIST",
  NON_NULL = "NON_NULL"
}

export interface GQLRootOperationTupleMap {
  [ROOT_OP_NAMES.QUERY]: string[] | undefined;
  [ROOT_OP_NAMES.MUTATION]: string[] | undefined;
  [ROOT_OP_NAMES.SUBSCRIPTION]: string[] | undefined;
}

export interface GQLRootOperationMap {
  [ROOT_OP_NAMES.QUERY]: GQLRootOperation | undefined;
  [ROOT_OP_NAMES.MUTATION]: GQLRootOperation | undefined;
  [ROOT_OP_NAMES.SUBSCRIPTION]: GQLRootOperation | undefined;
}

export interface GQLRootOperation {
  rootOperationName: ROOT_OP_NAMES;
  permittedRequests: GQLExecutionRequest[]
}

export interface GQLExecutionRequest{
  requestName: string;
  requestArgs: number;
  requestArgDefs: ExecutionRequestArg[]
  requestReturn: ExecutionRequestReturn
}

export interface ExecutionRequestArg {
  argName: string;
  argType: GQL_INPUT_TYPES;
  isOptional: boolean;
}

export interface ExecutionRequestReturn {
  type: GQL_OUTPUT_TYPES;
  isOptional: boolean;
  isList: boolean;
  isListValueOptioal: boolean; 
}