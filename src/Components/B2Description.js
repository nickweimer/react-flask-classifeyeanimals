import React, { Component } from "react";
import MediaQuery from 'react-responsive';

class B2Description extends Component {
  constructor() {
    super();

  }

  render() {
    return (
                <div>
                <MediaQuery minWidth={1224}>
                    <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://images.theconversation.com/files/279883/original/file-20190617-118522-12zzl18.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"} alt={""} className="border border-dark rounded" style={{width:"150px", height:"150px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "11px"}}> This Bucket consists of all types of Carivores. These mammal meat-eaters sit at the top of the food chain and are often called Predators. Animals include Cats, Dogs, Foxes, Bears, Pandas, Walruses, Seals, Otters, Hyenas, Ferrets, Badgers, etc. </div>
                </MediaQuery>
                <MediaQuery maxWidth={1224}>
                <br />
                    <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={"https://images.theconversation.com/files/279883/original/file-20190617-118522-12zzl18.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop"} alt={""} className="border border-dark rounded" style={{width:"100px", height:"100px"}} />
                    </div>
                    <br />
                    <div style={{fontFamily: 'Special Elite',fontSize: "10px"}}> This Bucket consists of all types of Carivores. These mammal meat-eaters sit at the top of the food chain and are often called Predators. Animals include Cats, Dogs, Foxes, Bears, Pandas, Walruses, Seals, Otters, Hyenas, Ferrets, Badgers, etc. </div>
                </MediaQuery>
                </div>
        );
      }
}

export default B2Description;