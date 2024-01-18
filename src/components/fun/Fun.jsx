import { NavigateBefore, NavigateNext } from "@material-ui/icons";
import "./fun.scss";
import { data } from "../../fundata";
import { useState } from "react";

const funData = data.map((item) => ({
    icon: item.icon,
    title: item.title,
    desc: item.desc,
    img: item.img,
}));

export default function Fun() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handleClick = (direction) => {
        direction === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
    };

    return (
        <div className="fun" id="fun">
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                {funData.map((item, index) => (
                    <div className="container" key={index}>
                        <div className="item">
                            <div className="left">
                                <div className="leftContainer">
                                    <span className="imgContainer" dangerouslySetInnerHTML={{ __html: item.icon }} />
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                            <div className="right">
                                <img src={item.img} alt="random fun fact shown on the slide" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <NavigateBefore className="arrow left" onClick={() => handleClick("left")} />
            <NavigateNext className="arrow right" onClick={() => handleClick("right")} />
        </div>
    );
}
