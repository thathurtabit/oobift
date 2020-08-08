import { h, Component } from 'preact';
import style from './style';

const oobLC = 'oob';
const oobUC = 'Oob';
const initName = '...';

class Home extends Component {
	state = {value: initName, oobifiedName: initName};

	getOobifiedName = (name) => name.replace(/[0-9]/g, '').replace(/[sean]/g, oobLC).replace(/[SEAN]/g, oobUC);

	onInput = e => {
		const { value } = e.target;
		const oobifiedName = this.getOobifiedName(value);
		this.setState({ value, oobifiedName })
	}

	fallbackPlaceholder = (name) => name === initName ? 'Enter your name' : name;
	fallbackInput = (name) => name === initName ? '' : name;
	

	render(_, {oobifiedName, value}) {
		return (
			<div class={style.home}>
			<h1>Replaces the letters S, E, A and N with <strong>Oob</strong></h1>
			<h2>{oobifiedName}</h2>
			<input placeholder={this.fallbackPlaceholder(oobifiedName)} value={this.fallbackInput(value)} onInput={this.onInput} />

			<div class={style.takenfrom}>Taken from <a href="https://twitter.com/SeanAndTheSeans/status/1291471093581205505" target="_blank" rel="noreferrer">this tweet</a></div>
		</div>
		)
	 }
}

export default Home;
