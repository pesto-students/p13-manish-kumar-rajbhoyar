import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Skills from './components/Skills';
import Blogs from './components/blogs/Blogs'
import Navbar from './components/NavBar';
import ProjectDetails from './components/ProjectDetails';
import BlogDetails from './components/blogs/BlogDetails';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
          <Routes>
              <Route
                  path="/"
                  element={<Home />}
              ></Route>
              <Route
                  path="/projects"
                  element={<Projects />}
              ></Route>
              <Route
                  path="/projects/:projectId"
                  element={<ProjectDetails />}
              ></Route>
              <Route
                  path="/contact"
                  element={<Contact />}
              ></Route>
              <Route
                  path="/skills"
                  element={<Skills />}
              ></Route>
              <Route
                  path="/blogs"
                  element={<Blogs />}
              ></Route>
              <Route
                  path="/blogs/:blogId"
                  element={<BlogDetails />}
              ></Route>
          </Routes>
      </div>
      </>
  );
}

export default App;
