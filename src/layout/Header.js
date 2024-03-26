import { scroll_ } from "../utilits";
import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext } from "react";


const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", scroll_);
  }, []);
  
  const{data,getData} = useContext(dataContext);

    useEffect(()=>{
      getData();
    },[]);

  const fData = [].concat(data && data.user && data.user.social_handles)
  .filter(data => data && data.enabled === true);


  return (
    <div className="tonni_tm_header">
      <div className="container bigger">
        <div className="header_in">
          <div className="logo">
            <a href="#">
              <img src="img/logo/logo.png" alt="" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#service">Service</a>
              </li>
              <li>
                <a href="#portfolio">Portfolio</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
            <span className="ccc" />
          </div>
          <div className="follow">
            <span>Follow Us:</span>
            <ul>
            {fData.map(social=>{
                      return(
                        <>
                          <li key = {social && social._id}>
                            <a href={social && social.url}>
                              <img
                                className="svg"
                                src={social && social.image && social.image.url}
                                alt=""
                              />
                            </a>
                          </li>
                        </>
                      );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
