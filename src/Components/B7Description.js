import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class B7Description extends Component {
  constructor() {
    super();

  }

  render() {
    return (
                <div>
                <MediaQuery minWidth={1224}>
                    <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://nationaltoday.com/wp-content/uploads/2019/10/national-reptile-awareness-day.jpg"} alt={""} className="border border-dark rounded" style={{width:"150px", height:"150px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "11px"}}> This Bucket consists of all types of Reptiles. Reptiles are one of the  6 main classes of animals. The others are Mammals, Fish, Birds, Amphibians, and Invertebrates. Beyond the class of Reptiles, there are 4 Orders of Reptiles.</div>
                    <br />
                 </MediaQuery>
                 <MediaQuery maxWidth={1224}>
                 <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://nationaltoday.com/wp-content/uploads/2019/10/national-reptile-awareness-day.jpg"} alt={""} className="border border-dark rounded" style={{width:"100px", height:"100px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "10px"}}> This Bucket consists of all types of Reptiles. Reptiles are one of the  6 main classes of animals. The others are Mammals, Fish, Birds, Amphibians, and Invertebrates. Beyond the class of Reptiles, there are 4 Orders of Reptiles.</div>
                    <br />
                 </MediaQuery>
                </div>
        );
      }
}

export default B7Description;