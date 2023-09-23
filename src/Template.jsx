import { Outlet } from "react-router-dom"
import Header from "./Componet/Header";
import Menu from "./Componet/Menu";
import { Wrapper, Footer } from "./Template.styled";

export default function Template() {
  return (
    <Wrapper>
      <Header> </Header>
      <Menu></Menu>
      <div className="outlet"><Outlet/></div>
      <Footer>Fim</Footer>
    </Wrapper>
  );
}

