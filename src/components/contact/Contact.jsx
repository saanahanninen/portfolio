import "./contact.scss";
import { Instagram, GitHub, LinkedIn } from "@material-ui/icons";

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/envelope.png" alt="envelopes" />
            </div>
            <div className="right">
                <h2>Contact</h2>
                <a href="https://www.linkedin.com/in/saanahanninen/" target="_blank" rel="noreferrer" className="itemContainer">
                    <LinkedIn className="icon" />
                    <span>Saana Hänninen</span>
                </a>
                <a href="https://github.com/saanahanninen" target="_blank" rel="noreferrer" className="itemContainer">
                    <GitHub className="icon" />
                    <span>saanahanninen</span>
                </a>
                <a href="https://www.instagram.com/saana.codes/" target="_blank" rel="noreferrer" className="itemContainer">
                    <Instagram className="icon" />
                    <span>saana.codes</span>
                </a>
            </div>
        </div>
    );
}