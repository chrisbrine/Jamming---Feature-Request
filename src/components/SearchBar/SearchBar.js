import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: '',
		};
		this.onChange = this.onChange.bind(this);
		this.onClick = this.onClick.bind(this);
		this.handleEnter = this.handleEnter.bind(this);
	}
	onChange(event) {
		this.setState({
			searchInput: event.target.value,
		});
	}
	onClick() {
		this.props.onClick(this.state.searchInput);
	}
	handleEnter(event) {
		if (event.keyCode === 13) {
			this.props.onClick(this.state.searchInput);
		}
	}
	render() {
		return (
			<div className="SearchBar">
				<input 
					type="text" 
					onKeyDown={this.handleEnter} 
					onChange={this.onChange} 
					placeholder="Enter A Song, Album, or Artist" 
				/>
          		<a 
          			onClick={this.onClick}
          		>
          			SEARCH
          		</a>
			</div>
		);
	}
}

export default SearchBar;