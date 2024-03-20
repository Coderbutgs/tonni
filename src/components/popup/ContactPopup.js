import useClickOutside from "../../useClickOutside";
import dataContext from "../../context/dataContext";
import { useContext,useEffect } from "react";



const ContactPopup = ({ show, close }) => {

  //destructuring of objects which came from the dataState file in context folder
const{data,getData} = useContext(dataContext);

//Using the getData function declared in dataState.js to fetch the data from the API
useEffect(()=>{
 getData();
},[]);

//Dynamically customizing the api
const address = `https://maps.google.com/maps?q=${ data && data.user && data.user.about && data.user.about.address}&t=&z=13&ie=UTF8&iwloc=&output=embed`;


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
          <div className="tonni_tm_modalbox_contact">
            <div className="contact_title">
              <span>Contact</span>
              <h3>Get in Touch</h3>
            </div>
            <div className="tonni_tm_map">
              <div className="mapouter">
                <div className="gmap_canvas">
                  <iframe
                    width="100%"
                    height={375}
                    id="gmap_canvas"
                    src ={address}
                    frameBorder={0}
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                  />
                  <a href="https://www.embedgooglemap.net/blog/divi-discount-code-elegant-themes-coupon" />
                  <br />
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".mapouter{position:relative;text-align:right;height:375px;width:100%;}",
                    }}
                  />
                  <a href="https://www.embedgooglemap.net">
                    how to add google map
                  </a>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        ".gmap_canvas {overflow:hidden;background:none!important;height:375px;width:100%;}",
                    }}
                  />
                </div>
              </div>
              {/* Get your API here https://www.embedgooglemap.net */}
            </div>
            <div className="fields">
              <form
                action="/"
                method="post"
                className="contact_form"
                id="contact_form"
                autoComplete="off"
              >
                <div
                  className="returnmessage"
                  data-success="Your message has been received, We will contact you soon."
                />
                <div className="empty_notice">
                  <span>Please Fill Required Fields</span>
                </div>
                <div className="first">
                  <ul>
                    <li>
                      <input id="name" type="text" placeholder="Name" />
                    </li>
                    <li>
                      <input id="email" type="text" placeholder="Email" />
                    </li>
                  </ul>
                </div>
                <div className="last">
                  <textarea
                    id="message"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="tonni_tm_button">
                  <a id="send_message" href="#">
                    Send Message{" "}
                    <img className="svg" src="img/svg/arrow-right.svg" alt="" />
                  </a>
                </div>
                {/* If you want to change mail address to yours, please open modal.php and go to line 4 */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactPopup;
