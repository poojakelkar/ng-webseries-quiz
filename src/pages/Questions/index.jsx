import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { types } from "../../store/constants";
import { QuizContext } from "../../store/context";
import "./styles.css";

const Questions = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useContext(QuizContext);
  const { quizId } = useParams();
  const quiz = state?.quizzes.find((item) => item?.uuid === quizId);
  const currentQuestion = quiz?.questions?.[state?.currentQuestionIndex];
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const submitAnswerAndMoveToNextQuestion = () => {
    const currentQuestionIndex = state?.currentQuestionIndex;
    if (selectedAnswer) {
      dispatch({
        type: types.SUBMIT_ANSWER_AND_MOVE_TO_NEXT_QUESTION,
        payload: {
          uuid: quizId,
          answer: selectedAnswer,
        },
      });
      setSelectedAnswer("");
    }
    if (currentQuestionIndex >= quiz?.questions?.length - 1) {
      navigate(`/quiz/${quizId}/result/`);
    }
  };

  if (!quiz) {
    return <div className="question-container">Quiz not found</div>;
  }
  return (
    <div className="question-container">
      <p className="title-text">{quiz?.title}</p>
      <div className="question-header">
        <p className="question1-point">
          <span className="question-number">Question: </span>{" "}
          {state?.currentQuestionIndex + 1} / {quiz?.questions?.length}
        </p>
        <p className="score">
          <span className="question-score">Score: </span> 0
        </p>
      </div>
      <p className="question">{currentQuestion?.question}</p>
      <div className="options-btn">
        {currentQuestion?.options?.map((opt, index) => (
          <button
            key={index}
            className={`${
              selectedAnswer === opt ? "selected-option" : ""
            } options`}
            onClick={() => setSelectedAnswer(opt)}
          >
            {opt}
          </button>
        ))}
      </div>
      <button
        className="question-submit"
        onClick={submitAnswerAndMoveToNextQuestion}
      >
        Submit
      </button>
    </div>
  );
};

export default Questions;
