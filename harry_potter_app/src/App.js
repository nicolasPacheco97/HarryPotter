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

  useEffect(() => {
    dispatch(action.getCharacters())
  },[dispatch])

  useEffect(() => {
    if(characters){
      setActualCharacters(characters)
    }
  },[characters])

  return (
    <div className="App">
      <Layout>
        <Filter/>
        <CardContainer characters={actualCharacters}/>
      </Layout>
    </div>
  );
}

export default App;
