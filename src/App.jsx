import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import PageComponent from './components/PageComponent';
import MainPage from './screens/MainPage';
import PresentationPage from './screens/PresentationPage';
import AnalysisPage from './screens/AnalysisPage';
import ProblemsPage from './screens/ProblemsPage';
import AimPage from './screens/AimPage';
import LogicalPage from './screens/LogicalPage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PageComponent />}>
          <Route index element={<MainPage />} />
          <Route path='/Presentacion' element={<PresentationPage />} />
          <Route path='/Analisis' element={<AnalysisPage />} />
          <Route path='/AnalisisProblema' element={<ProblemsPage />} />
          <Route path='/ArbolObjetivos' element={<AimPage />} />
          <Route path='/MarcoLogico' element={<LogicalPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App
