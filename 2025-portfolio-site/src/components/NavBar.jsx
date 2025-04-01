import face from "../assets/face.png";
import "../index.css";

export default function NavBar({ title, onPageChange }) {
  return (
    <header className="nav-bar">
      <div className="nav-wrapper">
        <div className="nav-img-wrapper" onClick={() => onPageChange("home")}>
          <img src={face}></img>
        </div>
        <p>
          ./<a onClick={() => onPageChange("home")}>jeshuayates</a>/
          <a>{title}</a>
        </p>
      </div>
      <a className="menu-btn">
        <span className=""></span>V
      </a>
    </header>
  );
}
