import React, {Component} from 'react';
import TextBox from './common/TextBox';
import SearchBtn from './common/SearchButton';
import SearchBoxStyles from './styles/SearchBoxStyle.css';
const SearchBox = (props) =>{

	return(	
			<div className={SearchBoxStyles.searchComponent}>
				<div className={SearchBoxStyles.textBox}>
					<TextBox 
					clickActualValue = {props.clickActualValue}
					onSuggestionsValue={props.onSuggestionsValue}/>
				</div>
				<div className={SearchBoxStyles.searchBtn}>
				<SearchBtn click={props.click}/>
				</div>
			</div>
		)

}

export default SearchBox;