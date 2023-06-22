import "./App.scss";
import Page from "./pages/Home";
import {DataProvider} from "./containers/context/index";

function App() {
  return (
    <DataProvider>
      <Page />
    </DataProvider>
  );
}

export default App;
