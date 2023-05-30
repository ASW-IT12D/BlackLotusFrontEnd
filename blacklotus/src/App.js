import './App.css';
import Home from './components/mainIssues';
import Issue from './components/Bulk';
import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/issue' element={<Issue/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
