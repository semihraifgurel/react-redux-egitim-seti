import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser, getUsers } from './actions/users-actions';

class App extends Component {
	constructor(props) {
		super(props);
		this.onUpdateUser = this.onUpdateUser.bind(this);
	}

	onUpdateUser(){
		this.props.onUpdateUser('Ahmet');
	}

	componentDidMount() {
		this.props.onGetUsers();
	}

	render() {
		console.log(this.props);
		return (
			<div className="App">

				<h2>{  this.props.user }</h2>
				<h2>{  this.props.user }</h2>
				<button onClick={this.onUpdateUser}>Change the name</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		...state
	};
};

const mapDispatchToProps = {
	onUpdateUser: updateUser,
	onGetUsers: getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);