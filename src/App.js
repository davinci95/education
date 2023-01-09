import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./component/common/header/Header";
import Home from "./component/home/Home";
import About from "./component/about/About";
import CourseHome from "./component/allcourses/CourseHome";
import Team from "./component/team/Team";
import Price from "./component/pricing/Price";
import Blog from "./component/blog/Blog";
import Contact from "./component/contact/Contact";
import Footer from "./component/common/footer/Footer";

const App = () => {
   return (
      <>
         <Router>
            <Header />
            <Routes>
               <Route exact path="/education" element={<Home />} />
               <Route exact path="/education/about" element={<About />} />
               <Route
                  exact
                  path="/education/courses"
                  element={<CourseHome />}
               />
               <Route exact path="/education/team" element={<Team />} />
               <Route exact path="/education/pricing" element={<Price />} />
               <Route exact path="/education/journal" element={<Blog />} />
               <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
         </Router>
      </>
   );
};

export default App;
