import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Admin from "./components/Admin";
import All from './components/ALL';
import QuestionnaireDetails from "./components/QuestionnaireDetails";
import AllAnswers from "./components/AllAnswers";
import AnswerDetails from "./components/AnswerDetails";
import QuestionDetails from "./components/QuestionDetails";
import Healthcheck from "./components/Healthcheck";
import Ques from "./components/User";
import QuesList from "./components/QuesList";
import QuesDetails from "./components/QuesDetails";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path='/all' element={<All />} />
          <Route path="/questionnaire/:id" element={<QuestionnaireDetails />} />
          <Route path="/allanswers" element={<AllAnswers />} />
          <Route path="/healthcheck" element={<Healthcheck />} />
          <Route path="/answer/:id" element={<AnswerDetails />} />
          <Route path="/answer/:id/:qid/:opt" element={<QuestionDetails />} />
          <Route path='/user' element={<Ques />} />
          <Route path="/ques/:idsession/:qid" element={<QuesDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
