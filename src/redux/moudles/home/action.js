import { createAction } from "redux-actions";

export const EXAM_GENERATE_REQUEST = "exam/generate_request";
export const EXAM_GENERATE_LOADING = "exam/generate_loading";
export const EXAM_GENERATE_SUCCESS = "exam/generate_success";
export const EXAM_GENERATE_FAILED = "exam/generate_failed";

/**
 * Exam generate action
 * @param {Object}  { operate: "additive | subtraction", scope: 10, qty: 60 }
 */

export const examGenerateRequest = createAction(EXAM_GENERATE_REQUEST);
