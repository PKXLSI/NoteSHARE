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
          <Route path="/2PX3" element={
            <CoursePage title = 'ENGINEER 2PX3' id = '2PX3'/>
          } />
           <Route path="/2AA4" element={
            <CoursePage title = 'SFWRENG 2AA4' id = '2AA4'/>
          } />
          <Route path="/2C03" element={
            <CoursePage title = 'SFWRENG 2C03' id = '2C03'/>
          } />
          <Route path="/2DA4" element={
            <CoursePage title = 'SFWRENG 2DA4' id = '2DA4'/>
          } />
          <Route path="/3PX3" element={
            <CoursePage title = 'ENGINEER 3PX3' id = '3PX3'/>
          } />
          <Route path="/2DM3" element={
            <CoursePage title = 'SFWRENG 2DM3' id = '2DM3'/>
          } />
          <Route path="/2GA3" element={
            <CoursePage title = 'SFWRENG 2GA3' id = '2GA3'/>
          } />
          <Route path="/2OP3" element={
            <CoursePage title = 'SFWRENG 2OP3' id = '2OP3'/>
          } />
          <Route path="/2XC3" element={
            <CoursePage title = 'SFWRENG 2XC3' id = '2XC3'/>
          } />
          <Route path="/3Y03" element={
            <CoursePage title = 'STATS 3Y03' id = '3Y03'/>
          } />
          <Route path="/3A04" element={
            <CoursePage title = 'SFWRENG 3A04' id = '3A04'/>
          } />
          <Route path="/3BB4" element={
            <CoursePage title = 'SFWRENG 3BB4' id = '3BB4'/>
          } />
          <Route path="/3DB3" element={
            <CoursePage title = 'SFWRENG 3DB3' id = '3DB3'/>
          } />
          <Route path="/3DX4" element={
            <CoursePage title = 'SFWRENG 3DX4' id = '3DX4'/>
          } />
          <Route path="/3MX3" element={
            <CoursePage title = 'SFWRENG 3MX3' id = '3MX3'/>
          } />
          <Route path="/3O03" element={
            <CoursePage title = 'SFWRENG 3O03' id = '3O03'/>
          } />
          <Route path="/3RA3" element={
            <CoursePage title = 'SFWRENG 3RA3' id = '3RA3'/>
          } />
          <Route path="/3S03" element={
            <CoursePage title = 'SFWRENG 3S03' id = '3S03'/>
          } />
          <Route path="/3XB3" element={
            <CoursePage title = 'SFWRENG 3XB3' id = '3XB3'/>
          } />
          <Route path="/4X03" element={
            <CoursePage title = 'SFWRENG 4X03' id = '4X03'/>
          } />
          <Route path="/4A03" element={
            <CoursePage title = 'ENGINEER 4A03' id = '4A03'/>
          } />
          <Route path="/4AA4" element={
            <CoursePage title = 'SFWRENG 4AA4' id = '4AA4'/>
          } />
          <Route path="/4C03" element={
            <CoursePage title = 'SFWRENG 4C03' id = '4C03'/>
          } />
          <Route path="/4E03" element={
            <CoursePage title = 'SFWRENG 4E03' id = '4E03'/>
          } />
          <Route path="/4G06" element={
            <CoursePage title = 'SFWRENG 4G06' id = '4G06'/>
          } />
          <Route path="/4HC3" element={
            <CoursePage title = 'SFWRENG 4HC3' id = '4HC3'/>
          } />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}




export default App;
