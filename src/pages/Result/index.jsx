import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { QuizContext } from "../../store/context";
import "./styles.css";

const Result = () => {
  const { quizId } = useParams();
  const { state, dispatch } = useContext(QuizContext);
  const quiz = state?.quizzes.find((item) => item?.uuid === quizId);

  const score = (
    quiz?.questions?.filter(
      (quest) => quest?.answer === quest?.submittedAnswer
    ) || []
  ).length;

  return (
    <div>
      <p className="title-text">
        Final Score: {score * 10} / {quiz?.questions?.length * 10}
      </p>
      {quiz?.questions?.map((item) => {
        return (
          <div className="questions-container">
            <p className="question">{item?.question}</p>
            <div className="options-btn">
              {item?.options?.map((option) => {
                return (
                  <button
                    className={`${
                      item?.answer === option ? "correct-answer" : ""
                    } ${
                      item?.submittedAnswer !== item?.answer &&
                      item?.submittedAnswer === option
                        ? "wrong-answer"
                        : ""
                    } select`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Result;
