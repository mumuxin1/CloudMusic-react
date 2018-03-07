import React from 'react';
import '../../css/hchoose.css'
import '../../iconfont/iconfont.css'
class Hchoose extends React.Component{
	constructor(props){
		super(props);
	}
	render(){
		return(
			<div id="hlist">
			<div className="title">
				<h6>歌曲：剩下了自己</h6>
			</div>
			<ul>
				<li><a href="javascript:"><i className="iconfont icon-iconset0481"></i><p>收藏到歌单</p></a></li>
				<li><a href="javascript:"><i className="iconfont icon-qunzu"></i><p>歌手：张韶涵</p></a></li>
				<li><a href="javascript:"><i className="iconfont icon-music"></i><p>专辑：恋爱先生</p></a></li>
				<li><a href="javascript:"><i className="iconfont icon-yinle101"></i><p>来源：歌单</p></a></li>
				<li><a href="javascript:"><i className="iconfont icon-music"></i><p>音质：自动选择</p></a></li>
				<li><a href="javascript:"><i className="iconfont icon-bofangshu"></i><p>查看视频</p></a></li>
				<li><a href="javascript:"><i className="iconfont icon-zanting"></i><p>定时停止播放</p></a></li>
			</ul>
		</div>
		)
	}
}
export default Hchoose;
