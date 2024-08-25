import LinkButton from '../../ui/LinkButton'
import Button from '../../ui/Button'
import CartItem from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, getCart } from './cartSlice'
import EmptyCart from './EmptyCart'

function Cart() {
  const dispatch = useDispatch()
  const cart = useSelector(getCart)
  const username = useSelector((state) => state.user.username)

  if (!cart.length) return <EmptyCart />

  return (
    <div className='px-4 py-3'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='mt-8 text-xl font-semibold'>Your cart, {username}</h2>
      <ul className='mt-3 divide-y-2 divide-stone-200 border-b-2'>
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      <div className='mt-8 space-x-3'>
        <Button to='/order/new' type='primary'>
          Order pizzas
        </Button>
        <Button type='secondary' onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  )
}

export default Cart
