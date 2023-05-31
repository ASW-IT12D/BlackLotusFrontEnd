import './App.css';
import Home from './components/mainIssues';
import Issue from './components/singleIssue';
import Layout from './components/Layout';
import CreaIssue from './components/creaIssue';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Layout/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/issue' element={<Issue/>}/>
          <Route path='/create-issue' element={<CreaIssue/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
