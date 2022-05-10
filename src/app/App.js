import Router from '../router/ReactRouter';
import { Provider } from 'react-redux';
import store from './../store/store';

function App() {
	return (
		<Provider store={store}>
			<Router />
		</Provider>
	);
}

export default App;
