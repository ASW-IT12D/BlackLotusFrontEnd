import './App.css';
import Home from './components/mainIssues';
import Issue from './components/singleIssue';
import Layout from './components/Layout';
import Crea from './components/creaIssueFolder/creaIssue'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Layout/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path="/issue/:id" element={<Issue/>} />
          <Route path="/createIssue" element={<Crea/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
