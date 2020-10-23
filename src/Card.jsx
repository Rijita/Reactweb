import React from "react";
import { NavLink } from "react-router-dom";
import mini from "./Images/mini.png";

const Card = (props) => {
    return (
        <>
            <div className="col-md-4 col-10 mx-auto">
                <div className="card" style={{ width: "18rem;" }}>
                    <img src={props.imgsrc} className="card-img-top" alt="..."  style={{height:"200px"}}/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.text}</p>
                        <NavLink to="/contact" className="btn btn-info" >Initiate</NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;