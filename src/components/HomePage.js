import React, {Component} from 'react';
import Content from './layout/Content';
import SeachBox from './SearchBox';
import ProductJSON from './json/products.json';
import SearchResults from './SearchResults';
import SeachBoxStyles from './styles/SearchBoxStyle.css'
class HomePage extends Component{
	constructor(){
		super();
		this.getSelectedProduct = this.getSelectedProduct.bind(this);
		this.clickButton = this.clickButton.bind(this);
		this.backbtn = this.backbtn.bind(this);
		this.onSuggestionsValue = this.onSuggestionsValue.bind(this);
		this.clickActualValue = this.clickActualValue.bind(this);
		this.state={
			textValue : '',
			result : true
		}
	}
	clickActualValue(value){
		this.setState({textValue: value});
	}
	onSuggestionsValue(value){
		this.setState({textValue : value});
	}
	getSelectedProduct(value, index, array){
		let returnValue = false;
		if(value.productName.includes(this.state.textValue)){
			returnValue = true;
		}
		return returnValue;
	}
	clickButton(){
		this.setState({result : false});
	}
	backbtn(){
		this.setState({result:true});
		this.setState({textValue : ''});
	}

	render(){
		let product, view, message;
		if(this.state.result){
			view = (<Content clickbackbtn={this.backbtn} body={<SeachBox 
							onSuggestionsValue = {this.onSuggestionsValue}
							clickActualValue = {this.clickActualValue}
							click={this.clickButton}/>} />);
		}else{
			if(this.state.textValue.length > 0){
				product = ProductJSON.productsList.filter(this.getSelectedProduct);
				if(product.length === 0){
					view = (<Content clickbackbtn={this.backbtn} body={<div className={SeachBoxStyles.noresult}>No Results Found</div>} />);
				}
			}else{
				product = ProductJSON.productsList;
			}	
				if(product.length > 0)
					view = (<Content clickbackbtn={this.backbtn} body={<SearchResults product = {product}/>}/>);
		}
		return(
			<div>
				{view}
			</div>
			)		
	}

}

export default HomePage;