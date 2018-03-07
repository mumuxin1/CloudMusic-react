import React from "react";
import Xheader from "../index/xheader.jsx";
import Xbanner from "../index/xbanner.jsx";
import Xlist from "../index/xlist.jsx";
import Xbottom from "../index/bottom.jsx";
class Xindex extends React.Component {
	constructor(props) {
    super(props);
  }
  render(){
    return(
         <div>
	          <Xheader/>
	          <Xbanner/>
	          <Xlist/>
	          <Xbottom/>
          </div>
    )
  }

}
export default Xindex;