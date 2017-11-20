import React, {Component} from 'react';
import TextBoxStyles from './styles/TextBoxStyles.css'
class TextBox extends Component{

	constructor(props){
		super(props);
		
	}

	render(){
			let textBox = (<input type="text" id="searchBoxText" className={TextBoxStyles.searchBoxText} onChange={this.props.displayTextValue}/>);
			return(textBox);
	}
}

export default TextBox;