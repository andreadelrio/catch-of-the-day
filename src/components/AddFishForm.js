import React from 'react';

class AddFishForm extends React.Component {
  createFish(event) {
    event.preventDefault();
    console.log('gonna make fish');
    const fish = {
      name: this.name.value,
      price: this.price.value,
    }
    this.props.addFish(fish);
    this.fishForm.reset();
  }

	render() {
		return (
			<form ref={(input) => this.fishForm = input} className="fish-edit" onSubmit={(e) => this.createFish(e)}>
        <input ref={(input) => this.name = input} type="text" placeholder="Fish Name"/>
        <input ref={(input) => this.price = input} type="text" placeholder="Fish Price"/>
        <button type="submit">+ item</button>
      </form>
		)
	}
}

export default AddFishForm;
	