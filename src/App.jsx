import "bootstrap/dist/css/bootstrap.min.css";
import "./style/app.css";
import { MyContext } from "./context";
import { useContext } from "react";

import Stage1 from "./components/stage_one";
import Stage2 from "./components/stage_two";

const App = () => {
  const context = useContext(MyContext);
  return (
    <div className="wrapper">
      <div className="center-wrapper">
        <h1> مين يدفع الفاتورة ؟</h1>

        {context.stage === 1 ?
        
        <Stage1 />
         :
         <Stage2 />}
      </div>
    </div>
  );
};

export default App;
