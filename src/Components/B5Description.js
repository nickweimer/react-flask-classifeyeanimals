import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class B5Description extends Component {
  constructor() {
    super();

  }

  render() {
    return (
                <div>
                 <MediaQuery minWidth={1224}>
                    <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://2.bp.blogspot.com/-KAtZCOVenQY/WGNHOAeiBWI/AAAAAAAACf4/JWThLCDAL2k9VdYoE3a3XIeFE74y-OCogCEw/s1600/Artiodactyl%2Bfeet2.jpg"} alt={""} className="border border-dark rounded" style={{width:"150px", height:"150px", marginRight: "8px"}} />
                    <img src={"https://i.pinimg.com/originals/22/67/bc/2267bc804e0fe8af1e1c869527bb5e69.jpg"} alt={""} className="border border-dark rounded" style={{width:"125px", height:"125px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "11px"}}> This Bucket consists of Odd-Toed and Even-Toed Ungulates (Mammals), named so because they bear weight equally on two (even-toed) or three (odd-toed) of their five toes. Animals in this bucket include Horses, Deers, Giraffes, Antelopes, Zebras, Cows, Sheeps, Pigs, Elephants, Hippos, Rhinos, etc.   </div>
                    <br />
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://i.pinimg.com/originals/22/67/bc/2267bc804e0fe8af1e1c869527bb5e69.jpg"} alt={""} className="border border-dark rounded" style={{width:"100px", height:"100px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "10px"}}> This Bucket consists of Odd-Toed and Even-Toed Ungulates (Mammals), named so because they bear weight equally on two (even-toed) or three (odd-toed) of their five toes. Animals in this bucket include Horses, Deers, Giraffes, Antelopes, Zebras, Cows, Sheeps, Pigs, Elephants, Hippos, Rhinos, etc.   </div>
                    <br />
                </MediaQuery>

                </div>
        );
      }
}

export default B5Description;