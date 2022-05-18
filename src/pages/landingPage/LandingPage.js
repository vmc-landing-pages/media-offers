import { Button } from 'vmc-react-js-components';
import './LandingPage.scss';

export default function LandingPage() {
	return (
		<div className="main-container">
			{Array(7)
				.fill('')
				.map((_, i) => (
					<div key={i} className={i === 0 ? 'main-container__item--main' : ''}>
						<Button size="medium" label="button" backgroundColor="red" />
						<br />
					</div>
				))}
		</div>
	);
}
