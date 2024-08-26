import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem } from './cartSlice'
import Button from '../../ui/Button'

export default function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch()

  return (
    <Button type='small' onClick={() => dispatch(removeItem(pizzaId))}>
      Delete
    </Button>
  )
}
