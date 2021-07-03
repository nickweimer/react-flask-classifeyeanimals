import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class B1Description extends Component {
  constructor() {
    super();

  }

  render() {
    return (
            <div>
                <MediaQuery minWidth={1224}>
                    <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/Chestnut-mandibled-toucan-by-Paul-S-Wolf--tojpeg_1578909387644_x2.jpg?r=7930"} alt={""} className="border border-dark rounded" style={{width:"150px", height:"150px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "11px"}}> This Bucket consists of all types of birds. Birds are one of the  6 main classes of animals. The others are Mammals, Fish, Reptiles, Amphibians, and Invertebrates. Beyond the class of Birds, there are 23 Orders of Birds. Friendly reminder: A Penguin is a Bird!</div>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                    <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/Chestnut-mandibled-toucan-by-Paul-S-Wolf--tojpeg_1578909387644_x2.jpg?r=7930"} alt={""} className="border border-dark rounded" style={{width:"100px", height:"100px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "10px"}}> This Bucket consists of all types of birds. Birds are one of the  6 main classes of animals. The others are Mammals, Fish, Reptiles, Amphibians, and Invertebrates. Beyond the class of Birds, there are 23 Orders of Birds. Friendly reminder: A Penguin is a Bird!</div>
                </MediaQuery>
             </div>
    );
  }
}

export default B1Description;