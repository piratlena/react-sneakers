
import Card from './components/Card/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
  { mark: '/img/btn-heart-red.svg', imageUrl: '/img/sneakers/sneakers_1.jpg', descr: 'Мужские Кроссовки Nike Blazer Mid Suede', textPrice: 'Цена', price: 1299},
  { mark: '/img/btn-heart.svg', imageUrl: '/img/sneakers/sneakers_2.jpg', descr: 'Мужские Кроссовки Nike Air Max 270', textPrice: 'Цена', price: 1199},
  { mark: '/img/btn-heart.svg', imageUrl: '/img/sneakers/sneakers_3.jpg', descr: 'Мужские Кроссовки Nike Blazer Mid Suede', textPrice: 'Цена', price: 8499},
  { mark: '/img/btn-heart.svg', imageUrl: '/img/sneakers/sneakers_4.jpg', descr: 'Кроссовки Puma X Aka Boku Future Rider', textPrice: 'Цена', price: 8999}
 ]

function App () {
  
   return (
      <div className="wrapper clear">
        <Header/>
        <Drawer/>
       <div className="content p-40">

        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          
          <div className="search-block d-flex">
              <img src="/img/lens.svg" alt="search-lens"/>
              <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">
            {
              arr.map((obj) => (
                <Card
                mark = {obj.mark} 
                imageUrl={obj.imageUrl}
                descr={obj.descr}  
                textPrice={obj.textPrice}
                price={obj.price}
                />
              ))
            }

        </div>
        
      </div>
    </div>
    )
 
    
}

export default App;
