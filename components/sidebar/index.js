import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
});

const mapDispatchToProps = dispatch => ({
});

const SideBar = connect(
	mapStateToProps,
	mapDispatchToProps,
)(PSideBar);

SideBar.propTypes = {
	money: PropTypes.number
}

export default SideBar;

function PSideBar(props) {
	return (
		<div id="sidebar">
			sidebar
		</div>
	);
}