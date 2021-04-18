import React, { useState, useEffect, Suspense } from 'react';
const eventSource = new EventSource('http://localhost:8888/events');
console.log(eventSource);

// eventSource.addEventListener('myEvent', (e)=>{
//     console.log(e);

// })
eventSource.onerror = function(err) {
	console.error('EventSource failed:', err);
};

function onClickButton() {
	eventSource.close();
}

export default function GetServerEvents() {
	// const event = '';
	const [ event, setEvent ] = useState('');
	eventSource.onmessage = function(e) {
		// setEvent(e.data);
		console.log('hey');
		console.log(e.data);
		setEvent(e.data);
	};
	return (
		<div>
			This is event {event}
			<button onClick={onClickButton}> Click to stop</button>
		</div>
	);
}
