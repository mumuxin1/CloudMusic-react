import React from 'react'
import '../css/hcollection.css'
import '../iconfont/iconfont.css'
import imgsrc from '../images/c_head.jpg'
class Hcollection extends React.Component {
		constructor(props) {
			super(props);
		}
		render() {
			return(
				<div id="minelist">
			<ul id="mine">
				<li>
					<a href="javascript:"><i className="iconfont icon-yinyue"></i>
						<div><span>本地音乐</span><b>(13)</b></div>
					</a>
				</li>
				<li>
					<a href="javascript:"><i className="iconfont icon-iconset0481"></i>
						<div><span>最近播放</span><b>(98)</b></div>
					</a>
				</li>
				<li>
					<a href="javascript:"><i className="iconfont icon-xiazai2"></i>
						<div><span>下载管理</span><b>(13)</b></div>
					</a>
				</li>
				<li>
					<a href="javascript:"><i className="iconfont icon-icon--"></i>
						<div><span>我的电台</span><b>(0)</b></div>
					</a>
				</li>
				<li>
					<a href="javascript:"><i className="iconfont icon-qunzu"></i>
						<div><span>我的收藏</span><b>(专辑/歌手/视频/专栏)</b></div>
					</a>
				</li>
			</ul>
			<div className="title"><i></i>创建的歌单(1)</div>
			<ul id="newmusiclist" className="list">
				<li id="love">
					<a href="javascript:">
						<div className="pic">
							<i className="iconfont icon-xin"></i>
						</div>
						<div className="musiclist">
							<h6 className="mlname">我喜欢的音乐</h6>
							<p className="mlnum">96首，已下载87首</p>
						</div>
					</a>
				</li>
			</ul>
			<div className="title"><i></i>收藏的歌单(1)</div>
			<ul id="collection" className="list">
				<li>
					<div className="pic"></div>
					<div className="musiclist">
						<h6 className="mlname"></h6>
						<p className="mlnum"></p>
					</div>
					<a href="javascript:"></a>
				</li>
			</ul>
		</div>
			)
		}
	}
		export default Hcollection;