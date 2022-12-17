import React from "react";
import { useEffect, useState } from "react";
import "./Articles.css";
import LoadingSpinner from "./LoadingSpinner";

const Articles = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = async () => {

        return fetch("https://mocki.io/v1/ba95adcf-c765-4b36-9ff6-5b0a7319688d")
            .then(result => {
                return result.json();
            })
            .then(response => {

                setData(response);
                setLoading(false);
                return response;
            })
            .catch(error => {
                console.log(error)
            })
    }

    return (
        <div>
            {
                loading ? (
                    <LoadingSpinner />
                ) : (
                 
                        <div className="wrapper">

                            {
                                data?.map((element, index) => {
                                    return (
                                        <div key={index} className="card">
                                            <img src={element.image} alt="article" className="img-fluid" />
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

        </div>
    )
}

export default Articles;