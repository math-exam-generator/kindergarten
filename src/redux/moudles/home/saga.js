import { takeLatest, takeEvery, call, put, select } from "redux-saga/effects";
import { delay } from "redux-saga";
import MathGenerator from "../../../utils/generator";
import {
  EXAM_GENERATE_REQUEST,
  EXAM_GENERATE_LOADING,
  EXAM_GENERATE_SUCCESS,
  EXAM_GENERATE_FAILED
} from "./action";

export function* watchExamGenerateRequest() {
  yield takeEvery(EXAM_GENERATE_REQUEST, examGenerate);
}

export function* examGenerate(action) {
  yield put({ type: EXAM_GENERATE_LOADING });
  console.log("========>",action.payload)
  const data = MathGenerator.run(action.payload);
  yield delay(1500);
  yield put({ type: EXAM_GENERATE_SUCCESS, data });
}
