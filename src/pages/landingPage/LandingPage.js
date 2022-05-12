import './LandingPage.css';

export default function LandingPage() {
	return (
		<div className="main-container">
			{Array(7)
				.fill('')
				.map((_, i) => (
					<div key={i} className={i === 0 ? 'main-container__item--main' : ''}>
						item!
					</div>
				))}
		</div>
	);
}
