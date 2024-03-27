import dataContext from "../context/dataContext";
import { Fragment, useEffect, useState, useContext, useRef } from "react";





const Testimonials = () => {

  //destructuring of objects which came from the dataState file in context folder
  const{data,getData} = useContext(dataContext);

   //Using the getData function declared in dataState.js to fetch the data from the API
    useEffect(()=>{
      getData();
    },[]);

    //Filtering the data on the basis of whether the enabled attribute is true or not
    const fData = [].concat(data && data.user && data.user.testimonials)
    .filter(data => data && data.enabled === true);

    useEffect(()=>{
      setActive(data && data.user && data.user.testimonials[0]);
    },[fData[0]])
    
  const [active, setActive] = useState();
  
  
  const reviewData = useRef(fData);

  const activeDotFun = (value, i) => {
    setActive(value);
    console.log(active);
    // let data1 = reviewData.current;
    // data1.push(data1[i]);
    // data1.splice(i, 1);
    // reviewData.current = data1;
  };

  const activeImg = (value, key) => (active && active[key]== value ? "active" : "");

  return (
    <div className="tonni_tm_section">
      <div className="tonni_tm_testimonials">
        <div className="container">
          <div
            className="testimonials_inner wow fadeInUp"
            data-wow-duration="1s"
          >
            <span className="shape">
              <img className="svg anim_circle" src="img/svg/icon9.svg" alt="" />
            </span>
            <span className="shape2">
              <img className="svg" src="img/svg/icon12.svg" alt="" />
            </span>
            <div className="leftpart">
              <ul>
                {/* mapping the sorted and filtered data to be used dynamically */}
                {fData.map( (data,key)=>{
                  return(
                    <>
                     <li
                      className={activeImg(data && data._id,"_id")}
                      data-index={1}
                     >
                      <div className="image">
                        <img src="img/thumbs/37-45.jpg" alt="" />
                        <div
                           className="main"
                           data-img-url={data && data.image && data.image.url}
                           style={{
                            backgroundImage: `url(${data && data.image && data.image.url})`,
                           }}
                          />
                        </div>
                      </li>
                    </>
                  )
                })}
               
              </ul>
            </div>
            <div className="rightpart">
              <div className="rightpart_in">
                <div className="main_title">
                  <h3>
                    <span className="big">
                      Testimonials
                      <span className="small">
                        Testimonials
                        <img className="svg" src="img/svg/quote.svg" alt="" />
                      </span>
                    </span>
                  </h3>
                </div>
                <div className="quotes">
                  <ul>
                    {fData.map(data=>{
                      return(
                        <>
                          <li
                          className={activeImg(
                            data && data._id,"_id"
                          )}
                          data-index={1}
                          >
                            <p>
                              { data && data.review}
                            </p>
                          </li>
                        </>
                      )
      
                    })}
                    
                  </ul>
                </div>
                <div className="details">
                  <div className="infos">
                    <div className="avatars" >
                      <ul className="grid-sort">
                        {fData.map((review, i) => {
                          return(
                            <>
                              <li className={` grid-item ${i}`} key={i}>
                            <span onClick={() => activeDotFun(review, i)}>
                              <div
                                data-img-url={review && review.img}
                                style={{
                                  backgroundImage: `url(${
                                    review && review.image && review.image.url
                                  })`,
                                }}
                              />
                            </span>
                            <span className="hidden">1</span>
                          </li>
                          </>
                          )
                          })}
                      </ul>
                    </div>
                    <div className="short">
                      <ul className="name">
                        {fData.map(data=>{
                          return(
                            <>
                              <li
                                className={activeImg(data && data._id,"_id")}
                                data-index={1}
                              >
                                <h3>{data && data.name}</h3>
                             </li>
                            </>
                          )
                        })}
                      </ul>
                      <ul className="job">
                        {fData.map(data=>{
                          return(
                            <>
                               <li
                                className={activeImg(data && data._id,"_id")}
                                data-index={1}
                               >
                                <span>{data && data.position}</span>
                               </li>
                            </>
                          )
                        })}
                       
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
