import React from 'react';
import $ from 'jquery'

import '../../css/hplay.css'
import '../../iconfont/iconfont.css'

import loop from '../../images/loop.png'
import previous from '../../images/previous.png'
import play from '../../images/play.png'
import next from '../../images/next.png'
import list from '../../images/list.png'
import pause from '../../images/pause.png'

class Hplay extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			playstatu: false,
			musictime: 0,
			playtime: "00:00",
			myaudio: './test.mp3',
			timer: ''
		}
		this.play = this.play.bind(this);
	}

	componentDidMount() {
		this.musictime()
	}
	//时间转格式
	time(timestamp) {
		var minutes = Math.floor(timestamp / 60);
		var seconds = Math.floor(timestamp - (minutes * 60));

		if(seconds < 10) {
			seconds = '0' + seconds;
		}
		if(minutes < 10) {
			minutes = '0' + minutes;
		}
		timestamp = minutes + ':' + seconds;
		return timestamp;
	}
	//总时长
	musictime() {
		var player = document.getElementById("audio")
		var self = this
		setTimeout(function() {
			var musictime = player.duration
			if(isNaN(musictime)) {
				self.musictime();
			} else {
				self.setState({
					musictime: self.time(player.duration)
				})
			}
		}, 10);

	}
	//播放时间
	playedtime() {
		var player = document.getElementById("audio")
		var self = this;
		this.state.timer = setInterval(function() {
			self.setState({
				playtime: self.time(player.currentTime)
			})
		}, 300)
	}
	//进度条
	
	//控制播放
	play() {
		var player = document.getElementById("audio")
		this.setState({
			playstatu: !this.state.playstatu
		})
		if(!this.state.playstatu) {
			player.play();
			this.playedtime()
		} else {
			player.pause();
			clearInterval(this.state.timer)
		}
	}
	render() {
		return(
			<div id="hplay">
			<header>
				<div className="box">
					<a href="javascript:">←</a>
					<div id="music">
						<p className="mname">剩下了自己</p>
						<p className="singer">张韶涵</p>
					</div>
				</div>
				<div className="iconfont icon-iconfontzhizuobiaozhun20
 fenxiang"></div>
			</header>
			<div className="content">
				<audio src={this.state.myaudio} id="audio"></audio>
				<div className="pic">
					<img src=""/>
				</div>
				<ul>
					<li>
						<a href="javascript:" className="iconfont icon-xin"></a>
					</li>
					<li>
						<a href="javascript:" className="iconfont icon-xiazai2"></a>
					</li>
					<li>
						<a href="javascript:" className="iconfont icon-buoumaotubiao48"></a>
					</li>
					<li>
						<a href="javascript:" className="iconfont icon-gengduo-shuxiang"></a>
					</li>
				</ul>
			</div>
			<div id="time">
				<span className="time">{this.state.playtime}</span>
				<div className="tiao"><span></span></div>
				<span className="time">{this.state.musictime}</span>
			</div>
			<footer>
				<ul>
					<li><a href="javascript:"><img src={loop} className="loop"/></a></li>
					<li><a href="javascript:"><img src={previous} className="previous"/></a></li>
					<li><a href="javascript:"><img src={this.state.playstatu?pause:play} className="play" onClick={this.play}/></a></li>
					<li><a href="javascript:"><img src={next} className="next"/></a></li>
					<li><a href="javascript:"><img src={list} className="list"/></a></li>
				</ul>
			</footer>
		</div>
		)
	}
}
export default Hplay;