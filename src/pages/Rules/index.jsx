import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Rules = () => {
  return (
    <div className="rules-container">
      <h1 className="rule-heading">Rules for Quiz</h1>
      <div className="wrapper">
        <p className="rules">
          To answer the question you need to click on the rectangle which
          contain answer.
        </p>
        <p className="rules">
          If you click right answer. you will go on to the next page.
        </p>
        <p className="rules">
          Each question carries one marks.top side it show qustion counts.
        </p>
        <p className="rules">
          After submitting question you cannot go back and changed it.
        </p>
        <Link to="/quizzes" style={{ textDecoration: "none" }}>
          <button className="agree">Agree</button>
        </Link>
      </div>
    </div>
  );
};

export default Rules;
