import "./App.css";
import CardData1 from "./component/CardData1";
import CardData2 from "./component/CardData2";
import CardData3 from "./component/CardData3";

function App() {
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          <CardData1 />
          <CardData2 />
          <CardData3 />
        </div>
      </div>
    </section>
  );
}

export default App;
