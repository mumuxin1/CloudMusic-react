import React from "react";
import "../../css/comment.css";
import "../../iconfont/iconfont.css";
class Xcomment extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div id="comment">
			   <header>
			     <span><img src={require("../../img/w_comment_03.jpg")}/></span>评论(51689)
			   </header>
			   <div className="wusertop">
			      <div className="wusermesg">
			        <img src={require("../../img/w_comment_07.jpg")}/>
			        <span>
			           <b>9420</b>
			           <p>麦小兜</p>
			        </span>
			      </div>
			      <p>></p>
			   </div>
			   <div className="wonderful ">
			       <h4>精彩评论</h4>
			      <div className="warticle">
			       <div className="wartop">
			          <span>
			            <img src={require("../../img/w_comment_10.jpg")}/>
			           </span>
			          <p>相关专题栏文章</p>
			        </div>
			        <div className="warbottom">
			           <span>
			              <img src={require("../../img/w_comment_14.jpg")}/>
			           </span>
			           <div className="wintruct"> 
			              <p>听完这些你还不想恋爱吗?</p>
			              <i>by Cutties 阅读 12019</i>
			           </div>
			        </div>
			      </div>
			      <ul className="wmsgist">
			        <li>
			           <span>
			              <img src={require("../../img/w_comment_18.jpg")}/>
			           </span>
			           <div className="wleave">
				              <div className="wpraise">
				                 <b>麦小兜</b>
				                  <span>
					                  <i>17万</i>
					                  <img src={require("../../img/w_comment_21.jpg")}/>
				                  </span>
				              </div>
				              <i>(作者)2017年10月28日</i>
				              <p>谢谢大家的支持,我会更加努力的</p>
			           </div>
			           
			        </li>
			         <li>
			           <span>
			              <img src={require("../../img/w_comment_18.jpg")}/>
			           </span>
			           <div className="wleave">
				              <div className="wpraise">
				                 <b>麦小兜</b>
				                  <span>
					                  <i>17万</i>
					                  <img src={require("../../img/w_comment_21.jpg")}/>
				                  </span>
				              </div>
				              <i>(作者)2017年10月28日</i>
				              <p>谢谢大家的支持,我会更加努力的</p>
			           </div>
			           
			        </li>
			         <li>
			           <span>
			              <img src={require("../../img/w_comment_18.jpg")}/>
			           </span>
			           <div className="wleave">
				              <div className="wpraise">
				                 <b>麦小兜</b>
				                  <span>
					                  <i>17万</i>
					                  <img src={require("../../img/w_comment_21.jpg")}/>
				                  </span>
				              </div>
				              <i>(作者)2017年10月28日</i>
				              <p>谢谢大家的支持,我会更加努力的</p>
			           </div>
			           
			        </li>
			      </ul>
			   </div>
			   <div className="inputmsg">
			     <div className="winputtext">
				     <input type="text" placeholder="随乐而起，有感而发"/>
				     <img src={require("../../img/w_comment_33.jpg")}/>
			     </div>
			    <b style={{padding:'0 1rem'}}>发送</b>
			   </div>
			 
			</div>
		)
	}
}
export default Xcomment;
