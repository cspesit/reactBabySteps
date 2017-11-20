import React from 'react';
import MainStyle from '../css/main.css';
const EHeader = (props) => {
	
	return(
				<div className={MainStyle.dropdownContainer}>
					 <button className={MainStyle.dropdownBtn}><img src="../images/mainmenu.png"/></button>
					 <div className={MainStyle.dropdownContent}>
						<a>Link1</a>
						<a>Link2</a>
					 </div>
					 <div className={MainStyle.backBtnStyle}>
					 	<input type="button" name="backbtndesgin" onClick={props.clickbackbtn} value="Back"/>
					 </div>
				</div>
		)
}

export default EHeader;