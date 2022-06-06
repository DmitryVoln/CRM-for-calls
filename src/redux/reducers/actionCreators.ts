import { AppDispatch } from "../store"
import { callsSlice } from "./callsSlice";
import { BASE_URL } from '../constants'

export const requestCalls = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(callsSlice.actions.callsFetching());
    const response = await fetch(`${BASE_URL}getList`, {
        headers: {
            'Authorization': 'Bearer testtoken',
          },
          method: 'POST',
    });
    const responseJSON = await response.json();
    dispatch(callsSlice.actions.callsFetchingSuccess(responseJSON))
  } catch (error) {
      if (error instanceof Error) {
        dispatch(callsSlice.actions.callsFetchingError(error.message))
        return;
      }
      console.log(error);
  }
};




