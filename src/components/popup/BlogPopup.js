import useClickOutside from "../../useClickOutside";

const BlogPopup = ({ show, close, blogData }) => {
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
            <div className="image">
              <img src="img/thumbs/4-2.jpg" alt="" />
              <div
                className="main"
                data-img-url={blogData && blogData.img}
                style={{ backgroundImage: `url(${blogData && blogData.img})` }}
              />
            </div>
            <div className="details">
              <div className="title">
                <span>{blogData && blogData.date}</span>
                <h3>{blogData && blogData.title}</h3>
              </div>
              <div />
            </div>
            <div className="text">
              {blogData && blogData.dec.map((dec, i) => <p key={i}>{dec}</p>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogPopup;
