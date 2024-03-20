import Isotope from "isotope-layout";
import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import ProjectPopup from "./popup/ProjectPopup";
const Portfolio = () => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);
  // Isotope
  useEffect(() => {
    dataImage();
    setTimeout(() => {
      new Isotope(".gallery_zoom", {
        itemSelector: ".grid-item",
      });
    }, 500);
  }, []);


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

      
    const [activeBlogData, setActiveBlogData] = useState();
    const [activeBlog, setActiveBlog] = useState(false);


  return (
    <Fragment>
      <ProjectPopup
        close={() => setActiveBlog(false)}
        show={activeBlog}
        blogData={activeBlogData}
      />
      <DetailsPopup
        show={activeDetailsPopup}
        close={() => setActiveDetailsPopup(false)}
      />
      <div className="tonni_tm_section" id="portfolio">
        <div className="tonni_tm_portfolio">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                  <h3>Latest Projects</h3> 
              </div>
              <div className="subtitle">
                <p>
                  
                </p>
              </div>
            </div>
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
                {/* <li className = "grid-sizer" /> */}
                  {/* mapping the sorted and filtered data to be used dynamically */}
                  {fData.map(project=>{
                    return(
                      <>
                        <li className="grid-item" key = {project && project._id}>
                        <div className="list_inner">
                          <div className="image" >
                            <img src={project && project.image && project.image.url} alt="photo" style = {{opacity:1}}/>
                            
                          </div>
                          <div className="details">
                            <span className="category">{project && project.sequence}</span>
                            <h3 className="title">{project && project.title}</h3>
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
                    </>    
                    );
                  })}
               
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Portfolio;
