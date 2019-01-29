import { handleActions } from "redux-actions";
import {
  EXAM_GENERATE_LOADING,
  EXAM_GENERATE_SUCCESS,
  EXAM_GENERATE_FAILED
} from "./action";

const defaultState = {
  loading: false,
  data: null,
  error: null
};

export default handleActions(
  {
    [EXAM_GENERATE_LOADING]: (
      state
    ) => {
      return { ...state, loading: true, data: null, error: null };
    },
    [EXAM_GENERATE_SUCCESS]: (
      state, action = {}
    ) => {
      return { ...state, loading: false, data: action.data, error: null };
    },
    [EXAM_GENERATE_FAILED]: (
      state, action = {}
    ) => {
      return { ...state, loading: false, data: null, error: action.error };
    }
  },
  defaultState
);
