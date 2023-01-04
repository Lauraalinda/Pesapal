
import Header from "./components/Header";
import Sectionfour from "./components/Sectionfour";
import Sectionone from "./components/Sectionone";
import Sectionthree from "./components/Sectionthree";
import Sectiontwo from "./components/Sectiontwo";
import Calendar from "./components/Calendar";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"



function App() {
  
  return (
    <div>
      <Router>
        <Routes>
          
          <Route path="/calendar" element={<Calendar/>} />
        </Routes>
      </Router>

      <Header/>
      <Sectionone/>
      <Sectiontwo/>
      <Sectionthree/>
      <Sectionfour/>
      {/* <Calendar/> */}

    </div>
  )
}

export default App
