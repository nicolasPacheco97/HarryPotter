import CardContainer from "./components/container/CardContainer";
import Filter from "./components/filter/Filter";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Filter/>
        <CardContainer />
      </Layout>
    </div>
  );
}

export default App;
