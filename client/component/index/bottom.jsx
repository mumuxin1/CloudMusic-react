import React from "react";
import "../../css/xindex.css"
class Xbotom extends React.Component {
	constructor(props) {
    super(props);
    this.state={
    	play:true
    }
     this.playmuisc = this.playmuisc.bind(this);
  }
  render(){
    return(
         <div className="wplaying">
             <div className="wmesg">
                     <img src={require("../../img/w_music (4).jpg")}/>
             </div>
             <div className="wsongmesg">
             <span className="wicon">
                 <b>分手那天</b>
                  <p>徐静博 - 分手那天</p>
             </span>
              <span className={this.state.play? 'iconfont'+' '+'icon-iconset0481'+' '+ 'wiconfont' : 'iconfont'+' '+'icon-zanting'+' '+'wiconfont'} style={{fontSize:'1.8rem',color:'#4d4d4d'}} onClick={this.playmuisc}></span>
              <span className="iconfont icon-xin wiconfont" style={{fontSize:'1.8rem',color:'#4d4d4d'}}></span>
           </div>
          </div>
    )
  }
  playmuisc(){
  	console.log(this.state.play)
  	this.setState({
  		play:!this.state.play
  	})
  	
  }

}
export default Xbotom;