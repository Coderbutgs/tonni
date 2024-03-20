import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext } from "react";

const Home = () => {

  //destructuring of objects which came from the dataState file in context folder
  const{data,getData} = useContext(dataContext);

   //Using the getData function declared in dataState.js to fetch the data from the API
    useEffect(()=>{
      getData();
    },[]);
    
  return (
    <div className="tonni_tm_section" id="home">
      <div className="tonni_tm_hero">
        <div className="background">
          {/* <div className="image" style = {{opacity:1}}>
            <img src = {data && data.user && data.user.about && data.user.about.avatar && data.user.about.avatar.url}/>
          </div> */}
          <div className="overlay" />
        </div>
        <div className="container">
          <div className="content">
            <div className="content_in">
              <h3 className="name">
                <span>I</span> am
                <br />
                {data && data.user && data.user.about && data.user.about.name}
              </h3>
              <span className="welcome">Welcome to my Agency</span>
              <div className="tonni_tm_button">
                <a className="anchor" href="#portfolio">
                  See All Projects{" "}
                  <img className="svg" src="img/svg/arrow-right.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="image">
              <div className = "hero-mask">
                <img className = "hero-image"src = {data && data.user && data.user.about && data.user.about.avatar && data.user.about.avatar.url}/>
              </div>
          </div>
          </div>
          <div className="tonni_tm_down">
            <a className="anchor" href="#about">
              <img className="svg" src="img/svg/down_button.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="play_button">
          <a
            className="popup-youtube"
            href={data && data.user && data.user.youtube && data.user.youtube.url}
          />
        </div>
        <span className="shape1">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape2">
          <img className="svg" src="img/svg/icon7.svg" alt="" />
        </span>
        <span className="shape3">
          <img className="svg" src="img/svg/icon3.svg" alt="" />
        </span>
        <span className="shape4">
          <img className="svg anim_circle" src="img/svg/icon6.svg" alt="" />
        </span>
        <span className="shape5">
          <img className="svg" src="img/svg/icon1.svg" alt="" />
        </span>
        <span className="shape6">
          <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
        </span>
        <span className="shape7">
          <img className="svg" src="img/svg/icon2.svg" alt="" />
        </span>
      </div>
    </div>
  );
};
export default Home;
