import { Fragment, useState } from "react";
import ContactPopup from "./popup/ContactPopup";

const Priceing = () => {
  const [active, setActive] = useState(false);
  return (
    <Fragment>
      <ContactPopup show={active} close={() => setActive(false)} />
      <div className="tonni_tm_section">
        <div className="tonni_tm_pricing">
          <div className="container">
            <div className="tonni_tm_main_title" data-type="centered">
              <div className="title">
                <h3>Our Best Pricing Table</h3>
              </div>
              <div className="subtitle">
                <p>
                  Fusce sollicitudin eros id ex maximus gravida non vitae ante.
                  Cras ac mi a dolor suscipit rutrum ut vitae mi.
                </p>
              </div>
            </div>
            <div className="pricing_list">
              <ul>
                <li className="wow fadeInUp" data-wow-duration="1s">
                  <div className="list_inner">
                    <span className="icon">
                      <img className="svg" src="img/svg/vector7.svg" alt="" />
                    </span>
                    <div className="title">
                      <span className="plan">Personal</span>
                      <h3 className="price">
                        <span>
                          50<span className="curreny">€</span>
                        </span>
                      </h3>
                    </div>
                    <div className="item_list">
                      <ul>
                        <li>
                          <p>High Quality Logo</p>
                        </li>
                        <li>
                          <p>Premium products Stock Photos</p>
                        </li>
                        <li>
                          <p>Premium Stock Photos &amp; Icons</p>
                        </li>
                        <li className="inactive">
                          <p>JPEG And PDF Format Ready</p>
                        </li>
                        <li className="inactive">
                          <p>Exclusive Live Chat Support</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tonni_tm_button">
                      <a className="c-pointer" onClick={() => setActive(true)}>
                        Order Now{" "}
                        <img
                          className="svg"
                          src="img/svg/arrow-right.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <a
                      className="c-pointer tonni_tm_full_link contact_modalbox_link"
                      onClick={() => setActive(true)}
                    />
                  </div>
                </li>
                <li
                  className="centered wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.2s"
                >
                  <div className="list_inner">
                    <span className="icon">
                      <img className="svg" src="img/svg/vector7.svg" alt="" />
                    </span>
                    <div className="title">
                      <span className="plan">Business</span>
                      <h3 className="price">
                        <span>
                          60<span className="curreny">€</span>
                        </span>
                      </h3>
                    </div>
                    <div className="item_list">
                      <ul>
                        <li>
                          <p>High Quality Logo</p>
                        </li>
                        <li>
                          <p>Premium products Stock Photos</p>
                        </li>
                        <li>
                          <p>Premium Stock Photos &amp; Icons</p>
                        </li>
                        <li>
                          <p>JPEG And PDF Format Ready</p>
                        </li>
                        <li className="inactive">
                          <p>Exclusive Live Chat Support</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tonni_tm_button">
                      <a className="c-pointer" onClick={() => setActive(true)}>
                        Order Now{" "}
                        <img
                          className="svg"
                          src="img/svg/arrow-right.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <span className="badge">Popular</span>
                    <a
                      className="c-pointer tonni_tm_full_link contact_modalbox_link"
                      onClick={() => setActive(true)}
                    />
                  </div>
                </li>
                <li
                  className="wow fadeInUp"
                  data-wow-duration="1s"
                  data-wow-delay="0.4s"
                >
                  <div className="list_inner">
                    <span className="icon">
                      <img className="svg" src="img/svg/vector7.svg" alt="" />
                    </span>
                    <div className="title">
                      <span className="plan">Developer</span>
                      <h3 className="price">
                        <span>
                          90<span className="curreny">€</span>
                        </span>
                      </h3>
                    </div>
                    <div className="item_list">
                      <ul>
                        <li>
                          <p>High Quality Logo</p>
                        </li>
                        <li>
                          <p>Premium products Stock Photos</p>
                        </li>
                        <li>
                          <p>Premium Stock Photos &amp; Icons</p>
                        </li>
                        <li>
                          <p>JPEG And PDF Format Ready</p>
                        </li>
                        <li>
                          <p>Exclusive Live Chat Support</p>
                        </li>
                      </ul>
                    </div>
                    <div className="tonni_tm_button">
                      <a className="c-pointer" onClick={() => setActive(true)}>
                        Order Now{" "}
                        <img
                          className="svg"
                          src="img/svg/arrow-right.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <a
                      className="c-pointer tonni_tm_full_link contact_modalbox_link"
                      onClick={() => setActive(true)}
                    />
                  </div>
                </li>
              </ul>
              <span className="shape">
                <img className="svg" src="img/svg/icon11.svg" alt="" />
              </span>
              <span className="shape2">
                <img
                  className="svg anim_circle"
                  src="img/svg/icon5.svg"
                  alt=""
                />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Priceing;
