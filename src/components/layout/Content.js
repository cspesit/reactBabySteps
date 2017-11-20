import React, {Component} from 'react';
import EHeader from './EHeader';
import EFooter from './EFooter';
import ContentStyles from './styles/ContentStyles.css';
const Content = (props) =>{
	let template = (<div className={ContentStyles.mainWrapper}>
		<div className="EHeader">
			<EHeader clickbackbtn={props.clickbackbtn}/>
		</div>
		<div className={ContentStyles.bodyWrapper}>
			{props.body}
		</div>
		<div className={ContentStyles.EFooter}>
			<EFooter/>
		</div>
	</div>);

	return(template);
}

export default Content;