import React from 'react';
import './index.scss';
import { Provider } from 'react-redux';

import store from './redux/store';
import Game from './components/game';

export default class AnimalCollector extends Component {

	static propTypes = {
		store: PropTypes.object
	}

	constructor(props) {
		super(props);

		this.state = {
			...props
		}

		initStore(this.state.store);
	}

	componentDidMount() {
		this.unsubscribe = this.state.store.subscribe(() =>
			saveToLocalStorage(this.state.store.getState()));
	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return (
			<Provider store={this.state.store}>
				<div id="root-animalcollector">
					<Game />
				</div>
			</Provider>
		);
	}
}
