import { Children } from "react";

let Main = (props) => {
  console.log(props);

  return (
    <>
      <div className="main">
        <p>
          Tôi tên: <span className="name">{props.name}</span>
        </p>
        <p>
          Học lớp: <span className="inClass">{props.inClass}</span>
        </p>
        <p>
          Slogan: <span className="slogan">{props.slogan}</span>
        </p>
        {props.children}
      </div>
    </>
  );
};
export default Main;
