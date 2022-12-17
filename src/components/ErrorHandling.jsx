import React from "react";
import "./ErrorHandling.css";

const ErrorHandling = (props) => {

    const refreshPage = () => {
        window.location.reload(false)
    }

    return (
        <div className="error-message">
            <h2>Something went wrong:</h2>
            <h3>{props.message}</h3>
            <button type="button" onClick={refreshPage}>Refresh page</button>
        </div>
    )
}

export default ErrorHandling;