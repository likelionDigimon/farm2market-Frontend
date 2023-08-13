import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/project/header/header";  // 헤더 컴포넌트를 불러옵니다.
import Main from "./component/project/main/main";
import Mypage from "./component/project/mypage/mypage";
import Signin from "./component/project/signin/signin";
import Signup from "./component/project/signup/signup";
import Proboard from "./component/project/proboard/proboard";
import QuestionBoard from "./component/project/questionboard/questionboard";
import AIWriting from "./component/project/writing/aiwriting/aiwriting";
import Questiondetail from "./component/project/questionboard/questiondetail";
import GenralWriting from "./component/project/writing/generalwriting";
import SellDetail from "./component/project/sellboard/selldetail/selldetail";
import ProDetail from "./component/project/proboard/prodetail/prodetail";

import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/proboard" element={<Proboard />} />
          <Route path="/questionboard" element={<QuestionBoard />}/>
          <Route path="/questiondetail" element={<Questiondetail />}/>
          <Route path="/generalwriting" element={<GenralWriting />}/>
          <Route path="/aiwriting" element={<AIWriting />}/>
          <Route path="/selldetail" element={<SellDetail/>}/>
          <Route path="/prodetail" element={<ProDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
