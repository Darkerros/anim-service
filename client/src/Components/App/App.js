import './App.css';
import Modal from "../Modal/Modal";
import {useEffect} from "react";
import Api from "../../api/Api";


function App() {
    useEffect(() => {
        const api = new Api()
        api.getAllTags().then(data => console.log(data))
    },[])
  return (
    <div className="App">
        <Modal/>
    </div>
  );
}

export default App;
