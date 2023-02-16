import Logo from "./img/logo.png";
import "./Header.css";

export default function Header() {
    return (
        <header>
            <img src={Logo} alt={"Logo"}/>
            <h2 className={"header-title"}>The Rick and Morty Blog</h2>
            <ul>
                <li><a href={"https://www.google.de"}>Home</a></li>
                <li><a href={"https://www.google.de"}>About me</a></li>
                <li><a href={"https://www.google.de"}>Blog</a></li>
            </ul>
        </header>
    );
}
