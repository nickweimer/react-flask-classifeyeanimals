import React, { Component } from "react";
import "../Containers_styling/SlidingMenu.css";
import MediaQuery from 'react-responsive';

class SlidingMenu extends Component {

constructor(props) {
        super(props);

    }

  render() {
    var visibility = "hide";

    if (this.props.menuVisibility) {
      visibility = "show";
    }

    return (

        <div >

            <MediaQuery minWidth={1224}>
                <div id="flyoutMenu" className={visibility}>
                    <div className="container">
                        <div>
                            <button id="roundButton" style={{marginLeft: "76%", position: "fixed"}} onMouseDown={this.props.handleMouseDown} />
                        </div>
                    </div>
                    <div style={{marginTop: "10%", marginLeft: "20px", paddingRight: "65px", position: "fixed"}}>

                        <ul>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "24px"}}>
                            User Stats
                            </h5>
                            <hr />

                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "12px"}}>
                            Answer History:
                            </h5>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            {this.props.number_correct} of {this.props.number_answered}
                            </h5>


                            <hr />

                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "12px"}}>
                            Prediction Hints Remaining:
                            </h5>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            {this.props.hints_remaining}
                            </h5>

                            <hr />

                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "12px"}}>
                            Full Image Hints Remaining:
                            </h5>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            {this.props.full_image_hints_remaining}
                            </h5>

                            <hr />


                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "12px"}}>
                            Number Correct in a Row:
                            </h5>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            {this.props.number_correct_consecutive}
                            </h5>

                        </ul>
                    </div>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1224}>
                <div id="flyoutMenu3" className={visibility}>
                    <div className="container">
                        <div>
                            <button id="roundButton3" style={{marginLeft: "72%", position: "fixed"}} onMouseDown={this.props.handleMouseDown} />
                        </div>
                    </div>
                    <div style={{marginTop: "5%", marginLeft: "2px", paddingRight: "100px", position: "fixed"}}>
                        <ul>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "14px"}}>
                            User Stats
                            </h5>
                            <hr />

                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            Answer History:
                            </h5>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            {this.props.number_correct} of {this.props.number_answered}
                            </h5>


                            <hr />

                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            Predict Hints:
                            </h5>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            {this.props.hints_remaining}
                            </h5>

                            <hr />

                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            Image Hints:
                            </h5>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            {this.props.full_image_hints_remaining}
                            </h5>

                            <hr />


                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            Number Correct in a Row:
                            </h5>
                            <h5 style={{color:'#052037', paddingLeft: "0px" , fontFamily: 'Special Elite', fontSize: "11px"}}>
                            {this.props.number_correct_consecutive}
                            </h5>

                        </ul>
                    </div>
                </div>
            </MediaQuery>

        </div>
    );
  }
}

export default SlidingMenu;