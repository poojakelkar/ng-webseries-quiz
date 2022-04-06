import { useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Questions from "./pages/Questions";
import Quizzes from "./pages/Quizzes";
import Result from "./pages/Result";
import Rules from "./pages/Rules";
import Signup from "./pages/Signup";
import { QuizContext } from "./store/context";
import { initialState, reducer } from "./store/reducer";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quizzes" element={<Quizzes />} />
          <Route path="/quiz/:quizId" element={<Questions />} />
          <Route path="/quiz/:quizId/result/" element={<Result />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Signup />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
      </BrowserRouter>
    </QuizContext.Provider>
  );
}
export default App;
