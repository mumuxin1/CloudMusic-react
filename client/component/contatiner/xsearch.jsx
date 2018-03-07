import React from "react";
import "../../css/xsearch.css";
import "../../iconfont/iconfont.css";
class Xsearch extends React.Component {
	constructor(props) {
    super(props);
  }
  render(){
    return(
         <div className="wsearch">
	         <header id="wsearch">
	           <span><img src={require("../../img/w_comment_03.jpg")}/></span>
	           <div className="searchtext"><input type="text" placeholder="猜你喜欢七月上"/></div>
	         </header>
	         <div className="wsinger">
	           <i className="iconfont icon-qunzu" style={{fontSize:'1.2rem'}}></i>
	           <b>歌手分类</b>
	           <em style={{fontSize:'1.5rem',color:'#cecfd1'}}>></em>
	         </div>
	         <div className="whot">
	           <p>热门搜索</p>
	           <ul>
	              <li><a href="#">林俊杰</a></li>
	              <li><a href="#">恋爱先生</a></li>
	              <li><a href="#">周杰伦</a></li>
	              <li><a href="#">爱乐之战</a></li>
	              <li><a href="#">林红昭愿杰</a></li>
	              <li><a href="#">体面</a></li>
	              <li><a href="#">离人</a></li>
	              <li><a href="#">陈奕迅</a></li>
	              <li><a href="#">123我爱你</a></li>
	           </ul>
	         </div>
          </div>
    )
  }

}
export default Xsearch;