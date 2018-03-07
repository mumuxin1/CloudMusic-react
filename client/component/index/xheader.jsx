import React from "react";
import "../../css/xindex.css";
import "../../iconfont/iconfont.css";
class Xindex extends React.Component {
	constructor(props) {
    super(props);
    this.state={
    	index:0
    }
    this.changecolor = this.changecolor.bind(this);
  }
  render(){
  	 var text = this.state.index==0?"#fff":"#e58883";
  	 var text1 = this.state.index==1?"#fff":"#e58883";
  	 var text2 = this.state.index==2?"#fff":"#e58883";
    return(
         <div >
	         <header id="wheader">
	           <div className="wtop" style={{display:'flex',justifyContent:'space-between',alignItems:'center',margin:'0 1rem',height:'5.17rem'}}>
	              <div className="iconfont icon-caidanlan" style={{color:'#fff',fontSize:'1.72rem'}}></div>
	              <div className="wcenter">
		              <span className="iconfont icon-yinyue"style={{fontSize:'1.8rem',color:text2}} onClick={this.changecolor.bind(this,2)}></span>
		              <span className="iconfont icon-music" style={{fontSize:'2.1rem',color:text}} onClick={this.changecolor.bind(this,0)}></span>
		              <span className="iconfont icon-qunzu" style={{fontSize:'2.0rem',color:text1}}  onClick={this.changecolor.bind(this,1)}></span>
	              </div>
	              <a href="#/search" className="iconfont icon-iconfontzhizuobiaozhun22" style={{fontSize:'2.0rem',color:'#fff'}}></a>
	           </div>
	         </header>
          </div>
    )
  }
  changecolor(id){
  	this.setState({index:id})
  }
 

}
export default Xindex;