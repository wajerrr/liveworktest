import { connect } from 'react-redux';

import App from './App.jsx';
import {incrementValue, decrementValue} from './reducers/counter';

const mapStateToProps = (state) => ({
    balance: state.balance,
    name: state.name
});

const mapDispatchToProps = (dispatch) => ({
    increment: () =>  dispatch(incrementValue()),
    decrement: () => dispatch(decrementValue())
});

export default connect(mapStateToProps, mapDispatchToProps)(App)