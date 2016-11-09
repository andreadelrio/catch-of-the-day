import React from 'react';

class StorePicker extends React.Component {
	render() {
		return (
			<form className="store-selector">
				<h2>Please enter store</h2>
				<input type="text" required placeholder="Store name" />
				<img src="" alt=""/>
				<button type="submit">Visit Store</button>
			</form>
		)
	}
}

export default StorePicker;
	