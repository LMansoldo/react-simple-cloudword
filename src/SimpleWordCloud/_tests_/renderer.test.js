import { render } from '../../tests';
import { renderer } from '../renderer';

describe('defaultRenderer', () => {
	it('should render tag', () => {
		const word = renderer(
			{ value: 'word1', key: 'key1', count: 33 },
			18,
			'red'
		);
		const container = render(word);
		expect(container).toMatchSnapshot();
	});
});
