import './App.css';
import Home from './Home/Home'; 

function App(props) {
    return <Home initialData={props.initialData}/>
}

export default App;
