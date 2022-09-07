import { BrowserRouter, Routes, Route, useNavigate, Link } from "react-router-dom";
import Header from "./jsx/layout/Header";
import Cart from "./jsx/pages/Cart";
import Home from "./jsx/pages/Home";
import Footer from "./jsx/layout/Footer";
import ToolBar from "./jsx/common/ui/toolbar/ToolBar";
import Floating from "./jsx/common/ui/floating/Floating";
import LogIn from "./jsx/pages/LogIn";
import MyPage from "./jsx/pages/MyPage";
import Category from "./jsx/pages/Category";
import Product from "./jsx/pages/Product";
import HideSearch from "./jsx/common/hide/HideSearch";
import ScrollToTop from "./js/ScrollTop";
import ProductList from "./jsx/pages/ProductList";
import Slide from "./jsx/pages/Slide";
import BuyPage from "./jsx/pages/BuyPage";

import SignUp from "./jsx/pages/SignUp";
import SubSignUp from "./jsx/pages/SubSignUp";
import {RecoilRoot} from 'recoil';
import Review from './jsx/pages/Review';
import RecentSearch from "./jsx/pages/RecentSearch";
import SubSignUp2 from "./jsx/pages/SubSignUp2";
import LoginProvider from "./context/loginProvider";
import Delivery from "./jsx/pages/Delivery";
import DeliveryAdd from "./jsx/pages/DeliveryAdd";
import CategoryProductList from "./jsx/pages/CategoryProductList";
import BuyComplete from "./jsx/pages/BuyComplete";
import BuyPage2 from "./jsx/pages/BuyPage2";
import Loading from "./jsx/pages/Loading";










function App() {

  return (
      
      <BrowserRouter>

      <ScrollToTop />
      <LoginProvider> 
        <RecoilRoot>
          <div id="m_wrap" className='mcom_wrap sm_v3 sm_page_main has_smhero_banner'>
            <HideSearch/>
          

            <Header /> 
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/login" element={<LogIn />} />
                <Route path="/mypage" element={<MyPage />} />
                <Route path="/category" element={<Category/>}/>
                <Route path="/recentsearch" element={<RecentSearch/>}/>
                <Route path="/productlist" element={<ProductList/>}/>
                <Route path="/buypage" element={<BuyPage/>}/>
                <Route path="/slide" element={<Slide />}/>
                <Route path="/subsignup" element={<SubSignUp/>} />
                <Route path="/subsignup2" element={<SubSignUp2 />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/review" element={<Review />}/>
                <Route path="/buypage" element={<BuyPage/>}/>
                <Route path="/buypage2" element={<BuyPage2/>}/>
                <Route path="/slide" element={<Slide />}/>
                <Route path="/subsignup" element={<SubSignUp/>} />
                <Route path="/subsignup2" element={<SubSignUp2 />} />
                <Route path="/delivery" element={<Delivery/>}/>
                <Route path="/deliveryadd" element={<DeliveryAdd/>}/>
                <Route path="/categoryproductlist" element={<CategoryProductList/>}/>
                <Route path="/BuyComplete" element={<BuyComplete/>}/>
                <Route path="/loading" element={<Loading/>}/>
            </Routes>
            <Footer />
            <Floating />
            <ToolBar /> 
          
          </div>
        </RecoilRoot>
      </ LoginProvider>
      </BrowserRouter>
      
     

  );
}

export default App;
