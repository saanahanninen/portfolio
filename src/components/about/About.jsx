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
                <div className="about-me">With a background in business, I bring a holistic perspective to my work, considering how design integrates with various departments such as finance, marketing, HR, and more. My goal is to create products and services that not only deliver exceptional user experiences but also align seamlessly with business objectives. I've previously lived abroad which has a deep appreciation for cross-cultural design, and I'm always eager to expand my worldview further.
                </div>
                <div className="location">                   <br></br>&#128205; Helsinki, Finland</div>
                <div className="keywords">
                    UX/UI Design | UX Research | User Journeys | Wireframing | Prototyping | Graphic Design | Front-end Development |  Brand Management | Consumer Behaviour | Cross-team Collaboration | Figma | JavaScript | React | CSS | Tailwind | WooCommerce | WordPress
                </div>
            </div>
        </div>
    );
}