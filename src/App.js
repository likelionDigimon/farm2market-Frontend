import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/project/main/main";
import Mypage from "./component/project/mypage/mypage";
import Signin from "./component/project/signin/signin";
import Signup from "./component/project/signup/signup";
import Proboard from "./component/project/board/proboard";
import Sellerboard from "./component/project/board/sellerboard";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/proboard" element={<Proboard />} />
          <Route path="/sellerboard" element={<Sellerboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
