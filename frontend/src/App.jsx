import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Companies from './pages/companies';
import BasicLayout from './components/BasicLayout';

const App = () => (
  <BrowserRouter>
    <BasicLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
      </Routes>
    </BasicLayout>
  </BrowserRouter>
);

export default App;
