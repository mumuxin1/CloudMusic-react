import React from "react";
import "../../iconfont/iconfont.css";
import src from '../../img/w_music (4).jpg';
import src1 from '../../img/w_music (3).jpg';
class Xlist extends React.Component {
	constructor(props) {
    super(props);
    this.state={
    	isshow:false,
    	songlist:[
    	 {
    	 	img:src,
    	 	title:"分手那天",
    	 	content:"徐静博 - 分手那天",
    	 	 music:"./music.mp3"
    	 },
    	  {
    	 	img:src1,
    	 	title:"分手那天",
    	 	content:"徐静博 - 分手那天",
    	 	 music:"./Che'Nelle (シェネル) - 好きだよ。~100回の後悔~ (English Ver.).mp3"
    	 },
    	 ,
    	  {
    	 	img:src1,
    	 	title:"分手那天",
    	 	content:"徐静博 - 分手那天",
    	 	 music:"./music.mp3"
    	 },
    	 ,
    	  {
    	 	img:src,
    	 	title:"分手那天",
    	 	content:"徐静博 - 分手那天",
    	 	 music:"./MC高迪 - 一人我饮酒醉.mp3"
    	 }
    	 ],
    	 index:-1
    }
 }
  render(){
    return(
         <div id="wlist">
           <div className="wcircle">
             <ul>
                <li>
                <img src={require('../../img/w_list_07.jpg')}/>
                <p>每日推荐</p>
                </li>
                <li>
                <img src={require('../../img/w_list_05.jpg')}/>
                <p>私人fm</p>
                </li>
                <li>
                <img src={require('../../img/w_list_09.jpg')}/>
                <p>歌单</p>
                </li>
                <li>
                <img src={require('../../img/w_list_11.jpg')}/>
                <p>排行榜</p>
                </li>
             </ul>
           </div>
          <div className="Recommended">
            <span>
                推荐歌单
                
            </span>
            <ul className="wmusiclist">
	              {
	              	 this.state.songlist.map((item, index)=> {
		                return (<li key={index} onClick={this.playmusic.bind(this,index)} >
		                  <audio src= {item.music} ref={this.state.index==index?"wplay":""}></audio>
		                  <div className="wmesg" >
		                    <img src={item.img}/>
		                   </div>
		                    <div className="wsongmesg">
		                     <span className="wicon">
		                         <b>{item.title}</b>
		                         <p>{item.content}</p>
		                     </span>
		                      <span className="iconfont icon-bofangshu wiconfont" style={{fontSize:'1.8rem',color:'#a9aaac'}} style={{display:'none'}}></span>
		                     <span className="iconfont icon-gengduo-shuxiang wiconfont" style={{fontSize:'1.8rem',color:'#a9aaac'}}></span>
		                    </div>
		               </li>)
					}) 
	              }
        </ul>
              
              { /*<li>
                  <div className="wmesg">
                     <img src={require("../../img/w_music (2).jpg")}/>
                   </div>
                    <div className="wsongmesg">
                     <span className="wicon">
                         <b>分手那天</b>
                         <p>徐静博 - 分手那天</p>
                     </span>
                      <span className="iconfont icon-bofangshu wiconfont" style={{fontSize:'1.8rem',color:'#a9aaac',display:"none"}}></span>
                     <span className="iconfont icon-gengduo-shuxiang wiconfont" style={{fontSize:'1.8rem',color:'#a9aaac'}}></span>
                    </div>
                  
               </li>
               <li>
                  <div className="wmesg">
                     <img src={require("../../img/w_music (3).jpg")}/>
                   </div>
                    <div className="wsongmesg">
                     <span className="wicon">
                         <b>缘分</b>
                         <p>五月 - 缘分</p>
                     </span>
                      
                     <span className="iconfont icon-gengduo-shuxiang wiconfont" style={{fontSize:'1.8rem',color:'#a9aaac'}}></span>
                    </div>
                  
               </li>
               <li>
                  <div className="wmesg">
                     <img src={require("../../img/w_music (4).jpg")}/>
                   </div>
                    <div className="wsongmesg">
                     <span className="wicon">
                         <b>分手那天</b>
                         <p>徐静博 - 分手那天</p>
                     </span>
                     <span className="iconfont icon-gengduo-shuxiang wiconfont" style={{fontSize:'1.8rem',color:'#a9aaac'}}></span>
                    </div>
                  
              </li>*/}
          </div>
         </div>
    )
  }
  show(){
  	this.setState({
  		isshow:!this.state.isshow
  	})
  }
  playmusic(id){
  	 this.state.index=id;
  	  console.log(this.getItempla(id))
  	  this.refs.wplay.play();
  }
   getItempla(index){
    return index == this.state.index ? "wplay" : "";
    
   }
  
}
export default Xlist;