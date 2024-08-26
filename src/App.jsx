import { useState } from "react";
import './App.css';

import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";

import Ad_section from "./Components/Ad_section";

import { titles } from "./Components/Data";
import { contents } from "./Components/Data";
import Navbar2_sub from "./Components/Navbar2_sub";

import { navtitles } from "./Components/NavtabData";
import { navcontents } from "./Components/NavtabData";
import Tutorial from "./Components/Tutorial";
import Exercise from "./Components/Exercise";
import Certificates from "./Components/Certificates";
import Services from "./Components/Services";
import Spaces from "./Components/Spaces";
import GetCertified from "./Components/GetCertified";
import Signup from "./Components/Signup";
import Modal from "./Components/Modal"// import NavshowContainer from "./Components/NavshowContainer";


function App() {

  // let [navtitle, setNavtitle] = useState("Tutorial");
  // let [navcontent, setNavcontent] = useState("nndscdhsbcsdchsbdchscmxnvds vhdbh vdsd vhds vvsdabhds  vudnyvbdsvbyvbo  id wyrf vvuvwaskus");

  const [showSignup, setShowSignup] = useState(false);

  // State for the active tab
  let [activeTab, setActiveTab] = useState(null);
  //for Sidebar
  let [title, setTitle] = useState("React");

  //modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  let [content, setContent] = useState(<div>"React is SPA React is used to build single-page applications. React allows us to create reusable UI components."
    <div className="code-div-container">
      <h2>Learning by Examples</h2>
      <div className="code-div">
        <code>
          <pre>
            {`
    import React from 'react';
    import ReactDOM from 'react-dom/client';
    
    function Hello(props) {
      return <h1>Hello World!</h1>;
    }
    
    const container = document.getElementById("root");
    const root = ReactDOM.createRoot(container);
    root.render(<Hello />);`}
          </pre>
        </code>
      </div>
    </div>

    <p>
      <h3>Create React App</h3>
      <ul>
        <li>To learn and test React, you should set up a React Environment on your computer.</li>
        <li>This tutorial uses the create-react-app.</li>
        <li>The create-react-app tool is an officially supported way to create React applications.</li>
        <li>Node.js is required to use create-react-app.</li>
        <li>Open your terminal in the directory you would like to create your application.</li>
        <li>Run this command to create a React application named my-react-app:</li>
      </ul>
    </p>
    <div className="code-div-container">
      <div className="code-div">
        {`
      npx create-react-app my-react-app
      `}
      </div>
    </div>
    create-react-app will set up everything you need to run a React application.
    <h3>Run the React Application</h3>
    <p>Run this command to move to the my-react-app directory:</p>

    <div className="code-div-container">
      <div className="code-div">
        {`cd my-react-app`}
      </div>
    </div>

    <p>Run this command to execute the React application my-react-app:</p>
    <div className="code-div-container">
      <div className="code-div">
        {`npm start`}
      </div>
    </div>


  </div>);

  let handleClick = (idx) => {
    setTitle(titles[idx]);
    setContent(contents[idx]);
  }


  // Function to handle navigation tab clicks
  const handlenavClick = (index) => {
    setActiveTab(index);
    if (index === 7) {
      setIsModalOpen(true); // Open the modal for signup
    }
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const resetToHome = () => {
    setActiveTab(null);
  };


  let showSignupPage = () => {
    setShowSignup(true);
    setActiveTab(null); // Hide other components
  };
  return (
    <div className="row">

      <div className="col-md-12">
        <Navbar handlenavClick={handlenavClick} resetToHome={resetToHome}></Navbar>
        <Navbar2_sub></Navbar2_sub>
      </div>
      {/* <NavshowContainer navtitle={navtitle} navcontent={navcontent}></NavshowContainer> */}


      {/* <div className="sidebar-main-container col-md-12">

        <Sidebar handleClick={handleClick}></Sidebar>
        <Main title={title} content={content}></Main>
        <Ad_section></Ad_section>
      </div> */}

      {/* Render the Tutorial component if activeTab is 0 (Tutorial tab) */}

      <div className="sidebar-main-container col-md-12">
        {activeTab === null && (
          <>
            <Sidebar handleClick={handleClick} />
            <Main title={title} content={content} />
            <Ad_section />
          </>
        )}
        {activeTab === 0 && <Tutorial />}
        {activeTab === 1 && <Exercise />}
        {activeTab === 2 && <Certificates />}
        {activeTab === 3 && <Services />}
        {activeTab === 4 && <Spaces />}
        {activeTab === 5 && <GetCertified />}
        {activeTab === 6 && <Signup />}
      </div>

      <Modal show={isModalOpen} onClose={closeModal} />
    </div>


  )
}

export default App;