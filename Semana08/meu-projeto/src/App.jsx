import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css'
import { HomePage } from './pages/HomePage/HomePage';
import { ProductsPage } from './pages/ProductsPage/ProductsPage';
import { FAQPage } from './pages/FAQPage/FAQPage';
import { ErroPage } from './pages/ErroPage/ErroPage';
import { BannerProvider } from './context/BannerContext'
import Banner from './components/Banner/Banner';


function App() {
  return (
    <BannerProvider>
      <Router>
        <h1>Meu-Projeto</h1>
        <h2>Subtitulo</h2>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='products' element={<ProductsPage />} />
          <Route path='faq' element={<FAQPage />} />
          <Route path='*' element={<ErroPage />} />
        </Routes>
        <Banner />
      </Router>
    </BannerProvider>
  )
}

export default App;
