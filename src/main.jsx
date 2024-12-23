import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Skills from "./components/HeroSection/SkillSection/Skills";
import MainSection from "./components/HeroSection/MainSection/MainSection";
import About from "./components/about/About";

import "./styles/individualHeaderComponent.scss";
import "./styles/individualSkills.scss";
import "./styles/mainSection.scss";
import "./styles/about.scss";
import "./styles/indivProj.scss";
import "./styles/mediaQueries.scss";
import "./styles/indivBlog.scss";
import "./styles/contact.scss";
import "./styles/codingprofile.scss";

import Blog from "./components/Blogs/Blog";
import Contact from "./components/contact/Contact";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<MainSection />} />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
