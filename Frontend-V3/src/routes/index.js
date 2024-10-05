import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import App from '../App';
import LoginPage from '../pages/LoginPage';
import CategoryPage from '../pages/CategoryPage';
import Profile from '../pages/Profile';
import ShoppingCart from '../pages/ShoppingCart';
import ProductDetails from '../pages/ProductDetails';
import PaymentPage from '../pages/PaymentPage';
import ProfilePage from '../pages/ProfilePage';
import CategoryPage3 from '../pages/CategoryPage3';
import CategoryPage2 from '../pages/CategoryPage2';
import CategoryPage4 from '../pages/CategoryPage4';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <LoginPage />
      },
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'category',
        element: <CategoryPage/>,
      },
      {
        path:'profile',
        element: <ProfilePage/>,
      },
      {
        path:'cart',
        element: <ShoppingCart/>,
        // children: [
        //   {
        //     path: 'payment',
        //     element: <ShoppingCart/>,
        //   }
        // ]
      },
      {
        path: 'payment',
        element: <PaymentPage/>,
      },
      {
        path: 'product/:asin',
        element: <ProductDetails/>,
      },,
      {
        path: 'category2',
        element: <CategoryPage2/>,
      },
      {
        path: 'category4',
        element: <CategoryPage4/>,
      }
    ]
  },
]);

export default router;
