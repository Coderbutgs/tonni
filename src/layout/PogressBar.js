import { useEffect } from "react";
import { scrollTop } from "../utilits";

const PogressBar = () => {
  useEffect(() => {
    window.addEventListener("scroll", scrollTop);
  }, []);

  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="progressbar">
      <a href="#" id="scroll-top" onClick={() => onClick()}>
        <span className="text" style={{ bottom: "150.75px" }}>
          To Top
        </span>
      </a>
      <span className="line" />
    </div>
  );
};
export default PogressBar;
