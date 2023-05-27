import './App.css';
import Home from './components/mainIssues';
import Issue from './components/singleIssue';
import Profile  from './components/Profile';
import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Layout from './components/Layout';


const App = () => {
  return (
    <BrowserRouter>
      <header>
        <Layout/>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Issue />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
