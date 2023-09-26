import ReactDOM from "react-dom/client";
import "./assets/scss/index.scss";
import Content from "./component/content";
import Footer from "./component/footer";
import Header from "./component/header";
import MobileMenu from "./component/mobileMenu";
import SideBar from "./component/sideBar";

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <MobileMenu />
    <Header />
    <SideBar />
    <Content />
    <Footer />
  </>

)