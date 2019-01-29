import { all, fork } from "redux-saga/effects";
import { watchExamGenerateRequest } from "moudles/home/saga";

export default function* rootSaga() {
  yield all([
    fork(watchExamGenerateRequest)
  ]);
}
