import "./about.scss";

export default function About() {
    return (
        <div className="about" id="about">
            <div className="left">
                <img src={`${process.env.PUBLIC_URL}/assets/profile.png`} alt="profile picture" />
            </div>
            <div className="right">
                <div className="headline">
                    Passionate about <span>all things creative</span>.
                    <br></br>Grounded in analytical thinking.
                    <br></br>Fascinated by the blend of <span>aesthetics and functionality</span>.
                </div>
                <div className="about-me">With a background in business, I bring a holistic perspective to product development - balancing user needs, visual design, and strategic goals. I am passionate about creating intuitive, impactful digital experiences that not only delight users but also drive meaningful results.
                </div>
                <div className="location">                   <br></br>&#128205; Helsinki, Finland</div>
                <div className="keywords">
                    UX/UI Design | UX Research | User Journeys | Wireframing | Prototyping | Graphic Design | Front-end Development |  Brand Management | Consumer Behaviour | Cross-team Collaboration | Figma | Google Analytics | JavaScript | React | CSS | WooCommerce | WordPress
                </div>
            </div>
        </div>
    );
}