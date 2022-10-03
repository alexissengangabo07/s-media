import React, { useEffect } from "react";
import Posts from "./components/posts/Posts";
import Form from "./components/form/Form";
import AppIcon from "./images/social-media.jpg";
import "./App.css";
import { useDispatch } from "react-redux";
import { postAction } from "./actions/postAction";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postAction());
  }, [dispatch]);

  return (
    <div className="container">
      <div className="header">
        <div className="app-identity">
          <div>
            <img
              src={AppIcon}
              alt="App Icon"
              className="app-icon"
              height={60}
            />
          </div>
          <div>
            <h2 className="app-name">OK Media</h2>
          </div>
        </div>
      </div>
      <div className="main">
        <div className="posts">
          <Posts />
        </div>
        <div className="form">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default App;
