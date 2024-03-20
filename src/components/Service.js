import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext } from "react";

const Service = () => {
  
  //destructuring of objects which came from the dataState file in context folder
  const{data,getData} = useContext(dataContext);

    useEffect(()=>{
      getData();
    },[]);

    const fData = [].concat(data && data.user && data.user.services)
    .filter(data => data && data.enabled === true);

  return (
    <div className="tonni_tm_section" id="service">
      <div className="tonni_tm_service">
        <div className="container bigger">
          <div className="service_in">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Our Services</span>
                  <h3>What Can I Do</h3>
                </div>
                <div className="subtitle">
                  <p>
              
                  </p>
                </div>
              </div>
              <div className="service_list">
                <ul>
                  {fData.map(service=>{
                    return(
                      <>
                        <li className="wow fadeInUp" data-wow-duration="1s" key = {service && service._id}>
                          <div className="list_inner">
                            <img className="svg" src={service && service.image && service.image.url} alt="" />
                            <div className="title">
                              <h3>{service && service.name}</h3>
                              <span>Charge: {service && service.charge}</span>
                            </div>
                            <div className="text">
                              <p>
                                {service.desc}
                              </p>
                            </div>
                          </div>
                        </li>
                      </>
                    );
                  })}
                  
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector4.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Service;
