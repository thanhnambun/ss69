import ListProducts from './component/ListProduct'
import "./index.css"
import Cart from './component/Cart'
export default function App() {
  return (
    <div style={{display:"flex"}}>
      <ListProducts></ListProducts>
      <Cart></Cart>
    </div>
  )
}