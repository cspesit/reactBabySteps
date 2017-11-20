import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBoxComponent from '../components/HomePage'

const mapStateToProps = (state) =>{
	return{

	}
}

const mapDispatchToProps = (dispatch) =>{
	return{	

		searchProduct: function(value){
		}

	}
}

const SearchBoxContainer = connect (
	 mapStateToProps,
  	 mapDispatchToProps
)(SearchBoxComponent);

export default SearchBoxContainer;