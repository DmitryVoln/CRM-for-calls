export interface ICall {
  [key: string]: any;
}

export interface ICallsState {
  calls: {results:  ICall[], total_rows: string};
  isLoadind: boolean;
  error: string;
}