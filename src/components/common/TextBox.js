import React, {Component} from 'react';
import TextBoxStyles from './styles/TextBoxStyles.css'
import ProductJSON from '../json/products.json';
class TextBox extends Component{

	constructor(props){
		super(props);
		this.onSuggestionClick = this.onSuggestionClick.bind(this);
		this.displayTextValue = this.displayTextValue.bind(this);
		this.getSelectedProduct = this.getSelectedProduct.bind(this);
		this.state={
			suggestionvalue : '',
			autoSuggestData : [],
			actualValue : '',
			isSuggestion: true
		}
	}
	onSuggestionClick(value){
		this.setState({actualValue : value});
		this.setState({isSuggestion : false});
		this.props.onSuggestionsValue(value);
	}
	displayTextValue(e){
		this.state.actualValue = e.target.value;
		this.setState({autoSuggestData : ProductJSON.productsList.filter(this.getSelectedProduct)});
		this.props.clickActualValue(e.target.value);
	}
	getSelectedProduct(value, index, array){
		let returnValue = false;
		if(value.productName.includes(this.state.actualValue)){
			returnValue = true;
		}
		return returnValue;
	}
	render(){
		let result, _self=this;
		
		if(this.state.autoSuggestData.length > 0){
			result = this.state.autoSuggestData.map(function(value){
				return <div key={Math.random()} className="suggest" onClick={_self.onSuggestionClick.bind(_self, value.productName)}>{value.productName}</div>
			});
		}
			let textBox = (
					<div className="autoSuggestionsWrapper">
						<input type="text" id="searchBoxText" 
							   className={TextBoxStyles.searchBoxText} 
							   onChange={this.displayTextValue}
							   value={this.state.actualValue}/>
					<div className={this.state.isSuggestion ? TextBoxStyles.results : TextBoxStyles.noResults}>{result}</div>
					</div>);
			return(textBox);
	}
}

export default TextBox;