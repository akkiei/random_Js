import React, { useState, useEffect, Suspense } from 'react';
import { Container, Card, Image } from 'semantic-ui-react';

function Cards() {
	const [ cards, setCards ] = useState([]);
	const [ count, setCount ] = useState(0);

	useEffect(
		() => {
			console.log('outside');

			async function getData() {
				console.log('inside');
				const URL = 'https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json';
				let resposne = await fetch(URL);
				let data = await resposne.json();
				setCards(data);
			}
			getData();
		},
		[ count ]
	);
	const cardArr = [];
	for (let i = 0; i < cards.length; i++) {
		cardArr.push(CardComponent(cards[i].Image, cards[i].name, cards[i].id));
	}

	return (
		<Suspense>
			<Container style={{ margin: 20 }}>
				<Card.Group>{cardArr}</Card.Group>
			</Container>
		</Suspense>
	);
}

function CardComponent(src, name, id) {
	const card = (
		<Card key={id}>
			<Card.Content>
				<Image src={src} width="200" height="200" />
				<Card.Header>{name}</Card.Header>
				<Card.Meta>{id}</Card.Meta>
			</Card.Content>
		</Card>
	);

	return card;
}

export default Cards;
