//import logo from './logo.svg';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import  "./firebase.js";
import CoursePage from "./components/courses/CoursePage";

function App() {

  //const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/1ZA3" element={
            <CoursePage title = 'MATH1ZA3' id = '1ZA3'/>
          } />

          <Route path="/1ZB3" element={
            <CoursePage title = 'MATH1ZB3' id = '1ZB3'/>
          } />

          <Route path="/1ZC3" element={
            <CoursePage title = 'MATH1ZC3' id = '1ZC3'/>
          } />

          <Route path="/2Z03" element={
            <CoursePage title = 'MATH2Z03' id = '2Z03'/>
          } />

          <Route path="/2ZZ3" element={
            <CoursePage title = 'MATH2ZZ3' id = '2ZZ3'/>
          } />

          <Route path="/3Z03" element={
            <CoursePage title = 'MATH3Z03' id = '3Z03'/>
          } />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}




export default App;
