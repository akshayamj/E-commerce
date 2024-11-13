import React from "react";

import Login from "./login.js";
import Register from "./register.js";
import Profile from "./profile.js";
import Footer from "./footer.js";
import Header from "./header.js";
import { Outlet } from "react-router-dom";
import First from "./First.js";
import Home from "./home.js";

function Main() {
  return (
    <div>
      <Header />
      <section>
        <article>
          <Outlet />
        </article>
      </section>
      <Footer />
    </div>
  );
}

export default Main;
