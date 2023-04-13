import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Home from './Home';
import NotFound from './NotFound';
import About from './About';
import Contacts from './Contacts';
import MainLayout from './layouts/MainLayout';
import Courses from './Courses';
import SingleCourse from './SingleCourse';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
            <Route path='*' element={<NotFound/>}/>
            <Route path='about' element={<About/>}/>
            <Route path='contacts' element={<Contacts/>}/>
            <Route path='courses' element={<Courses/>}/>
            <Route path='courses/:slug' element={<SingleCourse/>}/>
            {/*<Route path='courses/:slug/:lang' element={<SingleCourse/>}/>*/}
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

