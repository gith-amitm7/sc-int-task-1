import Sidebar from "./Sidebar";
import "./layout.scss";

const Layout = (props) => {
  return (
    <div id="layout">
      <Sidebar />
      <div id="content-wrapper">
        <div id="content">{props.children}</div>
      </div>
    </div>
  );
};

export default Layout;
