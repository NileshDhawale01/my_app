import './App.css';
import Content from './componants/Content/Content';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Sidebar from './componants/Sidebar/Sidebar';
import ErrorPage from './componants/ErrorPage/ErrorPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Cards from './componants/Cards/Cards';

function App() {
  return (
    <div style={{position : "relative"}}>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Footer />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/content' element={< Content />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/*' element={<Navigate to={'/'}/>}/>
          <Route path='/card' element={<Cards/>}/>
        </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
