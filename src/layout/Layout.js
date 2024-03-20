import Head from "next/head";
import { Fragment, useEffect } from "react";
import ImageView from "../components/popup/ImageView";
import VideoPopup from "../components/popup/VideoPopup";
import { dataImage, stickyNav, wowJsAnimation } from "../utilits";
import PreLoader from "./PreLoader";

const Layout = ({ children, title }) => {
  useEffect(() => {
    dataImage();
    wowJsAnimation();
    window.addEventListener("scroll", stickyNav);
  }, []);

  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
          rel="stylesheet"
        />
        <title>Tonni | {title ? title : "Home"}</title>
      </Head>
      <PreLoader />
      <VideoPopup />
      <ImageView />
      <div className="tonni_tm_all_wrap" data-magic-cursor="show">
        {children}
      </div>
    </Fragment>
  );
};
export default Layout;
