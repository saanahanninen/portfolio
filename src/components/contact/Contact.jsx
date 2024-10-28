import "./contact.scss";
import { Instagram, GitHub, LinkedIn } from '@mui/icons-material';

export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src={`${process.env.PUBLIC_URL}/assets/envelope.png`} alt="envelopes" />
            </div>
            <div className="right">
                <a href="https://www.linkedin.com/in/saanahanninen/" target="_blank" rel="noreferrer" className="itemContainer">
                    <LinkedIn className="icon" />
                    <span>Saana Hänninen</span>
                </a>
                <a href="https://github.com/saanahanninen" target="_blank" rel="noreferrer" className="itemContainer">
                    <GitHub className="icon" />
                    <span>saanahanninen</span>
                </a>
                <a href="https://www.instagram.com/saana.bydesign/" target="_blank" rel="noreferrer" className="itemContainer">
                    <Instagram className="icon" />
                    <span>saana.bydesign</span>
                </a>
            </div>
        </div>
    );
}