import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Home from './ui/Home'
import Cart from './features/cart/Cart'
import Menu, { loader as menuLoader } from './features/menu/Menu'
import CreateOrder, {
  action as createOrderAction,
} from './features/order/CreateOrder'
import Order, { loader as orderLoader } from './features/order/Order'
import { action as updateOrderAction } from './features/order/UpdateOrder'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/menu',
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        element: <Order />,
        loader: orderLoader,
        path: '/order/:orderId',
        action: updateOrderAction,
        errorElement: <Error />,
      },
      {
        path: '/order/new',
        element: <CreateOrder />,
        action: createOrderAction,
      },
      { path: '/cart', element: <Cart /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
