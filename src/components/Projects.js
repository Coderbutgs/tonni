import Slider from "react-slick";
import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext } from "react";
import ProjectPopup from "./popup/ProjectPopup";

const Projects = () => {

  //destructuring of objects which came from the dataState file in context folder
  const{data,getData} = useContext(dataContext);

  //Using the getData function declared in dataState.js to fetch the data from the API
  useEffect(()=>{
    getData();
  },[]);

  //Sorting the fetched data on the basis of sequence
  const myData = [].concat(data && data.user && data.user.projects)
  .sort((a, b) => a.sequence > b.sequence ? 1 : -1);

  //Filtering the data on the basis of whether the enabled attribute is true or not
  const fData = [].concat(myData)
  .filter(data => data && data.enabled === true);

  const props = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll:1
        },
      },
    ],
  };

  

  const [activeBlogData, setActiveBlogData] = useState();
  const [activeBlog, setActiveBlog] = useState(false);
  return (
    <Fragment>
      <ProjectPopup
        close={() => setActiveBlog(false)}
        show={activeBlog}
        blogData={activeBlogData}
      />
      <div className="tonni_tm_section" id="projects">
        <div className="tonni_tm_news">
          <div className="container bigger">
            <div className="news_inner">
              <div className="container">
                <div className="tonni_tm_main_title" data-type="flex">
                  <div className="title">
                    <h3>Our Projects</h3>
                  </div>
                  <div className="subtitle">
                    <p>
                      
                    </p>
                  </div>
                </div>
                <div className="news_list">
                 
                  <ul>
                  <Slider {...props}>
                    {fData.map((project,i) => (
                      <li className="grid-item" key = {project && project._id}>
                      <div className="list_inner" style = {{zIndex:"0"}}>
                        <div className="image" >
                          <img src={project && project.image && project.image.url} alt="photo" style = {{opacity:1}}/>
                          
                        </div>
                        <div className="details">
                          <span className="category">{project && project.sequence}</span>
                          <div style = {{marginLeft:"80%",display:"flex",gap:"30%"}}>
                            <img src = "img/svg/github.svg" className = "git-live-icons"alt = "Github" style ={{height:"25px"}}>
                            </img>
                            <img src = "img/svg/live2.svg" className="git-live-icons" style = {{height:"30px"}}></img>
                          </div>
                          <h3 className="title" style = {{marginTop:"5%"}}>{project && project.title}</h3>
                          <img className="svg" src="img/svg/vector5.svg" alt="" />
                  
                        </div>
                        <a
                            className="tonni_tm_full_link c-pointer"
                            onClick={() => {
                              setActiveBlog(true);
                              setActiveBlogData(project);
                            }}
                          />
                      </div>
                    </li>
                    ))}
                    </Slider>
                  </ul>
                  
                  <span className="shape">
                    <img className="svg" src="img/svg/icon8.svg" alt="" />
                  </span>
                  <span className="shape2">
                    <img
                      className="svg anim_circle"
                      src="img/svg/icon5.svg"
                      alt=""
                    />
                  </span>
                  <span className="shape3">
                    <img className="svg" src="img/svg/icon10.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Projects;
