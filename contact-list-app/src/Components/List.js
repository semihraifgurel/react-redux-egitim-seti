import React, {Component} from 'react';
import PropTypes from 'prop-types';

class List extends Component {
	static propTypes = {
		contacts: PropTypes.array.isRequired
	};

	state = {
		filterText: ''
	};

	onChangeFilterText = (e) => {
		this.setState({filterText: e.target.value})
	};

	render() {
		const filteredContacts = this.props.contacts.filter(contact => {
			return contact.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !== -1
		});

		return (<div className={"listArea"}>
			<input value={this.state.filterText} onChange={this.onChangeFilterText} name={"filter"} id={"filter"} placeholder={"Filter by name or phone"}/>

			<ul className={"list"}>
				{
					filteredContacts.map(contact => <li key={contact.phone}>
						<div className="d-flex jcb">
							<div className={"name"}>{contact.name}</div>
							<div className={"phone"}>{contact.phone}</div>
						</div>
					</li>)
				}
			</ul>
		</div>);
	}
}

export default List;
