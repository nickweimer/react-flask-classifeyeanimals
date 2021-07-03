import React, { Component } from "react";
import "../Containers_styling/SlidingRightMenu.css";
import MediaQuery from 'react-responsive';


import B1Description from "../Components/B1Description";
import B2Description from "../Components/B2Description";
import B3Description from "../Components/B3Description";
import B4Description from "../Components/B4Description";
import B5Description from "../Components/B5Description";
import B6Description from "../Components/B6Description";
import B7Description from "../Components/B7Description";





class SlidingRightMenu extends Component {

  constructor(props) {
        super(props);
        this.state = {
          showBucket1Description: false,
          showBucket2Description: false,
          showBucket3Description: false,
          showBucket4Description: false,
          showBucket5Description: false,
          showBucket6Description: false,
          showBucket7Description: false
          };

        this.hideComponent = this.hideComponent.bind(this);
    }

  hideComponent(name) {
    console.log(name);
    switch (name) {
      case "showBucket1Description":
        this.setState({
            showBucket1Description: true,
            showBucket2Description: false,
            showBucket3Description: false,
            showBucket4Description: false,
            showBucket5Description: false,
            showBucket6Description: false,
            showBucket7Description: false
        });
        break;
      case "showBucket2Description":
        this.setState({
            showBucket1Description: false,
            showBucket2Description: true,
            showBucket3Description: false,
            showBucket4Description: false,
            showBucket5Description: false,
            showBucket6Description: false,
            showBucket7Description: false
        });
        break;
      case "showBucket3Description":
        this.setState({
            showBucket1Description: false,
            showBucket2Description: false,
            showBucket3Description: true,
            showBucket4Description: false,
            showBucket5Description: false,
            showBucket6Description: false,
            showBucket7Description: false
        });
        break;
      case "showBucket4Description":
        this.setState({
            showBucket1Description: false,
            showBucket2Description: false,
            showBucket3Description: false,
            showBucket4Description: true,
            showBucket5Description: false,
            showBucket6Description: false,
            showBucket7Description: false
        });
        break;
      case "showBucket5Description":
        this.setState({
            showBucket1Description: false,
            showBucket2Description: false,
            showBucket3Description: false,
            showBucket4Description: false,
            showBucket5Description: true,
            showBucket6Description: false,
            showBucket7Description: false
        });
        break;
      case "showBucket6Description":
        this.setState({
            showBucket1Description: false,
            showBucket2Description: false,
            showBucket3Description: false,
            showBucket4Description: false,
            showBucket5Description: false,
            showBucket6Description: true,
            showBucket7Description: false
        });
        break;
      case "showBucket7Description":
        this.setState({
            showBucket1Description: false,
            showBucket2Description: false,
            showBucket3Description: false,
            showBucket4Description: false,
            showBucket5Description: false,
            showBucket6Description: false,
            showBucket7Description: true
        });
        break;
      default:
        this.setState = {
          showBucket1Description: false,
          showBucket2Description: false,
          showBucket3Description: false,
          showBucket4Description: false,
          showBucket5Description: false,
          showBucket6Description: false,
          showBucket7Description: false
          };
    }
  }

  render() {

    const {  showBucket1Description,  showBucket2Description,  showBucket3Description,  showBucket4Description,  showBucket5Description,  showBucket6Description,  showBucket7Description } = this.state;
    var visibility2 = "hide";

    if (this.props.menuVisibility2) {
      visibility2 = "show";
    }


    return (
        <div>
           <MediaQuery minWidth={1224}>

            <div id="flyoutMenu2" className={visibility2}>
              <div className="container">
                <div>
                        <button id="roundButton2" style={{marginLeft: "0%", position: "fixed"}} onMouseDown={this.props.handleMouseDown2} />
                </div>
                <div style={{width: "90%", marginTop: "0%", marginLeft: "28px", paddingRight: "3vw", paddingLeft:"30px", position: "fixed"}}>

                        <div style={{color:'#343A40' , fontFamily: 'Special Elite', fontSize: "20px",display: "flex",  justifyContent: "center", alignItems: "center"}}>
                        Bucket Descriptions:
                        </div>
                        <hr />
                        <div style={{width:"100%", paddingLeft:"0px", paddingTop:"5px"}}>
                        <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                                  <button style={{borderLeft: "2px solid black", fontFamily: 'Special Elite', fontSize: "12px", padding: "2px"}} onClick={() => this.hideComponent("showBucket1Description")}>
                                    Birds
                                  </button>

                                  <button style={{borderLeft: "2px solid black", fontFamily: 'Special Elite', fontSize: "12px", padding: "2px"}} onClick={() => this.hideComponent("showBucket2Description")}>
                                    Carnivores
                                  </button>

                                  <button style={{borderLeft: "2px solid black", borderRight: "2px solid black", fontFamily: 'Special Elite', fontSize: "12px", padding: "2px"}} onClick={() => this.hideComponent("showBucket3Description")}>
                                    Rodents/Marsupials
                                  </button>

                        </div>
                        <br />
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                  <button style={{borderLeft: "2px solid black",  fontFamily: 'Special Elite', fontSize: "12px", padding: "2px"}} onClick={() => this.hideComponent("showBucket4Description")}>
                                    Primates
                                  </button>
                                  <button style={{borderLeft: "2px solid black", borderRight: "2px solid black", fontFamily: 'Special Elite', fontSize: "12px", padding: "2px"}} onClick={() => this.hideComponent("showBucket5Description")}>
                                    Hoofed Mammals
                                  </button>
                         </div>
                         <br />
                         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                  <button style={{borderLeft: "2px solid black", fontFamily: 'Special Elite', fontSize: "12px", padding: "2px"}} onClick={() => this.hideComponent("showBucket7Description")}>
                                    Reptiles
                                  </button>
                                  <button style={{borderLeft: "2px solid black",  borderRight: "2px solid black", fontFamily: 'Special Elite', fontSize: "12px", padding: "2px"}} onClick={() => this.hideComponent("showBucket6Description")}>
                                    Other
                                  </button>
                            </div>
                        <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                            <hr />
                            {showBucket1Description && <B1Description />}
                            {showBucket2Description && <B2Description />}
                            {showBucket3Description && <B3Description />}
                            {showBucket4Description && <B4Description />}
                            {showBucket5Description && <B5Description />}
                            {showBucket6Description && <B6Description />}
                            {showBucket7Description && <B7Description />}
                            <hr />

                        </div>

                         </div>

                </div>
              </div>
            </div>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
            <div id="flyoutMenu4" className={visibility2}>
              <div className="container">
                <div>
                        <button id="roundButton4" style={{marginLeft: "-42px", position: "fixed"}} onMouseDown={this.props.handleMouseDown2} />
                </div>
                <div style={{width: "100%", marginTop: "0%", marginLeft: "10px", paddingRight: "20px", paddingTop:"100px", paddingLeft:"0px", position: "fixed"}}>

                        <div style={{color:'#343A40' , fontFamily: 'Special Elite', fontSize: "16px",display: "flex",  justifyContent: "center", alignItems: "center"}}>
                        Bucket Descriptions:
                        </div>
                        <hr />
                        <div style={{width:"100%", paddingLeft:"0px", paddingTop:"2px"}}>
                        <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                                  <button style={{borderLeft: "1px solid black", fontFamily: 'Special Elite', fontSize: "11px", padding: "2px"}} onClick={() => this.hideComponent("showBucket1Description")}>
                                    Birds
                                  </button>

                                  <button style={{borderLeft: "1px solid black", borderRight: "1px solid black", fontFamily: 'Special Elite', fontSize: "11px", padding: "2px"}} onClick={() => this.hideComponent("showBucket2Description")}>
                                    Carnivores
                                  </button>

                        </div>
                        <div style={{display: "flex",  justifyContent: "center", alignItems: "center"}}>
                                  <button style={{borderLeft: "1px solid black", borderRight: "1px solid black", fontFamily: 'Special Elite', fontSize: "11px", padding: "2px"}} onClick={() => this.hideComponent("showBucket3Description")}>
                                    Rodents/Marsupials
                                  </button>

                        </div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                  <button style={{borderLeft: "1px solid black",  fontFamily: 'Special Elite', fontSize: "11px", padding: "2px"}} onClick={() => this.hideComponent("showBucket4Description")}>
                                    Primates
                                  </button>
                                  <button style={{borderLeft: "1px solid black", borderRight: "1px solid black", fontFamily: 'Special Elite', fontSize: "11px", padding: "2px"}} onClick={() => this.hideComponent("showBucket5Description")}>
                                    Hoofed Mammals
                                  </button>
                         </div>
                         <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                                  <button style={{borderLeft: "1px solid black", fontFamily: 'Special Elite', fontSize: "11px", padding: "2px"}} onClick={() => this.hideComponent("showBucket7Description")}>
                                    Reptiles
                                  </button>
                                  <button style={{borderLeft: "1px solid black", borderRight: "1px solid black", fontFamily: 'Special Elite', fontSize: "11px", padding: "2px"}} onClick={() => this.hideComponent("showBucket6Description")}>
                                    Other
                                  </button>
                            </div>
                        <div style={{display: "flex",  justifyContent: "center", alignItems: "center", marginRight: "20px"}}>
                            <hr />
                            {showBucket1Description && <B1Description />}
                            {showBucket2Description && <B2Description />}
                            {showBucket3Description && <B3Description />}
                            {showBucket4Description && <B4Description />}
                            {showBucket5Description && <B5Description />}
                            {showBucket6Description && <B6Description />}
                            {showBucket7Description && <B7Description />}
                            <hr />

                        </div>

                         </div>

                </div>
              </div>
            </div>
            </MediaQuery>
        </div>
    );
  }
}

export default SlidingRightMenu;