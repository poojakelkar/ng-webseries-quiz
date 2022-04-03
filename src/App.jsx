import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Questions from "./pages/Questions";
import Quizzes from "./pages/Quizzes";
import Result from "./pages/Result";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quizzes" element={<Quizzes />} />
        <Route path="/quiz/:quizId" element={<Questions />} />
        <Route path="/quiz/:quizId/result/" element={<Result />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
