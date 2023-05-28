import './App.css';
import Home from './components/mainIssues';
import Issue from './components/editIssue';
import Layout from './components/Layout';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/issue/:id" element={<Issue/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
