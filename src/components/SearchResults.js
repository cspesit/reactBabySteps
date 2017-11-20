import React from 'react';
import SearchResultsStyles from './styles/SearchResultsStyles.css'
const SearchResult = (props) =>{

	const valueTable = props.product.map(function(v, i){
		let dom = (	
				<div className={SearchResultsStyles.productContainer}>
					<div key={Math.random()}><input type="checkbox"/></div>
					<div key={i}>{v.productName}</div>
					<div key={i+1}>{v.description}</div>
					<div key={i+2}>{v.price}</div>
				</div>
			)
		return dom;
	});
	let columnLabels = (<div className={SearchResultsStyles.columnContainer}>
						<div> </div>
						<div> ProductName</div>
						<div> Description</div>
						<div> Price</div>
						</div>)
	return(
			<div className={SearchResultsStyles.productListContainer}>
			<div className="columnList">
				{columnLabels}
			</div>
			<div className="productList">
				{valueTable}
			</div>
			</div>
		)
}

export default SearchResult;