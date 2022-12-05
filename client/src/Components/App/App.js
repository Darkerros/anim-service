import './App.css';
import Modal from "../Modal/Modal";
import {useEffect} from "react";
import {addTag, getAllTags} from "../../api/tagApi";
import {GET_ALL_TAGS_ENDPOINT} from "../../api/endpoints";



function App() {
    useEffect(() => {
        getAllTags().then(data => console.log(data))
        addTag("karma").then(data => console.log(data))
    },[])
  return (
    <div className="App">
        <Modal/>
    </div>
  );
}

export default App;
