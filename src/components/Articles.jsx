import React from "react";
import { useEffect, useState } from "react";
import "./Articles.css";
import LoadingSpinner from "./LoadingSpinner";
import ErrorHandling from "./ErrorHandling";

const Articles = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        retrieveData();
    }, []);

    const retrieveData = async () => {

        return fetch("https://mocki.io/v1/0120ca3b-882f-4dab-b692-de4e5e920d98")
            .then(result => {
                return result.json();
            })
            .then(response => {

                setData(response);
                setLoading(false);
                return response;
            })
            .catch(error => {
                setErrorMessage(error.message);
            })
    }

    return (
        <div>
            {
                errorMessage !== "" && data.length === 0 && <ErrorHandling message={errorMessage} />
            }

            {
                loading && errorMessage === "" ? (
                    <LoadingSpinner />
                ) : (
                    <div className="wrapper">
                        {
                            data?.map((element, index) => {
                                const { Image, Title, Excerpt, Category } = element;
                                return (
                                    <div key={index} className="card">
                                        <img src={Image} alt="article" className="img-fluid" />
                                        <div className="container">
                                            <h4>{Title}</h4>
                                            <p>{Excerpt}</p>
                                            <div className="footer">
                                                <span className="pipe"></span>
                                                <span className="entertainment">{Category.toUpperCase()}</span>
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