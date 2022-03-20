import { useEffect, useState } from "react";
import { useSelector, useDispatch  } from "react-redux";
import { action } from "./api/redux/action";
import CardContainer from "./components/container/CardContainer";
import Filter from "./components/filter/Filter";
import Layout from "./components/layout/Layout";

function App() {
  const dispatch = useDispatch()
  const { characters } = useSelector(e => e.characters)
  const [actualCharacters, setActualCharacters] = useState([])
  const [actualOpt, setActualOpt] = useState("")

  const target = {
    "ESTUDIANTES" : () => setActualCharacters(characters.filter( e => e.hogwartsStudent)),
    "STAFF": () => setActualCharacters(characters.filter( e => e.hogwartsStaff)),
    "ALL": () => setActualCharacters(characters),
  }

  useEffect(() => {
    dispatch(action.getCharacters())
  },[dispatch])

  useEffect(() => {
    if(characters){
      target["ALL"]()
    }
  },[characters])

  const handleClick = (e) => {
    if(e.target.id !== actualOpt){
      target[e.target.id]();
      setActualOpt(e.target.id)
    }else {
      target["ALL"]()
      setActualOpt(null)
    }
  }

  return (
    <div className="App">
      <Layout>
        <Filter handleClick={handleClick} actualOpt={actualOpt}/>
        <CardContainer characters={actualCharacters}/>
      </Layout>
    </div>
  );
}

export default App;
