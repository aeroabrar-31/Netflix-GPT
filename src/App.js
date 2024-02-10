import { Provider } from "react-redux";
import "./App.css";
import Body from "./Components/Body";
import appStore from "./utils/appstore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
