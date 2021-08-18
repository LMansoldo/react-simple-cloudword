import React from 'react';
import { WordCloud } from './SimpleWordCloud';

function App() {
	const cloudWords = [
		{ value: 'JavaScript', count: 300 },
		{ value: 'TypeScript', count: 200 },
		{ value: 'Express', count: 50 },
		{ value: 'MongoDB', count: 30 },
		{ value: 'PHP', count: 110 },
		{ value: 'React', count: 170 },
		{ value: 'Angular', count: 80 },
		{ value: 'Docker', count: 50 },
		{ value: 'GraphQL', count: 110 },
		{ value: 'NextJS', count: 30 },
		{ value: 'React Library', count: 80 },
		{ value: 'Vue', count: 40 },
		{ value: 'Gatsby', count: 70 },
	];

	return (
		<div className="App" style={{ textAlign: 'center', width: '500px' }}>
			<WordCloud
				minSize={20}
				maxSize={70}
				words={cloudWords}
				colorsList={['#5E01DC', '#414151', '#e2e2e2']}
			/>
		</div>
	);
}

export default App;
