import React, { Component } from 'react';

import './todo-list-item.css';


export default class TodoListItem extends Component {

	state = {
		done: false,
		important: false
	};

	// constructor() {
	// 	super();

	// 	this.onLabelClick = () => {
	// 		console.log(`Done: ${this.props.label}`)
	// 	}
	// } старый подход!
	onLabelClick = () => {
		this.setState(({done}) => {  // setState состояние этого компонента изменилось!
			return {
				done: !done
			};
		});
	};

	constructor() {
		super();

		this.onMarkImportant = () => {
			this.setState(({important}) => {
				return {
					important: !important
				};
			});
		}
	}


	render() {
		const { label } = this.props; //! props - представляет коллекцию значений, которые ассоциированы с компонентом. Эти значения позволяют создавать динамические компоненты, которые не зависят от жестко закодированных статических данных.
		const { done, important } = this.state;

		let className = "todo-list-item";

		// Добавляет события.
		if (done) {
			className += ' done';
		}

		if (important) {
			className += ' important';
		}

		return (
			<span className={className}>
				<span
					className="todo-list-item-label"
					onClick={this.onLabelClick}>
					{label}
				</span>

				<button type="button"
					className="btn btn-outline-success btn-sm float-right"
					onClick={this.onMarkImportant}>
					<i className="fa fa-exclamation" />
				</button>

				<button type="button"
					className="btn btn-outline-danger btn-sm float-right">
					<i className="fa fa-trash-o" />
				</button>
			</span>
		);
	}
};
