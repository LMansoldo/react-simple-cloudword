/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
export function shuffle(array) {
	let currentIndex = array.length;
	let randomIndex;

	while (currentIndex !== 0) {
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex--;

		// eslint-disable-next-line no-param-reassign
		[array[currentIndex], array[randomIndex]] = [
			array[randomIndex],
			array[currentIndex],
		];
	}

	return array;
}

export const fontSizeConverter = (count, min, max, minSize, maxSize) => {
	if (max - min === 0) {
		return Math.round((minSize + maxSize) / 2);
	}
	return Math.round(
		((count - min) * (maxSize - minSize)) / (max - min) + minSize
	);
};

export const positionConverter = (width, height) => ({
	left: Math.floor(Math.random() * (width * 0.9)),
	top: Math.floor(Math.random() * (height * 0.6)),
});

export const omit = (obj, keys) =>
	Object.keys(obj).reduce((r, key) => {
		// eslint-disable-next-line no-bitwise
		if (!~keys.indexOf(key)) {
			r[key] = obj[key];
		}
		return r;
	}, {});

export function pick(obj, keys) {
	return keys.reduce((picked, key) => {
		picked[key] = obj[key];
		return picked;
	}, {});
}

export function keys(obj) {
	return Object.keys(obj);
}
