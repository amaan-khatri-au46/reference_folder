import Header from "../../components/header/Header.js";
import Posts from "../../components/posts/Posts";
import SideBar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts/>
        <SideBar/>
      </div>
    </>
  );
}
