import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AddTask from './Pages/addTask/AddTask';
import Home from './Pages/Home/Home';
import EditTask from './Pages/editTask/EditTask';
import SingleTask from './Pages/singleTask/SingleTask';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path='/' element={<Home  />}/>
            <Route path='/addtask' element={<AddTask  />}/>
            <Route path='/edittask' element={<EditTask  />}/>
            <Route path='/gettask/:id' element={<SingleTask  />}/>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
