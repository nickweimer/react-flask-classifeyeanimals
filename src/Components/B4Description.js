import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class B4Description extends Component {
  constructor() {
    super();

  }

  render() {
    return (
                <div>
                    <MediaQuery minWidth={1224}>
                    <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://media.npr.org/assets/img/2017/05/17/orangutan-babies-1_custom-7dc7c1291d3678a7bc86cdcb4cda3e85ffa9c46a.jpg"} alt={""} className="border border-dark rounded" style={{width:"150px", height:"150px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "11px"}}> This Bucket consists of all types of Primates. Primates are a large Order of Mammals. While this bucket is well known, do not forget humans are included!</div>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://media.npr.org/assets/img/2017/05/17/orangutan-babies-1_custom-7dc7c1291d3678a7bc86cdcb4cda3e85ffa9c46a.jpg"} alt={""} className="border border-dark rounded" style={{width:"100px", height:"100px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "10px"}}> This Bucket consists of all types of Primates. Primates are a large Order of Mammals. While this bucket is well known, do not forget humans are included!</div>
                </MediaQuery>
                </div>
        );
      }
}

export default B4Description;