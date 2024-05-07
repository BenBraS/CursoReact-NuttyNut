
import NavBar from "../NavBar/NavBar";
import NuttyNuts from "../NuttyNuts";
import "./Layout.css";

export default function Layout({ children }) {
  return (
    <div className="layout_container">
      <div className="Header_1">
        <NuttyNuts />
        <NavBar />
      </div>
      <main className="main_container">{children}</main>
      
    </div>
  );
}
