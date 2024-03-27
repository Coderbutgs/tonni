import useClickOutside from "../../useClickOutside";

const ProjectPopup = ({ show, close, blogData }) => {
  let domNode = useClickOutside(() => {
    close();
  });

  return (
    <div className={`tonni_tm_modalbox ${show ? "opened" : ""}`}>
      <div className="box_inner" ref={domNode}>
        <div className="close">
          <a className="c-pointer" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        <div className="description_wrap">
          <div className="news_popup_informations">
            <div className="image" style = {{marginBottom:"5px"}}>
              <img src="img/thumbs/4-2.jpg" alt="" />
              <div
                className="main"
                data-img-url={blogData && blogData.image && blogData.image.url}
                style={{ backgroundImage: `url(${blogData && blogData.image && blogData.image.url})` }}
              />
            </div>
            <div className="details">
              <div className="title">
                    <ul  className = "popup_techStack_list">
                        {blogData && blogData.techStack.map(tech=>{
                            return(
                            <>
                                <li style = {{float:"left",paddingLeft:"16px",color:"#ab5429",fontWeight:"700"}}>
                                <p>{tech}</p>
                                </li>
                            </>)
                        })}
                    </ul>
                    <ul className = "popup_social_list">
                      <li style = {{float:"left"}}>
                      <a href = {blogData && blogData.githuburl} target = "_blank" rel = "noreferrer">
                      <img src = "img/svg/github.svg" className = "git-live-icons"alt = "Github" style ={{height:"25px"}}/>
                      </a>
                      
                      </li>
                      <li style = {{float:"left"}}>
                      <a href = {blogData && blogData.liveurl} target="_blank" rel = "noreferrer">
                      <img src = "img/svg/live2.svg" className="git-live-icons" style = {{height:"30px",marginTop:"5px"}}/>
                      </a>
                    
                      </li>
                    </ul>
                
              </div>
              <h3>{blogData && blogData.title}</h3>
            </div>
            <div className="text">
              <p>{blogData && blogData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectPopup;
