import { useDispatch, useSelector } from 'react-redux'
import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'
import { addItem, getQuantityById } from '../cart/cartSlice'
import DeleteItem from '../cart/DeleteItem'
import UpdateItemQuantity from '../cart/UpdateItemQuantity'

function MenuItem({ pizza }) {
  const diapatch = useDispatch()
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza

  const currentQuantity = useSelector(getQuantityById(id))

  const isInCart = currentQuantity > 0

  function handleAddToCart(e) {
    const newItem = {
      pizzaId: id,
      name,
      unitPrice,
      quantity: 1,
      totalPrice: unitPrice * 1,
    }

    diapatch(addItem(newItem))
  }

  return (
    <li className='flex gap-4 py-2'>
      <img
        className={`w-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
        src={imageUrl}
        alt={name}
      />
      <div className='mt-0.5 flex grow flex-col'>
        <p className='font-medium'>{name}</p>
        <p className='text-sm capitalize italic'>{ingredients.join(', ')}</p>
        <div className='mt-auto flex items-center justify-between text-sm'>
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className='font-medium uppercase text-stone-500'>Sold out</p>
          )}

          {isInCart && (
            <div className='flex items-center gap-3 sm:gap-5'>
              <UpdateItemQuantity
                pizzaId={id}
                currentQuantity={currentQuantity}
              />
              <DeleteItem pizzaId={id} />
            </div>
          )}

          {!soldOut && !isInCart && (
            <Button onClick={handleAddToCart} type='small'>
              Add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  )
}

export default MenuItem
