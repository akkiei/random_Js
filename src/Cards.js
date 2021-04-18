import React from 'react';
import { Container, Card, Image } from 'semantic-ui-react';
// import './App.css';

class Cards extends React.Component {
	constructor() {
		super();
		this.state = {
			data: []
		};
	}

	async componentDidMount() {
		const URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';
		let resposne = await fetch(URL);
		let data = await resposne.json();
		this.setState({ data: data });
	}
	CardGroup = () => {
		const cardArr = [];
		for (let i = 0; i < this.state.data.length; i++) {
			cardArr.push(this.CardComponent(this.state.data[i].Image, this.state.data[i].name, this.state.data[i].id));
		}

		return (
			<Container style={{ margin: 20 }}>
				<Card.Group>{cardArr}</Card.Group>
			</Container>
		);
	};

	CardComponent = (src, name, id) => {
		const card = (
			<Card>
				<Card.Content>
					<Image src={src} width="200" height="200" />
					<Card.Header>{name}</Card.Header>
					<Card.Meta>{id}</Card.Meta>
				</Card.Content>
			</Card>
		);

		return card;
	};

	render() {
		const flag = this.state.data.length == 0 ? true : false;
		console.log(flag);

		if (!flag) {
			return <div class="ui card">{this.CardGroup()}</div>;
		} else return <div>it is still loading</div>;
	}
}

export default Cards;
