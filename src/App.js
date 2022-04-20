import "./styles/styleModules/style.css";
import "./Fonts/stylesheet.css";
import CartContext from "./Context/Context";

import RouteSeperater from "./routes";

function App() {
  return (
    <>
      <CartContext>{value => <RouteSeperater />}</CartContext>
    </>
  );
}

export default App;
