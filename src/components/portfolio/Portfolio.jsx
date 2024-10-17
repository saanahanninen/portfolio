import { useEffect, useState } from "react";
import Projects from "../projects/Projects";
import "./portfolio.scss";
import { featuredProjects, universityProjects, personalProjects } from "../../portfoliodata";

export default function Portfolio() {

    const [selected, setSelected] = useState("featured");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "featured",
            title: "Featured"
        },
        {
            id: "university",
            title: "University projects"
        },
        {
            id: "personal",
            title: "Personal projects"
        }
    ];

    useEffect(() => {
        switch (selected) {
            case "featured":
                setData(featuredProjects);
                break;
            case "university":
                setData(universityProjects);
                break;
            case "personal":
                setData(personalProjects);
                break;
            default:
                setData(featuredProjects);
        }
    }, [selected]);

    return (
        <div className="portfolio" id="portfolio">
            <ul>
                {list.map((item) => (
                    <Projects
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id} key={item.id} />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <div className="item" key={d.id} style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/${d.img})`, backgroundSize: "cover" }}>
                        <a href={d.link} target="_blank" rel="noreferrer"></a>
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
}


