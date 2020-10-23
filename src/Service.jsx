import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import mini from "./Images/mini.png";
import Card from "./Card";
import Sdata from "./Sdata";
import Footer from "./Footer";

const Service = () => {

  return (
        <>
      <div className="my-5">
        <h1 className="text-center">Services Offered</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {
                Sdata.map((val, ind)=>{
                  return <Card
                  key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                  />
                })
              }
              </div>

            </div>
          </div>
        </div>
        <Footer/>
          
        </>
    )

}
export default Service;
