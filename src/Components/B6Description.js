import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class B6Description extends Component {
  constructor() {
    super();

  }

  render() {
    return (
                <div>
                <MediaQuery minWidth={1224}>
                    <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://images2.minutemediacdn.com/image/upload/c_crop,h_1376,w_2045,x_0,y_52/v1554744537/shape/mentalfloss/63062-istock-658344164.jpg?itok=sCyR37oD"} alt={""} className="border border-dark rounded" style={{width:"150px", height:"150px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "11px"}}> This Bucket consists of the remaining Orders of mammals that are not in other buckets. This bucket is rather small, but animals include Platypus, Dugongs, Aardvark, Whales, Dolphins, Bats, and Manatees.</div>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://images2.minutemediacdn.com/image/upload/c_crop,h_1376,w_2045,x_0,y_52/v1554744537/shape/mentalfloss/63062-istock-658344164.jpg?itok=sCyR37oD"} alt={""} className="border border-dark rounded" style={{width:"100px", height:"100px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "10px"}}> This Bucket consists of the remaining Orders of mammals that are not in other buckets. This bucket is rather small, but animals include Platypus, Dugongs, Aardvark, Whales, Dolphins, Bats, and Manatees.</div>
                </MediaQuery>
                </div>
        );
      }
}

export default B6Description;