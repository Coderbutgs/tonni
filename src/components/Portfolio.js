import Isotope from "isotope-layout";
import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext } from "react";
import { dataImage } from "../utilits";
import DetailsPopup from "./popup/DetailsPopup";
import ProjectPopup from "./popup/ProjectPopup";
const Portfolio = () => {
  const [activeDetailsPopup, setActiveDetailsPopup] = useState(false);


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

    //Get the names of all the tech in the techStack field and store it in the array "filter"
    let filter = []
    fData.map(project=>{
      project && project.techStack.map(tech=>{
        tech = tech.trim();
        if(!filter.includes(tech)){
          filter.push(tech);
        }
      })
    })

    const [selectedFilters,setSelectedFilters] = useState([])
    const [filteredItems, setFilteredItems] = useState([]);

    //sets the initialvalue of filteredItems
    useEffect(()=>{
      setFilteredItems(fData);
    },[data])
    
    //Handles the function when any filter is clicked
    const handleFilterButtonClick = (selectedCategory) => {
      if (selectedFilters.includes(selectedCategory)) {
        let filters = selectedFilters.filter((el) => el !== selectedCategory);
        setSelectedFilters(filters);
      } else {
        setSelectedFilters([...selectedFilters, selectedCategory]);
      }
    };
    
    //Processes the filteritems() function whenever there is a change in the current list of applied filters.
    useEffect(() => {
      filterItems();
    }, [selectedFilters]);
  
    const filterItems = () => {
      if (selectedFilters.length > 0) {
          selectedFilters.map((selectedCategory) => {
          let temp = filteredItems.filter((project) => project && project.techStack.some((tech) => tech.trim() === selectedCategory));
          setFilteredItems(temp);
        });
      } else {
        setFilteredItems(fData);
      }
    };
    

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
            </div>
            <div className = "filters" data-type="centered">
              <div className = "filters_title">
                <span>Filters</span>
                <img src = "img/svg/filter.svg" className = "filters_img"></img>
              </div>
              <ul className = "filters_list">
                {filter.map((tech,index)=>{
                  return(
                      <li  onClick={() => handleFilterButtonClick(tech)}
                      className={`list ${
                        selectedFilters?.includes(tech) ? "active" : ""
                      }`} key = {index}>
                          <div className = "list_name">
                              {tech}
                          </div>
                      </li>
                )
                })}
              </ul>
            </div>
    
            <div className="portfolio_list wow fadeInUp" data-wow-duration="1s">
              <ul className="gallery_zoom grid">
                {/* <li className = "grid-sizer" /> */}
                  {/* mapping the sorted and filtered data to be used dynamically */}
                  {filteredItems.map(project=>{
                    return(
                      <>
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
