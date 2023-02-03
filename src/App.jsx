// import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'
import { List, ListItem } from '@mui/material';

function App() {
  // const [count, setCount] = useState(0)

  function checkQuantity() {
    let wholeForm = document.getElementById("orderForm");
    let numberOfPizzas = wholeForm.quantity.value;

    let pizzaPrices = [6.45, 12.0, 14.0];
    let totalPrice = 0
    if (numberOfPizzas <= 0) {
      document.getElementById("message").innerHTML = "The number you have entered" + "(" + numberOfPizzas + ")" + "is not valid.";
    } 

    while (numberOfPizzas > 0) {
      let bestBulkPrice = pizzaPrices.length;
      let pizzaPrice = pizzaPrices[pizzaPrices.length - 1];
      let numberGroups = Math.floor(numberOfPizzas / bestBulkPrice);
      totalPrice += numberGroups * pizzaPrice;
      
      numberOfPizzas -= numberGroups * bestBulkPrice;
      pizzaPrices.pop();
      document.getElementById("message").innerHTML = "The amount payable for this awesome deal is $" + totalPrice;
      
    }
    return false;
  }

  function checkDate(){
    var txt;
    if (confirm("This promotion runs from 12/09/2022 - 30/09/2023, please confirm todays date is within this range")) {
      txt = "Let's Begin! Fill out the ordering form below";
    } else {
      txt = "This promotion is no longer valid, do not proceed.";
    }
    document.getElementById("demo").innerHTML = txt;
  }

  return (
    <div 
      className="App" >
        <a target="_blank">
      <img 
        loading="lazy" 
        // style="position: static width: 250px; height: 250px; top: 0; left: 0; border: none; padding: none; margin: none; object-fit: contain; "
        src='../images/pizzasonly.png'
        className='pologo'
        alt='Pizzas Only Logo'>
      </img>
      </a>
    
      <article className="orderFormCard">
      {/* Validate that the promo is still valid */}
      <h2>Promo Validation</h2>
      <p>Simply click the button below to confirm the promotion is still vaild.</p>
      <button type="submit" onClick={() => checkDate()}>Validate this promo</button>
        <div id='demo'> </div>

      </article>

      <article className='priceBoard'>
      <List>
      <h2>The Deal:</h2>
      <span className="material-symbols-outlined">
        local_pizza
        </span>
      
        <ListItem>1 Large Pizza - $6.45</ListItem>
        <ListItem>2 Large Pizzas - $12 (save 90c)</ListItem>
        <ListItem>3 Large Pizza - $14 (save $5.35!) </ListItem>
        <ListItem>4+ Large Pizza - The cheapest combination (use our super easy calculator below)</ListItem>

      </List>


      </article>

      <article className="orderFormCard">
      <h1>Calculate Best Deal</h1>
      <p>Simply enter the number of pizzas you want below to calculate the combination of best priced deal below!</p>
      <form action="message" method="post" id="orderForm" onClick={() =>checkQuantity()}>
      <p>
        <label htmlFor="quantity" className="io-headings">Enter number of pizzas wanted:</label>
        <input name="quantity" id="quantity" type="number"/>
        {/* <button type="submit" value="quantity" onClick={() => checkQuantity()}>Total Cost</button> */}
      </p>
      <p>
        {/* <input value="Total cost" type="submit"/> */}
        <label className="io-headings">The amount payable for the best deal is:</label>
      </p>
      <article className='price-calculation'>
        <div id="message"></div>
        </article>
    </form>
      </article>
	
      {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
       
        <div>

        <h1>Built with:</h1>
        <h2 className="vitereact">Vite + React</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      
    </div>
  )
}

export default App
