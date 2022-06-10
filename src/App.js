import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Footer/Footer';
import Home from './Pages/Home/Home';
import ProductDetails from './Pages/Home/ProductDetails';
import GroceryDetails from './Pages/Home/GroceryDetails';
import Navbar from './Pages/Navbar/Navbar';
import GymDetails from './Pages/Home/GymDetails';
import Blog from './Pages/Blogs/Blog';
import HomeHero from './Pages/Home/HomeHero';
import HomeProject from './Pages/Home/HomeProject';
import ContactForm from './Pages/Home/ContactForm';
import Services from './Pages/Services/Services';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/service' element={<Services></Services>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='/about' element={<HomeHero></HomeHero>}></Route>
        <Route path='/project' element={<HomeProject></HomeProject>}></Route>
        <Route path='/contact' element={<ContactForm></ContactForm>}></Route>

        <Route path='/details' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/grocery' element={<GroceryDetails></GroceryDetails>}></Route>
        <Route path='/gym' element={<GymDetails></GymDetails>}></Route>

        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
