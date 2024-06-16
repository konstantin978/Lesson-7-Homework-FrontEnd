import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Basket } from './components/Basket'
import { ProductList } from './components/ProductList'
import './App.css'

function App() {

  const [basket, setBasket] = useState([])

  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('http://localhost:3004/products')
      .then(res => res.json())
      .then(res => {
        setProducts(res)
      })
  }, [])

  const moveToCart = id => {
    const found = products.find(x => x.id === id)

    const foundInBasket = basket.find(x => x.id === id)
    if (!foundInBasket) {
      setBasket([...basket, { ...found, count: 1}])
    }
    else {
      setBasket([...basket], foundInBasket.count++)
    }
  }

  const decrement = id => {
    const found = basket.find(x => x.id === id)
    if (found && found.count > 1) setBasket([...basket], found.count--, found.count2--)
  }

  const deleteFromCart = id => {
    setBasket(basket.filter(x => x.id !== id))
  }

  const total = () => {
    let sum = 0
    basket.forEach(x => sum += x.price * x.count)
    return sum
  }

  return <>
    <div className="row">
      <ProductList items={products} onMove={moveToCart} />
      <div className="row2">
        <Basket items={basket} onMove={moveToCart} onDecrement={decrement} onDelete={deleteFromCart} />
        <h4>{total()}</h4>
      </div>
    </div>
  </>
}

export default App
