import "./intro.scss";
import { KeyboardArrowDown } from '@mui/icons-material';
import Typewriter from "typewriter-effect";

export default function Intro() {
    return (
        <div className="intro" id="intro">
            <div className="wrapper">
                <h2>Hi you, it's</h2>
                <h1>Saana! &#128075;&#127995;</h1>
                <h3><Typewriter
                    options={{
                        strings: ["Aspiring UX/UI Designer", "Passionate learner", "Creative thinker"],
                        autoStart: true,
                        delay: 50,
                        loop: true,
                        pauseFor: 1000
                    }}
                /></h3>
            </div>
            <a href="#about">
                <KeyboardArrowDown className="icon" />
            </a>
        </div>
    );
}


