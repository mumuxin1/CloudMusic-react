import React from 'react';
import '../css/xdynamic.css'
import imgsrc from '../images/c_head.jpg';
class Xdynamic extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			list:[{name:'陈一发儿',date:'2017年10月9日',info:'今天大家都上班了吧，十一假期还玩的开心吗'},{name:'陈海超',date:'2018年1月30日',info:'hello wolrd!'}]
		}
	}
	
	render(){
		return (
			<div id="c_list" >
				<div id="c_dynamic">最新动态<span>></span></div>
				<ul>
					{function(that){
						return that.state.list.map(function(ele,index){
							return (
								<li key={index}>
									<img src={imgsrc}/>
									<div className="dy">
										<h6>{ele.name}</h6>
										<p>{ele.date}</p>
										<p>{ele.info}</p>
									</div>
								</li>
							)
						})
					}(this)}
				</ul>
			</div>
		)
	}
}
export default Xdynamic;