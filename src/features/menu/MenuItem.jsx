import Button from '../../ui/Button'
import { formatCurrency } from '../../utils/helpers'

function MenuItem({ pizza }) {
  const { name, unitPrice, ingredients, soldOut, imageUrl } = pizza

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
          <Button type='small'>Add to cart</Button>
        </div>
      </div>
    </li>
  )
}

export default MenuItem
