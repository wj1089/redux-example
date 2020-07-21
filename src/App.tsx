import React from 'react';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
// import Counter from "./pages/Counter";
import Member from './pages/Member'
import Greeting from "./components/Greeting";
import Signin from "./components/Signin";
import SignTest from "./components/SigninTest";
import HideTest from "./components/HideTest";
import CounterComponent from "./counter/CounterComponent";
import CounterContainer from "./counter/CounterContainer";
import TodoContainer from "./todos/TodosContainer";

const App = () => <div className="App">
  <TodoContainer/>
</div>

export default App;