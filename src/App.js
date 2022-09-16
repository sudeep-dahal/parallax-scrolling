import Imageone from "./components/Imageone";
import Imagetwo from "./components/Imagetwo";
import Imagethree from "./components/Imagethree";
import Textbox from "./components/Textbox";
import Horizontalscroll from "./components/Horizontalscroll";
import Test from "./components/Test"; 


function App() {
  return (
    <div className="App">
       <Test/>
       <Imageone/>
        <Textbox/>
        {/* <Horizontalscroll/> */}
        
       <Imagetwo/>
       <Textbox/>
       <Imagethree/>
       <Horizontalscroll/>
    </div>
  );
}

export default App;
