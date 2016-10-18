import React from 'react';
import ReactDom from 'react-dom';

var NewTemp = React.createClass({
	getInitialState: function(){
		return {
			name: 'comlewod'
		};
	},
	handleClick: function(){
		this.setProps({
			name: 'koala'
		});
	},
	render: function(){
		return (
		<div onClick={this.handleClick}>
			<Name name={this.props.name} />
		</div>
		);
	},
});

var Name = React.createClass({
	render: function(){
		return (
			<div>{this.props.name}</div>
		);
	}
});

ReactDom.render(
	<NewTemp name="comlewod"></NewTemp>,
	document.getElementById('wrap_header')
);

