import "./about.scss";
import { SchoolOutlined, FaceOutlined, GradeOutlined } from '@mui/icons-material';

export default function About() {
    const data = [
        {
            id: 1,
            title: "",
            icon: <FaceOutlined className="icon" />,
            desc: (
                <div className="about-description">
                    <img src={`${process.env.PUBLIC_URL}/assets/profile.png`} alt="profile photo" className="profile-image" />
                    <div className="about-text">
                        I'm passionate about all things creative but I'm also a rather analytical person. I've always been intrigued by beautiful and practical designs but I didn't realise my interest in UX/UI design until my late twenties.
                        <br /> <br />
                        Since my background is in business, I view the company as a whole, considering perspectives from departments such as finance, marketing, HR and design departments. Therefore, I'm especially interested in designing products and services in a way that considers both user-centred design and business objectives.
                        <br /> <br />
                        &#128205;I'm currently based in Helsinki, Finland. However, I've previously lived abroad for several years which has expanded and enriched my worldview and understanding of cross-cultural design.
                    </div>
                </div>
            ),
            spanall: true,
        },
        {
            id: 2,
            title: "Education",
            icon: <SchoolOutlined className="icon" />,
            desc: (
                <div>
                    <b>2022 - 2025</b> <br />
                    BSc & MSc Computer Science <br />(Human-Technology Interaction) <br /><br />
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
            <h2>About</h2>
            <div className="grid-container">
                {data.map((d) => (
                    <div className={d.spanall ? "card spanall" : "card"} key={d.id}>
                        <div className="top">
                            <h3>{d.title}</h3>
                        </div>
                        <div className="center">
                            {d.desc}
                            {d.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}