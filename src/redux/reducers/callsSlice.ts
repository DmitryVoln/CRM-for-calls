import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ICallsState } from "./slices.types";

const initialState: ICallsState = {
  calls: { results: [], total_rows: "" },
  isLoadind: false,
  error: "",
};

export const callsSlice = createSlice({
  name: "calls",
  initialState,
  reducers: {
    callsFetching(state) {
      state.isLoadind = true;
    },
    callsFetchingSuccess(state, action: PayloadAction<ICallsState["calls"]>) {
      state.calls = action.payload;
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
