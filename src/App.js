import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/project/main/main";
import Mypage from "./component/project/mypage/mypage";
import Signin from "./component/project/signin/signin";
import Signup from "./component/project/signup/signup";
import Proboard from "./component/project/board/proboard";
import Sellerboard from "./component/project/board/sellerboard";
import Agriboard from "./component/project/board/agricultboard";
import Community from "./component/project/community";
import PersonalInquiry from "./component/project/Inquiry/personInquiry";
import "./App.css";
import Header from "./component/project/header/header";

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
          <Route path="/sellerboard" element={<Sellerboard />} />
          <Route path="/agriboard" element={<Agriboard />} />
          <Route path="/community" element={<Community />} />
          <Route path="/Inquiry/personal" element={<PersonalInquiry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
