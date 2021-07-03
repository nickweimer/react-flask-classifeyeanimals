import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class B3Description extends Component {
  constructor() {
    super();

  }

  render() {
    return (
                <div>
                <MediaQuery minWidth={1224}>
                    <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG"} alt={""} className="border border-dark rounded" style={{width:"150px", height:"150px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "11px"}}> This Bucket consists of all types of Rodents/Marsupials, which are all mammals. Animals include Rats, Squirrels, Opossums, Kangaroos, Rabbits, Hedgehogs, Moles, etc.</div>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://upload.wikimedia.org/wikipedia/commons/0/0c/Kangaroo_Australia_01_11_2008_-_retouch.JPG"} alt={""} className="border border-dark rounded" style={{width:"100px", height:"100px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "10px"}}> This Bucket consists of all types of Rodents/Marsupials, which are all mammals. Animals include Rats, Squirrels, Opossums, Kangaroos, Rabbits, Hedgehogs, Moles, etc.</div>
                </MediaQuery>
                </div>
        );
      }
}

export default B3Description;