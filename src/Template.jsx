import "./template.css";
import {Outlet} from "react-router-dom"
import Header from "./Componet/Header";
import Menu from "./Componet/Menu";

export default function Template() {
  return (
    <div className="Template">
      <Header> </Header>
      <Menu></Menu>
      <div className="outlet"><Outlet/></div>
      <footer>Fim</footer>
    </div>
  );
}

