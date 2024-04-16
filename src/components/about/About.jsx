import "./about.scss";
import { SchoolOutlined, FaceOutlined, GradeOutlined } from "@material-ui/icons";

export default function About() {
    const data = [
        {
            id: 1,
            title: "Education",
            icon: <SchoolOutlined className="icon" />,
            desc: (
                <div>
                    <b>2022 -</b> <br />
                    BSc Computer Science <br />(Human-Technology Interaction) <br /><br />
                    <b>2017 - 2018</b> <br />
                    MSc Management
                    <br /><br />
                    <b>2014 - 2017</b> <br />
                    BSc Accounting
                    <br /><br />
                    I've also obtained UX, AI, Web Analytics and eCom certificates.
                </div>
            )
        },
        {
            id: 2,
            title: "About",
            icon: <FaceOutlined className="icon" />,
            desc: (
                <div>
                    I'm passionate about all things creative but I'm also a rather analytical person. I've always been intrigued by beautiful and practical designs but I
                    didn't realise my interest in UX/UI design until my late twenties.
                    <br /> <br />
                    &#128205;I'm currently based in Helsinki, Finland. However, I've previously lived abroad for several years which has expanded and enriched my wordview and understanding of cross-cultural design.
                </div>
            ),
            featured: true
        },
        {
            id: 3,
            title: "Keywords",
            icon: <GradeOutlined className="icon" />,
            desc: (
                <div>
                    UX/UI Design <br /><br />
                    UX Research<br /><br />
                    Front-end Development<br /><br />
                    Consumer Behaviour<br /><br />
                    Performance Analysis <br /><br /> <br />JavaScript | React | CSS |
                    Figma
                </div>
            )
        },
    ];

    return (
        <div className="about" id="about">
            <div className="container">
                {data.map((d) => (
                    <div className={d.featured ? "card featured" : "card"}>
                        <div className="top">
                            <h3>{d.title}</h3>
                        </div>
                        <div className="center">
                            {d.desc}
                        </div>
                        <div className="bottom">
                            <span>{d.icon}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}