
function App() {
  return (
    <div className="wrapper clear">
      <div className="overlay">
        <div className="drawer">
          <h2 className="mb-30 d-flex justify-between">Корзина <img className="close" src="img/cross.svg" alt="remove" /></h2>

          <div className="items">

          <div className="cartItem d-flex align-center mb-20">
                  <div style={{
                    backgroundImage: 'url(/img/sneakers/sneakers_1.jpg)'
                  }} className="cartItemImg"></div>

                  <div className="mr-20">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                  </div>
                  <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
                  <div style={{
                    backgroundImage: 'url(/img/sneakers/sneakers_2.jpg)'
                  }} className="cartItemImg"></div>

                  <div className="mr-20">
                    <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
                    <b>12 999 руб.</b>
                  </div>
                  <img className="removeBtn" src="img/btn-remove.svg" alt="remove" />
            </div>
            </div>

            <div className="cartTotalBlock">
            <ul>
                    <li>
                      <span>Итого:</span>
                      <div></div>
                      <b>21 498 руб. </b>
                    </li>
                    <li>
                      <span>Налог 5%: </span>
                      <div></div>
                      <b>1074 руб. </b>
                    </li>
                  </ul>
                  <button className="greenBtn">Оформить заказ <img src="/img/arrow.svg" alt="arrow-right" /></button>
            </div>
    </div>
          </div>




      <header className="d-flex justify-between align-center p-40">
      <div className="d-flex align-center">
      <img width={40} height={40} src="/img/logo.svg" alt="logo_sneakers"/>
        <div className="headerInfo">
          <h3 className="text-uppercase">React Sneakers</h3>
          <p className="opacity-5">Магазин лучших кроссовок</p>
        </div>
      </div>
        <ul className="d-flex">
          <li className="mr-30">
            <img src="/img/cart.svg" alt="cart" />
          <span>1205 руб.</span></li>
          <li><img src="/img/user.svg" alt="user_icon" /></li>
        </ul>
      </header>
      <div className="content p-40">

        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          
          <div className="search-block d-flex">
              <img src="/img/lens.svg" alt="search-lens"/>
              <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex">

        <div className="card">
          <div className="favorite">
          <img src="/img/btn-heart.svg" alt="heart" />
          </div>
          <img width={133} height={112} src="img/sneakers/sneakers_1.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="img/sneakers/sneakers_2.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Air Max 270</h5>
          <div className="cardBottom d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="img/sneakers/sneakers_3.jpg" alt="Sneakers" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="cardBottom d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="img/sneakers/sneakers_4.jpg" alt="Sneakers" />
          <h5>Кроссовки Puma X Aka Boku Future Rider</h5>
          <div className="cardBottom d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b> 12 999 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg" alt="plus" />
            </button>
          </div>
        </div>

        </div>
        
      </div>
    </div>
  );
}

export default App;
