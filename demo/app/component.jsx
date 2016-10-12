import React from 'react';
import ReactDom from 'react-dom';

class Hello extends React.Component {
	render() {
		return <h1>Hello, comlewod</h1>;
	}
}

//ReactDom.render(<Hello />, document.getElementById('app'));

var arr = [
	'<div>123</div>',
	'<span>ahha</span>'
];

ReactDom.render(
	<div>
	{arr}
	</div>,
	document.getElementById('app')
);
