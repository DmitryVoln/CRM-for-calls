import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICallsState } from "./slices.types";

const initialState: ICallsState = {
  calls: { results: [], total_rows: "" },
  isLoadind: false,
  error: "",
};

const callsSorter = (call1: {[key: string]: string}, call2: {[key: string]: string}) => {
  return new Date(call1.date).getTime() > new Date(call2.date).getTime() ? 0 : 1;
};

export const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    callsFetching(state) {
      state.isLoadind = true;
    },
    callsFetchingSuccess(state, action: PayloadAction<ICallsState["calls"]>) {
      state.calls = {...action.payload, results: action.payload.results.sort(callsSorter) };
      state.isLoadind = false;
      state.error = "";
    },
    callsFetchingError(state, action: PayloadAction<string>) {
      state.isLoadind = false;
      state.error = action.payload;
    },
  },
});

export default callsSlice.reducer;
