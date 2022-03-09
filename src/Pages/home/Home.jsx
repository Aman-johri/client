import Header from "../../Components/header/Header";
import Sidebar from "../../Components/sidebar/Sidebar";
import Posts from "../../Components/posts/Posts";
import "./home.css"

export default function home() {
  return (
    <>
    <Header/>
    <div className="home">
      <Posts/>
      <Sidebar/>
    </div>
    </>
  );
}
