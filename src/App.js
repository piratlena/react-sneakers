import { Component } from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: [
       { mark: '../public/img/btn-heart.svg', sneakers: '/public/img/sneakers/sneakers_1.jpg', descr: 'Мужские Кроссовки Nike Blazer Mid Suede', textPrice: 'Цена', price: 1299}
      ]
    }
  }
  render () {
    const {data} = this.state;
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
                  <Card data={data}/>

        </div>
        
      </div>
    </div>
    )

  }
    
}

export default App;
