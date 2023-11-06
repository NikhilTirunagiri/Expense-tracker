import './App.css';
import {useState} from "react";


function App() {
  const [name,setName] = useState('');
  const [datetime,setDatetime] = useState('');
  const [description,setDescription] = useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price = name.split(' ')[0];
    fetch(url,{
      method: 'POST',
      headers:{'Content-type':'application/json'},
      body: JSON.stringify({
        price,
        name:name.substring(price.length+1),
        description,
        datetime
      })
    }).then(response => {
      response.json().then(json => {
        setName('');
        setDatetime('');
        setDescription('');
        
        console.log('result',json);
      });
    });
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>      

        <div className='basic'>
          <input type='text' 
                 value={name} 
                 onChange={ev => setName(ev.target.value)}
                 placeholder={'+200 new TV'}/>

          <input value={datetime} 
                 onChange={ev => setDatetime(ev.target.value)}
                 type='datetime-local'/>
        </div>

        <div>
        <input type='text'
               placeholder={'description'}
               value={description} 
               onChange={ev => setDescription(ev.target.value)}/>
        </div>
        <button type="submit">Add new transaction</button>
      </form>

      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>new samsung tv</div>
            <div className='description'>old tv is broken</div>
          </div>
          <div className='right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>2023-11-06 11:47</div>
          </div>

        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>iphone</div>
            <div className='description'>old iphone is broken</div>
          </div>
          <div className='right'>
            <div className='price red'>-$1000</div>
            <div className='datetime'>2023-11-05 10:47</div>
          </div>
        </div>
        <div className='transaction'>
          <div className="left">
            <div className='name'>gig</div>
            <div className='description'>music gig</div>
          </div>
          <div className='right'>
            <div className='price green'>+700</div>
            <div className='datetime'>2023-10-04 10:23</div>

          </div>
        </div>
      </div>

    </main>
  );
}

export default App;
