import React from "react";
import Slider from "react-slick"
import "../../css/xindex.css"
class Xbanner extends React.Component {
	constructor(props) {
    super(props);
  }
  render(){
  	var settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
       dots: true,
    };
    return(
         <div style={{overflow:'hidden'}}>
        <Slider {...settings}>
          <div className="wbanner"><img src={require("../../img/w_list_02.jpg")}/> </div>
          <div className="wbanner"><img src={require("../../img/w_list_02.jpg")}/></div>
          <div className="wbanner"><img src={require("../../img/w_list_17.jpg")}/></div>
          <div className="wbanner"><img src={require("../../img/w_list_19.jpg")}/></div>
          <div className="wbanner"><img src={require("../../img/w_list_02.jpg")}/></div>
          <div className="wbanner"><img src={require("../../img/w_list_02.jpg")}/></div>
        </Slider>
      </div>
    )
  }

}
export default Xbanner;