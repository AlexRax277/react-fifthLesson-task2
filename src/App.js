import './App.css';
import MyComponents from './MyComponents.js';

function App() {
  return <div>
      <MyComponents.SimpleList 
        type='title'
        childs={['Заголовок 1', 'Заголовок 2', 'Заголовок 3']}
      />

      <MyComponents.DateTime type='date-time' value='Время и дата'/>

      <MyComponents.SimpleList
        type='news'
        childs={['Новость 1', 'Новость 2', 'Новость 3']}
      />

      <MyComponents.Currency
        type='currency'
        childs={[
          {
            'name': 'Валюта1',
            'value': '100',
            'shift': '+10'
          }, {
            'name': 'Валюта2',
            'value': '60',
            'shift': '-5'
          }, {
            'name': 'Валюта3',
            'value': '120',
            'shift': '+15'
          }
        ]}
      />

      <MyComponents.SimpleList 
        type='theme'
        childs={['Тема 1', 'Тема 2', 'Тема 3']}
      />

      <MyComponents.Input 
        inputType='input'
        btnName='btn'
        btnType='btn'
      />

      <MyComponents.Cards
        type='card'
        childs={[
          (<div>
            <div className='pic'></div>
            <p>Some text</p>
            <a href="123">Link</a>
          </div>
          ),(
            <div>
              <p>Another text</p>
              <button className='btn' type='submit'>push-me</button>
            </div>
          )
        ]}
      />
      
  </div>
}

export default App;
