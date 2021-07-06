import "./portfolio.scss"

import PortfolioList from "../portfolioList/PortfolioList"
import { useState, useEffect } from "react";
import { featuredPortfolio, webPortfolio, mobilePortfolio } from "../../data.js"

const Portfolio = () => {
    const [selected,setSelected] = useState("feature");
    const [data, setData] = useState([]);
    const list = [
        {
            id: "feature",
            title: "Feature"
        },
        {
            id: "web",
            title: "Web App"
        },
        {
            id: "mobile",
            title: "Mobile App"
        }
    ]

    useEffect(() =>{
        switch (selected) {
            case "feature":
                setData(featuredPortfolio);
                break;
            case "web":
                setData(webPortfolio);
                break;
            case "mobile":
                setData(mobilePortfolio)
                break;
            default:
                setData(featuredPortfolio);
        }
    },[selected])

    return (
        <div className="portfolio" id="portfolio">
            <h1>Portfolio</h1>
            <ul>
                {list.map(l => (
                    <PortfolioList key={l.id} title={l.title} active={selected === l.id} setSelected={setSelected} id={l.id}/>
                ))}
            </ul>
            <div className="container">
                {data.map(d => (
                    <div className="item" key={d.id}>
                        <img src={d.img} alt="" />
                        <h3>{d.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Portfolio
