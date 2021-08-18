/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { renderer } from './renderer';
import { fontSizeConverter, keys, omit, pick, shuffle } from './utils';

const handlersPropNames = [
	'onClick',
	'onDoubleClick',
	'onMouseMove',
	'onMouseOver',
	'onMouseOut',
];
const cloudPropNames = [
	'words',
	'shuffle',
	'renderer',
	'maxSize',
	'minSize',
	'colorOptions',
	'disableRandomColor',
	'randomNumberGenerator',
];

function generateColor(word, { disableRandomColor, colorsList }) {
	if (colorsList) {
		const list = shuffle(colorsList);
		return list[0];
	}
	if (word.color) {
		return word.color;
	}
	if (disableRandomColor) {
		return undefined;
	}
	return '#000';
}

function withTagCloudHandlers(elem, word, cloudHandlers) {
	const origHandlers = pick(elem.props, handlersPropNames);
	const props = keys(cloudHandlers).reduce((acc, handlerName) => {
		acc[handlerName] = (e) => {
			cloudHandlers[handlerName] && cloudHandlers[handlerName](word, e);
			origHandlers[handlerName] && origHandlers(e);
		};
		return acc;
	}, {});
	return React.cloneElement(elem, props);
}

function renderWords(props, data) {
	const { minSize, maxSize } = props;
	const counts = data.map(({ word }) => word.count);
	const min = Math.min(...counts);
	const max = Math.max(...counts);
	const cloudHandlers = pick(props, handlersPropNames);
	return data.map(({ word, color }) => {
		const fontSize = fontSizeConverter(word.count, min, max, minSize, maxSize);
		const elem = props.renderer(word, fontSize, color);
		return withTagCloudHandlers(elem, word, cloudHandlers);
	});
}

function randomize(props) {
	const { words, randomNumberGenerator } = props;
	// eslint-disable-next-line no-console
	console.log(words);
	const data = words.map((word) => ({
		word,
		color: generateColor(word, props),
	}));
	return shuffle ? shuffle(data, { rng: randomNumberGenerator }) : data;
}

export const WordCloud = (props) => {
	const [data, setData] = useState([]);
	// eslint-disable-next-line no-console
	console.log(props);
	const { words, colorOptions, disableRandomColor } = props;
	const wordsComparison = words.map((t) => t.key || t.value).join(':');

	useEffect(() => {
		setData(randomize(props));
	}, [props, colorOptions, shuffle, disableRandomColor, wordsComparison]);
	const other = omit(props, [...cloudPropNames, ...handlersPropNames]);

	return <div {...other}>{renderWords(props, data)}</div>;
};

WordCloud.propTypes = {
	words: PropTypes.arrayOf(PropTypes.string).isRequired,
	maxSize: PropTypes.number.isRequired,
	minSize: PropTypes.number.isRequired,
	width: PropTypes.number.isRequired,
	height: PropTypes.number.isRequired,
	shuffle: PropTypes.bool,
	colorsList: PropTypes.arrayOf(PropTypes.number),
	colorOptions: PropTypes.arrayOf(PropTypes.string),
	disableRandomColor: PropTypes.bool,
	renderer: PropTypes.func,
	className: PropTypes.string,
	randomNumberGenerator: PropTypes.func,
};

WordCloud.defaultProps = {
	renderer,
	shuffle: true,
	className: 'tag-cloud',
	colorsList: [],
	colorOptions: [],
	disableRandomColor: false,
	randomNumberGenerator: () => {},
};
