import './App.css';

function App() {
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form>      

        <div className='basic'>
          <input type='text' placeholder={'+200 new TV'}/>
          <input type='datetime-local'/>
        </div>

        <div>
        <input type='text' placeholder={'description'}/>
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
