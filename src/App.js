import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { Input, Button, Spin } from 'antd';
import 'antd/dist/antd.css';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

//Note:
//    <MediaQuery minWidth={1224}>
//      <p>You are a desktop or laptop</p>
//      <MediaQuery minWidth={1824}>
//        <p>You also have a huge screen</p>
//      </MediaQuery>
//    </MediaQuery>
//    <MediaQuery maxWidth={1224}>
//        <p>You are on tablet or mobile</p>
//     </MediaQuery>

import SlidingMenu from './Containers/SlidingMenu';
import SlidingRightMenu from './Containers/SlidingRightMenu';

import Image from "./background/birdbackground.jpg";

const antIcon = <Spin size="large"></Spin>;
const Section = styled.section`
  background: url(${Image}) center;
  height: 240vh;
  background-repeat: repeat;
  display: flex;
  justify-content: flex-start;
  z-index: 1;
  position: relative;

`;

function EyeImageSection(new_eye_image_name)
{
    let aws_path = "https://animaleyeimages.s3.us-east-2.amazonaws.com/";
    let eye_image_path = aws_path.concat(new_eye_image_name);

    return (
      <div>
          <div style={{display: "block", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={eye_image_path} name="eyeimageid" className="border border-dark rounded" style={{width:"160px", height:"160px"}}/>
                </div>
           </div>
      </div>
    );
}

function PredictionSection(p1,p2,p3,p4,p5,p6,p7)
{

    return (
      <div>
          <div style={{display: "block", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <div style={{ marginTop:"10px" }}><h2  style={{fontFamily: 'Special Elite',fontSize: "18px", display: "flex", justifyContent: "center", alignItems: "center"}}> The model predicts: </h2> </div>
                    <div style={{fontFamily: 'Special Elite',fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}> Bird: {p1}</div>
                    <div style={{fontFamily: 'Special Elite',fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}> Carnivore: {p2}  </div>
                    <div style={{fontFamily: 'Special Elite',fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}> Rodent/Marsupial: {p3} </div>
                    <div style={{fontFamily: 'Special Elite',fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}> Primate: {p4}  </div>
                    <div style={{fontFamily: 'Special Elite',fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}> Hoofed Mammals: {p5} </div>
                    <div style={{fontFamily: 'Special Elite',fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}> Reptile: {p7}  </div>
                    <div style={{fontFamily: 'Special Elite',fontSize: "15px", display: "flex", justifyContent: "center", alignItems: "center"}}> Other: {p6} </div>
           </div>
      </div>
    );
}



function FullImageSection(new_full_image_name)
{
    let aws_path = "https://animaleyeimages.s3.us-east-2.amazonaws.com/";
    let image_path = aws_path.concat(new_full_image_name);
    return (
        <div>
            <br></br>
            <div style={{display: "block", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={image_path} style={{width:"256px", height:"256"}} />
                </div>
            </div>
            <br></br>
        </div>
    );
}

function FullImageSectionScored(new_full_image_name, show_name, description, label_name, order, score)
{
    let aws_path = "https://animaleyeimages.s3.us-east-2.amazonaws.com/";
    let image_path = aws_path.concat(new_full_image_name);
    return (
        <div>

            <br></br>
            <div style={{display: "block", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", justifyContent: "center", alignItems: "center"}}>
                    <img src={image_path} style={{width:"256px", height:"256"}} />
                </div>
            </div>
            <br></br>
            <h2 style={{fontFamily: 'Special Elite', fontSize: "24px"}}> {show_name} </h2>
            <br></br>
            <h2 style={{fontFamily: 'Special Elite', fontSize: "16px"}}> Animal Order: {order} </h2>
            <br></br>
            <h2 style={{fontFamily: 'Special Elite', fontSize: "14px"}}> {description} </h2>
            <br></br>
            <hr></hr>
            <h2 style={{fontFamily: 'Special Elite', fontSize: "16px"}}> Your answer was <b> {score} </b>. The correct label was: {label_name}.</h2>
            <br></br>
        </div>
    );
}


class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          status: "Enter date and location..." ,
          eye_image_section: "",
          prediction: "",
          show_full_image: false,
          show_prediction: false,
          loading_prediction: false,
          full_image_name: "",
          eye_image_name: "",
          visible: false,
          visible2: false,
          hints_remaining: 3,
          number_answered: 0,
          number_correct: 0,
          number_correct_consecutive: 0,
          hide_submit_and_predict_buttons: false,
          full_image_hints_remaining: 3,
          show_full_image_hint: false,
          hideFullImageButton: false,
          hidePredictionButton: false,

          };


        //this.handleChangeStart = this.handleChangeStart.bind(this);
        //this.handleChangeEnd = this.handleChangeEnd.bind(this);
        //this.handleLocation = this.handleLocation.bind(this);
        //this.resetLocation = this.resetLocation.bind(this);
        //this.getDateResult = this.getDateResult.bind(this);
        this.showFullImage = this.showFullImage.bind(this);
        this.showFullImageHint = this.showFullImageHint.bind(this);
        this.showPrediction = this.showPrediction.bind(this);
        this.getNewImage = this.getNewImage.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseDown2 = this.handleMouseDown2.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleMenu2 = this.toggleMenu2.bind(this);
    }

    componentDidMount() {
        //this.props.onTryAutoSignup();
        this.getNewImage();
        console.log(this.props);

    }


    handleMouseDown(e) {
      this.toggleMenu();

      console.log("clicked");
      e.stopPropagation();
    }

    handleMouseDown2(e) {
      this.toggleMenu2();
      e.stopPropagation();
    }

    toggleMenu() {
      this.setState({
          visible: !this.state.visible
      });
    }

    toggleMenu2() {
      this.setState({
          visible2: !this.state.visible2
      });
    }



    getNewImage() {
        this.setState({
            status: "Processing...",
            eye_image: "Processing Eye Image...",
            eye_image_name: "",
            show_full_image: false,
            show_prediction: false,
            full_image_name: "",
            hide_submit_and_predict_and_fullimagehint_buttons: false,
            show_full_image_hint: false,
            hideFullImageButton: false,
            hidePredictionButton: false
            });
        //send to server
        //axios.get(process.env.FLASK_API_NEW_IMAGE,{})
        //axios.get("http://127.0.0.1:5000/get_new_im_path",{})
        axios.get("/api/get_new_im_path",{})
            .then(res => {
               console.log("THE IMAGE PATH WAS:")
               console.log(res.data.new_eye_image_name)
               this.setState({
                   eye_image_name: res.data.new_eye_image_name,
                   eye_image_section: EyeImageSection(res.data.new_eye_image_name),
                   show_full_image: false,
                   full_image_name: res.data.new_full_image_name,
                   status: FullImageSection(res.data.new_full_image_name)
                });
            })
           .catch(err => {
                console.log("THE GET NEW IMAGE ERROR IS:::")
                console.log(err)
            })
        var ele = document.getElementsByName("order2");
        for(var i=0;i<ele.length;i++) {
            ele[i].checked = false;
            }
    }

    showPrediction() {
        this.setState({
            show_full_image: false,
            show_prediction: false,
            loading_prediction: true,
            prediction: "",
            hints_remaining: this.state.hints_remaining - 1,
            hidePredictionButton: true
            });
        //send to server
        //axios.get(process.env.FLASK_API_NEW_IMAGE,{})
        //axios.get("http://127.0.0.1:5000/predict",{
        axios.get("/api/predict",{
                params: {
                    eye_image_name: this.state.eye_image_name
                }
        })
            .then(res => {
               this.setState({
                   show_prediction: true,
                   loading_prediction: false,
                   prediction: PredictionSection(res.data.prediction[0],res.data.prediction[1],res.data.prediction[2],res.data.prediction[3],res.data.prediction[4],res.data.prediction[5],res.data.prediction[6])
                });
            })
           .catch(err => {
                console.log("THE GET NEW IMAGE ERROR IS:::")
                console.log(err)
            })
    }

    showFullImageHint() {
        this.setState({
            show_full_image_hint: true,
            full_image_hints_remaining: this.state.full_image_hints_remaining - 1,
            hideFullImageButton: true
            });

    }



    showFullImage() {
        if(document.querySelector('input[name="order2"]:checked') == null) {
                    window.alert("You need to choose an option!");
                    return;
        }
        var radios = document.getElementsByName('order2');
        let user_guess;
        for (var i = 0, length = radios.length; i < length; i++) {
          if (radios[i].checked) {
            // do whatever you want with the checked radio
            user_guess = radios[i].value;

            // only one radio can be logically checked, don't check the rest
            break;
          }
        }
        this.setState({
            show_full_image: false
            });
        //send to server
        //axios.get(process.env.FLASK_API_NEW_IMAGE,{})
        //axios.get("http://127.0.0.1:5000/score",{
        axios.get("/api/score",{
                params: {
                    eye_image_name: this.state.eye_image_name,
                    user_guess: user_guess,
                }
        })
            .then(res => {
               if (res.data.score == "Correct") {
                    if (this.state.number_correct_consecutive > 1) {
                        this.setState({
                           show_full_image: true,
                           number_correct_consecutive: this.state.number_correct_consecutive + 1,
                           number_correct: this.state.number_correct + 1,
                           number_answered: this.state.number_answered + 1,
                           hide_submit_and_predict_and_fullimagehint_buttons: true,
                           status: FullImageSectionScored(this.state.full_image_name, res.data.show_name.slice(2,-2), res.data.description.slice(2,-2), res.data.label_name, res.data.order.slice(2,-2), res.data.score),
                           hints_remaining: this.state.hints_remaining + 1,
                           full_image_hints_remaining: this.state.full_image_hints_remaining + 1
                        });
                    } else {
                        this.setState({
                           show_full_image: true,
                           number_correct_consecutive: this.state.number_correct_consecutive + 1,
                           number_correct: this.state.number_correct + 1,
                           number_answered: this.state.number_answered + 1,
                           hide_submit_and_predict_and_fullimagehint_buttons: true,
                           status: FullImageSectionScored(this.state.full_image_name, res.data.show_name.slice(2,-2), res.data.description.slice(2,-2), res.data.label_name, res.data.order.slice(2,-2), res.data.score)
                        });
                    }
               } else {
                   this.setState({
                       show_full_image: true,
                       number_correct_consecutive: 0,
                       number_correct: this.state.number_correct,
                       number_answered: this.state.number_answered + 1,
                       hide_submit_and_predict_and_fullimagehint_buttons: true,
                       status: FullImageSectionScored(this.state.full_image_name, res.data.show_name.slice(2,-2), res.data.description.slice(2,-2), res.data.label_name, res.data.order.slice(2,-2), res.data.score)
                    });
                }
            })
           .catch(err => {
                console.log("THE GET NEW IMAGE ERROR IS:::")
                console.log(err)
            })
    }


    //getDescription()
    //{ this.setState({
    //        status: "Processing...",
    //       });
        //send to server
    //    let json_req = {"latitude": this.state.latitude, "longitude": this.state.longitude,
    //    "start_date": moment(this.state.startDate).format('YYYY-MM-DD'), "end_date":moment(this.state.endDate).format('YYYY-MM-DD')};
    //    axios.get(process.env.FLASK_API_NEW_IMAGE,json_req)
    //        .then(res => {
    //           this.setState({
    //               status: Weathercard(res.data, this.state.location)
    //            });
    //        })
    //}

    //getUpdatedStats()
    //{ this.setState({
    //        status: "Processing...",
    //       });
        //send to server
    //    let json_req = {"latitude": this.state.latitude, "longitude": this.state.longitude,
    //    "start_date": moment(this.state.startDate).format('YYYY-MM-DD'), "end_date":moment(this.state.endDate).format('YYYY-MM-DD')};
    //    axios.post(process.env.FLASK_API_NEW_IMAGE,json_req)
    //        .then(res => {
    //           this.setState({
    //               status: Weathercard(res.data, this.state.location)
    //            });
    //        })
    //}





    render()
    {
     let full_image_description;
     let eye_image_div;
     let prediction_div;
     full_image_description = this.state.status;
     prediction_div = this.state.prediction;
     eye_image_div = this.state.eye_image_section;

      return (
        <div>

        <Section>
		<div className="wrap-contact100" style={{opacity:"0.9", position: 'absolute', width:"80%", zIndex: '2', align:"center", marginLeft:"10%", marginRight:"10%", marginTop:"50px"}}>

				<span className="contact100-form-title">
                    <img src="img/logo.png"  style={{width:"64px", height:"32px"}}/>
                    <span style={{fontFamily: 'Special Elite', fontSize: "32px"}}>  ClassifEye Animals </span>
				</span>

				<span className="contact100-form-title" id="output" style={{color: "#ff0000"}}></span>

                <div>
                            <SlidingMenu
                                            handleMouseDown={this.handleMouseDown}
                                            menuVisibility={this.state.visible}
                                            hints_remaining={this.state.hints_remaining}
                                            number_answered={this.state.number_answered}
                                            number_correct={this.state.number_correct}
                                            full_image_hints_remaining={this.state.full_image_hints_remaining}
                                            number_correct_consecutive = {this.state.number_correct_consecutive}
                            >
                            </SlidingMenu>
                             <SlidingRightMenu handleMouseDown2={this.handleMouseDown2} menuVisibility2={this.state.visible2}>
                             </SlidingRightMenu>
                </div>

                <div>
                    {eye_image_div}
                </div>

				<div className="wrap-input100" style={{borderBottom: "0px"}}>
                                  <br />
                                  <br />
                                   <div style={{display: "flex", minWidth:"100%", minHeight:"100%", width:"100%", paddingBottom: "0px", justifyContent: "center", alignItems: "center", fontWeight: "bold", fontSize: "20px" , fontFamily: 'Special Elite'}}>
                                       Which type of Animal?
                                   </div>
                                   <MediaQuery minWidth={1224}>
                                   <div style={{display:"flex", paddingTop:"50px",paddingBottom:"0px", fontFamily: 'Special Elite', justifyContent: "center",textAlign:"center"}}>
                                            <input type="radio"  id="Order1No" name="order2" value="1" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "2px", paddingRight:"5px"}}>Bird</label>
                                            <input type="radio" id="Order2No" name="order2" value="2" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "2px", paddingRight:"10px"}}>Carnivore</label>
                                            <input type="radio" id="Order3No" name="order2" value="3" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "2px", paddingRight:"5px"}}>Rodent or Marsupial</label>
                                    </div>
                                    <div style={{display:"flex", paddingTop:"10px",paddingBottom:"0px", fontFamily: 'Special Elite', justifyContent: "center",textAlign:"center"}}>
                                            <input type="radio" id="Order4No" name="order2" value="4" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "2px", paddingRight:"5px"}}>Primate</label>
                                            <input type="radio" id="Order5No" name="order2" value="5" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "2px", paddingRight:"5px"}}>Hoofed Mammal</label>
                                            <input type="radio" id="Order7No" name="order2" value="7" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "2px", paddingRight:"5px"}}>Reptile</label>
                                            <input type="radio" id="Order6No" name="order2" value="6" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "2px", paddingRight:"5px"}}>Other</label>
                                   </div>
                                   </MediaQuery>
                                   <MediaQuery maxWidth={1224}>
                                   <div style={{display:"block", paddingTop:"0px", paddingBottom:"0px", fontFamily: 'Special Elite', fontSize: "12px", textAlign:"center"}}>
                                            <hr></hr>
                                            <input type="radio"  id="Order1No" name="order2" value="1" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "5px", paddingRight:"5px"}}>Bird</label>
                                             <hr></hr>
                                            <input type="radio" id="Order2No" name="order2" value="2" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "5px", paddingRight:"5px"}}>Carnivore</label>
                                             <hr></hr>
                                            <input type="radio" id="Order3No" name="order2" value="3" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "5px", paddingRight:"5px"}}>Rodent or Marsupial</label>
                                             <hr></hr>
                                            <input type="radio" id="Order4No" name="order2" value="4" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "5px", paddingRight:"5px"}}>Primate</label>
                                             <hr></hr>
                                            <input type="radio" id="Order5No" name="order2" value="5" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "5px", paddingRight:"5px"}}>Hoofed Mammal</label>
                                             <hr></hr>
                                            <input type="radio" id="Order7No" name="order2" value="7" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "5px", paddingRight:"5px"}}>Reptile</label>
                                             <hr></hr>
                                             <input type="radio" id="Order6No" name="order2" value="6" style={{fontFamily: 'Special Elite'}}/>
                                                <label style={{paddingLeft: "5px", paddingRight:"5px"}}>Other</label>
                                             <hr></hr>
                                   </div>
                                   </MediaQuery>

                </div>
                { this.state.hide_submit_and_predict_and_fullimagehint_buttons ?
                    <div>
                    </div>
                    :
                    <div>
                        <div className="container-contact100-form-btn">
                            <MediaQuery minWidth={1224}>
                                <div className="wrap-contact100-form-btn" style= {{width:"40%"}}>
                                    <button className="contact100-form-btn" id='submit' onClick={this.showFullImage}
                                        value="Submit"
                                        style={{fontFamily: 'Special Elite', background: "linear-gradient(to left, #3AD8FF, #43aa8c)", marginRight: '15px', fontSize: "20px"}}>
                                        Submit
                                    </button>
                                </div>
                            </MediaQuery>
                            <MediaQuery maxWidth={1224}>
                                <div className="wrap-contact100-form-btn" style= {{width:"40%", paddingTop: "0px"}}>
                                    <button className="contact100-form-btn" id='submit' onClick={this.showFullImage}
                                        value="Submit"
                                        style={{fontFamily: 'Special Elite', background: "linear-gradient(to left, #3AD8FF, #43aa8c)", marginRight: '15px', fontSize: "16px"}}>
                                        Submit
                                    </button>
                                </div>
                            </MediaQuery>
                        </div>
                        {this.state.hints_remaining>0 ?
                            <div>
                                {this.state.hidePredictionButton ?
                                    <div>
                                    </div>
                                    :
                                    <div className="container-contact100-form-btn">
                                        <MediaQuery minWidth={1224}>
                                            <div className="wrap-contact100-form-btn" style= {{width:"25%"}}>
                                                <button className="contact100-form-btn" id='submit' onClick={this.showPrediction}
                                                    value="Submit"
                                                    style={{fontFamily: 'Special Elite', background: "linear-gradient(to left, #3AD8FF, #43aa8c)", marginRight: '15px', fontSize: "14px"}}>
                                                    Show Prediction
                                                </button>
                                            </div>
                                        </MediaQuery>
                                        <MediaQuery maxWidth={1224}>
                                            <div className="wrap-contact100-form-btn" style= {{width:"30%"}}>
                                                <button className="contact100-form-btn" id='submit' onClick={this.showPrediction}
                                                    value="Submit"
                                                    style={{fontFamily: 'Special Elite',background: "linear-gradient(to left, #3AD8FF, #43aa8c)", marginRight: '15px', fontSize: "10px"}}>
                                                    Show Prediction
                                                </button>

                                            </div>
                                        </MediaQuery>
                                    </div>
                                  }
                            </div>
                            :
                            <div>
                            </div>
                        }
                        {this.state.full_image_hints_remaining>0 ?
                            <div>
                                {this.state.hideFullImageButton ?
                                    <div>
                                    </div>
                                    :

                                    <div className="container-contact100-form-btn">
                                        <MediaQuery minWidth={1224}>
                                            <div className="wrap-contact100-form-btn" style= {{width:"25%"}}>
                                                <button className="contact100-form-btn" id='submit' onClick={this.showFullImageHint}
                                                    value="Submit"
                                                    style={{fontFamily: 'Special Elite', background: "linear-gradient(to left, #3AD8FF, #43aa8c)", marginRight: '15px', fontSize: "14px"}}>
                                                    Show Full Image
                                                </button>
                                            </div>
                                        </MediaQuery>
                                        <MediaQuery maxWidth={1224}>
                                            <div className="wrap-contact100-form-btn" style= {{width:"30%"}}>
                                                <button className="contact100-form-btn" id='submit' onClick={this.showFullImageHint}
                                                    value="Submit"
                                                    style={{fontFamily: 'Special Elite', background: "linear-gradient(to left, #3AD8FF, #43aa8c)", marginRight: '15px', fontSize: "10px"}}>
                                                    Show Full Image
                                                </button>
                                            </div>
                                        </MediaQuery>
                                    </div>
                                 }
                            </div>
                            :
                            <div>
                            </div>
                        }
                     </div>
				}

                { this.state.show_prediction ?
                    <div>
                            { this.state.loading_prediction ?
                                <Spin indicator={antIcon} />
                               :
                                <div>

                                {prediction_div}


                                </div>
                             }
                        </div>
                        :
                        <div>
                        </div>

                }

                { this.state.show_full_image ?
                        <div>
                                    {full_image_description}

                                    <button className="contact100-form-btn" id='submit' onClick={this.getNewImage}
                                                value="Submit"
                                                style={{fontFamily: 'Special Elite', background: "linear-gradient(to right, #ffcc33, #ffb347)", borderColor: "GREEN", marginRight: '15px'}}>
                                                Next Image
                                    </button>
                         </div>
                         :
                         <div>
                            { this.state.show_full_image_hint ?
                                <div>
                                        {full_image_description}
                                </div>
                             :
                             <div>
                             </div>
                             }
                        </div>

                }

            <br></br>
            <br></br>
            <div style={{width:"100%"}}>
            <nw-accordion width='100%' color='#eee' label='Instructions'
                description="ClassifEye Animals will test your ability to correctly identify the animal class using just a picture of the animal's eye. Choose from 1 of the 7 distinct buckets (explained to the right). You have two sets of hints: Full Image Hints and Prediction Hints. Use them wisely, because hints are limited. You start with 3 Full Image Hints and 3 Prediction Hints, and are rewarded a bonus of each for 3 or more consecutive correct answers. Refresh the page to restart. Good luck!">
            </nw-accordion>
            </div>

        <footer style={{width:"100%", marginTop:"10px"}}>
                <a href="#"  style={{fontFamily: 'Special Elite', fontSize: "16px", color: "BLACK"}}>© 2021 ClassifEye Animals</a>
        </footer>
        </div>


         </Section>
       </div>
      );
    }
}

export default App;
