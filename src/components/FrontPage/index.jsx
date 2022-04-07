import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const FrontPage = () => {
  return (
    <div className="wrapper">
      <div className="heading">
        <h1 className="head">Welcome to Quiz QnA</h1>
        <p className="quizText">Play a quiz for differnt categories!</p>
        <Link className="link" to="/rules">
          <button className="quizbtn">Start Quiz</button>
        </Link>
      </div>
    </div>
  );
};

export default FrontPage;
