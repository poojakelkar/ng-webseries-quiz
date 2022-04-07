import { types } from "./constants";
import data from "./data.json";

export const reducer = (currentState, action) => {
  console.log({ ...currentState }, "previous");
  switch (action.type) {
    case types.SUBMIT_ANSWER_AND_MOVE_TO_NEXT_QUESTION:
      const currentQuesIndex = currentState?.currentQuestionIndex ?? 0;
      const quizIndex = currentState?.quizzes?.findIndex(
        (item) => item?.uuid === action?.payload?.uuid
      );
      console.log(quizIndex);
      if (quizIndex !== -1) {
        const currentQuestion =
          currentState?.quizzes?.[quizIndex]?.questions?.[currentQuesIndex];
        if (currentQuestion) {
          currentState.quizzes[quizIndex].questions[currentQuesIndex] = {
            ...currentQuestion,
            submittedAnswer: action?.payload?.answer,
          };
        }
        if (
          currentState?.quizzes?.[quizIndex]?.questions?.length - 1 >
          currentState.currentQuestionIndex
        ) {
          currentState.currentQuestionIndex += 1;
        }
      }
      console.log({ ...currentState }, "updated");
      return { ...currentState };
    case types.STORE_QUIZZES:
      return { ...action?.payload };
    default:
      break;
  }
};
export const initialState = data;
