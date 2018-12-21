import React from 'react'
import ReactDOM from 'react-dom'
import './sass/styles.scss'
import App from './components/App'
import { createStore } from 'redux' 
import { Provider } from 'react-redux'
import reducers from './reducers'
import middleWare from './middleware'

const store = createStore(reducers, middleWare)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
