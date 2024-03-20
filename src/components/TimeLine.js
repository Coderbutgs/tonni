import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext } from "react";

const TimeLine = () => {

  //destructuring of objects which came from the dataState file in context folder
  const{data,getData} = useContext(dataContext);

   //Using the getData function declared in dataState.js to fetch the data from the API
    useEffect(()=>{
      getData();
    },[]);

     //Sorting the fetched data on the basis of sequence
    const myData = [].concat(data && data.user && data.user.timeline)
    .sort((a, b) => a.sequence > b.sequence ? 1 : -1);

    //Filtering the data on the basis of whether the enabled attribute is true or not
    const fData = [].concat(myData)
    .filter(data => data && data.enabled === true);

    const edData = [].concat(fData)
    .filter(data=> data && data.forEducation === true);

    const exData = [].concat(fData)
    .filter(data => data && data.forEducation === false);
    

  return (
    <>
    <div className="tonni_tm_section">
      <div className="tonni_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Education</span>
                  <h3>Creative Timeline</h3>
                </div>
                <div className="subtitle">
                  <p>
                    .
                  </p>
                </div>
              </div>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  {/* mapping the sorted and filtered data to be used dynamically */}
                  {edData.map(timeline=>{
                    return(
                      <>
                        <li className="wow fadeInUp" data-wow-duration="1s" key = {timeline && timeline._id}>
                          <ul className="items">
                            <li>
                              <div className="list_inner">
                                <div className="details">
                                  <img
                                    className="svg"
                                    src={timeline && timeline.icon && timeline.icon.url}
                                    alt=""
                                  />
                                  <div className="title">
                                    <h3>{timeline && timeline.jobTitle}</h3>
                                    <span>{timeline && timeline.company_name}</span>
                                  </div>
                                  <div className="text">
                                    <p>
                                      {timeline && timeline.summary}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="year" style = {{width:"300px"}}>
                                  <span>{timeline && timeline.startDate.slice(0,10)}</span>
                                  <span style={{marginLeft:"10px",marginRight:"10px",textTransform:"lowercase"}}>   -   </span>
                                  <span>{timeline && timeline.endDate.slice(0,10)}</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                              <div className="image">
                                  <p style={{textAlign:"left"}}>{timeline.bulletPoints}</p>
                                  <div
                                    className="main"
                                    
                                  />
                              </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </>
                    )
                  })}
                  
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector6.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon8.svg" alt="" />
            </span>
            <span className="shape3">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape4">
              <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
            </span>
            <span className="shape5">
              <img className="svg" src="img/svg/icon10.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div className="tonni_tm_section">
      <div className="tonni_tm_timeline">
        <div className="container bigger">
          <div className="timeline_inner">
            <div className="container">
              <div className="tonni_tm_main_title" data-type="flex">
                <div className="title">
                  <span>Experience</span>
                  <h3>Creative Timeline</h3>
                </div>
                <div className="subtitle">
                  <p>
                    .
                  </p>
                </div>
              </div>
              <div className="timeline_list">
                <span className="line" />
                <ul>
                  {/* mapping the sorted and filtered data to be used dynamically */}
                  {exData.map(timeline=>{
                    return(
                      <>
                        <li className="wow fadeInUp" data-wow-duration="1s" key = {timeline && timeline._id}>
                          <ul className="items">
                            <li>
                              <div className="list_inner">
                                <div className="details">
                                  <img
                                    className="svg"
                                    src={timeline && timeline.icon && timeline.icon.url}
                                    alt=""
                                  />
                                  <div className="title">
                                    <h3>{timeline && timeline.jobTitle}</h3>
                                    <span>{timeline && timeline.company_name}</span>
                                  </div>
                                  <div className="text">
                                    <p>
                                      {timeline && timeline.summary}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="year" style = {{width:"300px"}}>
                                  <span>{timeline && timeline.startDate.slice(0,10)}</span>
                                  <span style={{marginLeft:"10px",marginRight:"10px",textTransform:"lowercase"}}>   -   </span>
                                  <span>{timeline && timeline.endDate.slice(0,10)}</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div className="list_inner">
                                <div className="image">
                                  <p style={{textAlign:"left"}}>{timeline.bulletPoints}</p>
                                  <div
                                    className="main"
                                    
                                  />
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </>
                    )
                  })}
                  
                </ul>
              </div>
            </div>
            <span className="shape">
              <img className="svg" src="img/svg/vector6.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon8.svg" alt="" />
            </span>
            <span className="shape3">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape4">
              <img className="svg anim_circle" src="img/svg/icon5.svg" alt="" />
            </span>
            <span className="shape5">
              <img className="svg" src="img/svg/icon10.svg" alt="" />
            </span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default TimeLine;
