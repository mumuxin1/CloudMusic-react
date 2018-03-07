import React from 'react';
import '../css/user_left.css'
import imgsrc from '../images/c_head.jpg';
import '../iconfont/iconfont.css'
import $ from 'jquery'
class Xuser_left extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			name:'陨落星际',
			level:'Lv.8',
			bool:false,
			state:'签到'
		}
		this.qiandao = this.qiandao.bind(this)
		this.hide = this.hide.bind(this)
	}
	render(){
		return (
			<div id="c_bigbox">
				<div id="modal" onClick={this.hide}></div>
				<div id="c_left">
					<header className="c_head">
						<img src={imgsrc} className="c_tou"/>
						<div className="c_box">
							<div className="c_uname">
								<span>{this.state.name}</span>
								<i>{this.state.level}</i>
							</div>
							<div onClick={this.qiandao} className="qiandao">
								{this.state.state}
							</div>
						</div>
					</header>
					<ul>
						<li>
							<i className="iconfont icon-buoumaotubiao48"></i>
							<a>我的消息</a>
						</li>
						<li>
							<i className="iconfont icon-yinle101"></i>
							<a>在线听歌免流量</a>
						</li>
						<li>
							<i className="iconfont icon-qunzu"></i>
							<a>我的好友</a>
						</li>
					</ul>
					<ul>
						<li>
							<i className="iconfont icon-qunzu"></i>
							<a>我的好友</a>
						</li>
						<li>
							<i className="iconfont icon-music"></i>
							<a>听歌识曲</a>
						</li>
					</ul>
				</div>
			</div>
		)
	}
	qiandao(){
		this.setState({
			state:'已签到'
		})
	}
	hide(){
		this.setState({
			bool:true
		})
	}
	componentDidMount(){
		console.log(this)
	}
	componentDidUpdate(){
		//show  or   hide
		if(this.state.bool==true){
			$('#c_left').animate({
				left:'-82%'
			},500)
			$('#modal').css({
				display:'none'
			})
		}else{
			$('#c_left').animate({
				left:'0%'
			},500)
			$('#modal').css({
				display:'block'
			})
		}
	}
}
export default Xuser_left;
