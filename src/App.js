import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Form/login";
import Profile from "./Form/profile";
import Register from "./Form/register";
import Main from "./Form/main.js";
import Home from "./Form/home.js";
import Jewellery from "./Form/jewellery.js";
import Electronics from "./Form/electronics.js";
import MenClothing from "./Form/mensclothing.js";
import WomenClothing from "./Form/womensclothing.js";
// import CategoryCard from "./Form/card.js";
// import Products from "./Form/product.js";
// import Header from "./Form/header.js";
// import Footer from "./Form/footer.js";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    //   {/* <Timer /> */}
    //   {/* <Timer3 /> */}
    //   {/* <Color />
    //   <Car /> */}
    // </div>

    // <div className="App">
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Main />}>
    //         <Route index element={<Home />} />
    //         <Route path="/categories" element={<Home />} />
    //         <Route path="login" element={<Login />} />
    //         <Route path="register" element={<Register />} />
    //         <Route path="profile" element={<Profile />} />
    //       </Route>
    //     </Routes>
    //   </BrowserRouter>
    // </div>

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="profile" element={<Profile />} />
            <Route path="jewelery" element={<Jewellery />} />
            <Route path="electronics" element={<Electronics />} />
            <Route path="mensclothing" element={<MenClothing />} />
            <Route path="womensclothing" element={<WomenClothing />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
