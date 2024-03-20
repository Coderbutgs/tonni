import Layout from "../src/layout/Layout";
import Mouse from "../src/layout/Mouse";

const Intro = () => {
  return (
    <Layout title={"Intro"}>
      {" "}
      <div className="tonni_tm_intro">
        <div className="tonni_tm_intro_fixed_price">
          <span className="anim" />
          <span className="anim" />
          <span className="anim" />
          <a href="#" className="pricing-info anim">
            -20%
          </a>
        </div>
        <div className="short_info">
          <img src="img/logo/logo.png" alt="" />
          <h3>Personal Portfolio React NextJs Template</h3>
        </div>
        <span className="intro_line" />
        <span className="intro_line_2" />
        <span className="intro_line_3" />
        <div className="demos">
          <div className="left">
            <div className="desc">
              <img src="img/intro/1.png" alt="" />
              <h3 className="title">Static Demo</h3>
            </div>
            <a
              className="intro_link"
              rel="noreferrer"
              href="/"
              target="_blank"
            />
          </div>
          <div className="right">
            <div className="desc">
              <img src="img/intro/1.png" alt="" />
              <h3 className="title">Glitch Demo</h3>
            </div>
            <a
              className="intro_link"
              rel="noreferrer"
              href="/index-glitch"
              target="_blank"
            />
          </div>
        </div>
      </div>
      <Mouse />
    </Layout>
  );
};
export default Intro;
