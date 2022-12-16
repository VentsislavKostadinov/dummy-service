import React from "react";
import { useEffect, useState } from "react";
import "./Articles.css";

const Articles = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = async () => {

        return fetch("https://mocki.io/v1/93ca895b-ff6e-4584-a14f-68afb735f7bd")
            .then(result => {
                return result.json();
            })
            .then(response => {

                setData(response);
                return response;
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div className="wrapper">
            {
                data?.map((element, index) => {
                    return (
                        <div key={index} className="card">
                            <img src={element.image} alt="article-image"  className="img-fluid"/>
                            <div className="container">
                                <h4>{element.title}</h4>
                                <p>{element.text}</p>
                                <div className="footer">
                                    <span className="pipe"></span>
                                    <span className="entertainment">{element.footer.toUpperCase()}</span>
                                    </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Articles;