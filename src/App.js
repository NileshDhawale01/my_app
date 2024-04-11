import './App.css';
import Content from './componants/Content/Content';
import Footer from './componants/Footer/Footer';
import Header from './componants/Header/Header';
import Home from './componants/Home/Home';
import Sidebar from './componants/Sidebar/Sidebar';
import ErrorPage from './componants/ErrorPage/ErrorPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar />
        <Footer />
        <Routes>
          <Route path='/' element={< Home />} />
          <Route path='/content' element={< Content />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/*' element={<Navigate to={'/'}/>}/>
        </Routes>
      </BrowserRouter> 
    </>
  );
}

export default App;
