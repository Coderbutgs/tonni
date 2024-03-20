import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext,useRef } from "react";
import  ReactDOM from "react-dom/client";
import React from "react";

const colors = ["#154360","#4A235A","#C0392B ","#616A6B","#F1C40F","#1D8348","#7FB3D5","#7E5109",
                "#AF7AC5","#D98880","#154360","#4A235A","#C0392B ","#616A6B","#F1C40F","#1D8348","#7FB3D5","#7E5109",
                "#AF7AC5","#D98880"]
const About = () => {

  //destructuring of objects which came from the dataState file in context folder
  const{data,getData} = useContext(dataContext);

   //Using the getData function declared in dataState.js to fetch the data from the API
    useEffect(()=>{
      getData();
    },[]);

     //Sorting the fetched data on the basis of sequence
    const myData = [].concat(data && data.user && data.user.skills)
    .sort((a, b) => a.sequence > b.sequence ? 1 : -1);

    //Filtering the data on the basis of whether the enabled attribute is true or not
    const fData = [].concat(myData)
    .filter(data => data && data.enabled === true);

    const styles = {
      backgroundColor:"#fff"
    }
    
    
  return (
    <div className="tonni_tm_section" id="about">
      <div className="tonni_tm_about">
        <div className="container">
          <div className="about_inner">
            <div className="left">
              <div className="left_inner">
                <div className="year">
                  <h3>{data && data.user && data.user.about && data.user.about.exp_year}</h3>
                  <span className="rounded">
                    <img src="img/about/flower.png" alt="" />
                  </span>
                </div>
                <div className="experience">
                  <h3>+</h3>
                  <p>years experience</p>
                  <span className="shape">
                    <img src="img/about/dots.png" alt="" />
                  </span>
                  <span className="circle_shape">
                    <img className="svg" src="img/svg/icon1.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="right">
              <div className="title">
                <span>{data && data.user && data.user.about && data.user.about.quote}</span>
                <h3>{data && data.user && data.user.about && data.user.about.subTitle}</h3>
              </div>
              <div className="text">
                <p>
                  {data && data.user && data.user.about && data.user.about.description}
                </p>
              </div>
              <div className="dodo_progress">
                <ul>
                  {fData.map( (skill)=>{
                    return(
                      <>
                        <li key = {skill && skill._id}>
                          <div className="list_inner">
                            <div
                              className="progress_inner skillsInner___"
                              data-color={colors[skill && skill.sequence]}
                              data-value={skill && skill.percentage}
                            >
                              <div className="background">
                                <div className="bar">
                                  <div className="bar_in"/>
                                </div>
                              </div>
                              <div className="percent">
                                <img
                                  className="svg"
                                  src={skill && skill.image && skill.image.url}
                                  alt=""
                                />
                                <span className="number">{skill && skill.percentage}</span>
                              </div>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                  
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
