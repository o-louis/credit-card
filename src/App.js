import React, { useState } from 'react';
import './App.css';

function App() {
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");

  const handleName = (e) => {
    const regex = /\w+\s\w+$/gm;
    const isValid = regex.test(e.target.value);
    if (isValid) {
      setName(e.target.value)
    } else {
      setName("")
    }
  }
  return (
    <div className="app">
      <div className="container">

        {/* LEFT SIDE */}
        <div className="form">
          <h1 className="form__title">Save your Credit Card</h1>
          <label className="form__label">
            <span className="form__label-title">Name on Card</span>
            <input className="form__label-input" type="text" name="name" placeholder="Firstname Lastname" onChange={handleName} />
          </label>

          <label className="form__label">
            <span className="form__label-title">Card Number</span>
            <input className="form__label-input" type="text" name="cardNumber" placeholder="XXXX XXXX XXXX XXXX" onChange={(e) => setCardNumber(e.target.value)}/>
          </label>

          <div className="form__infos">
            <label className="form__label">
              <span className="form__label-title">Expires on</span>
              <input className="form__label-input" type="text" name="expiration" placeholder="MM/YY" onChange={(e) => setExpiration(e.target.value)}/>
            </label>

            <label className="form__label">
              <span className="form__label-title">Security Code (CVC)</span>
              <input className="form__label-input" type="text" name="securityCode" placeholder="CVC" onChange={(e) => setCvc(e.target.value)}/>
            </label>
          </div>

          <div className="form__buttons">
            <button className="button form__buttons-cancel">Cancel</button>
            <button className="button form__buttons-save">Save</button>
          </div>
        </div>

        {/* RIGHT SIDE  */}
        <div className="card-preview">
          <div className="card-preview__card">
            <div className="card-preview__card-number">{ cardNumber ? cardNumber : `xxxx xxxx xxxx xxxx` }</div>
            <div className="card-preview__card-infos">
              <div className="card-preview__card-name">{ name ? name : `Firstname Lastname` }</div>
              <div className="card-preview__card-expiration">{ expiration ? expiration : `MM/YY` }</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
