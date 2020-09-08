import React, { useState, useEffect } from 'react';
import {
  nameValidation,
  cardNumberValidation,
  expirationValidation,
  cvcValidation
} from './utils/validationUtils';

import './App.css';

function App() {
  const [cvc, setCvc] = useState("");
  const [name, setName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiration, setExpiration] = useState("");

  const [selected, setSelected] = useState("");

  const [error, setError] = useState({
    "name": true,
    "cardNumber": true,
    "expiration": true,
    "cvc": true
  });

  const handleName = (e) => {
    setSelected("name");
    const result = nameValidation(e);
    if (result.value || result.value === "")
      setName(result.value);
    setError({ ...error, name: result.error });
  }

  const handleCardNumber = (e) => {
    setSelected("cardNumber");
    const result = cardNumberValidation(e);
    console.log(result);
    if (result.value || result.value === "")
      setCardNumber(result.value);
    setError({ ...error, cardNumber: result.error });
  }

  const handleExpiration = (e) => {
    setSelected("expiration");
    const result = expirationValidation(e);

    
    if (result.value || result.value === "")
      setExpiration(result.value);
    setError({ ...error, expiration: result.error });
  }

  const handleCvc = (e) => {
    setSelected("cvc");
    const result = cvcValidation(e);
    if (result.value || result.value === "")
      setCvc(result.value);
    setError({ ...error, cvc: result.error });
  }

  const keyPress = (e) => {
    const { value } = e.target;
    if (e.key === 'Backspace'){
      if (selected === "expiration") {
        if (value[value.length - 1] === '/')
          setExpiration(value.substring(0, value.length - 1));
      } else if (selected === "cardNumber") {
        if (value[value.length - 1] === ' ')
          setCardNumber(value.substring(0, value.length - 1));
      }
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
            <input className="form__label-input" type="text" name="name" placeholder="Firstname Lastname" onChange={handleName} value={name} />
            <span>{error.name ? `error`:``}</span>
          </label>

          <label className="form__label">
            <span className="form__label-title">Card Number</span>
            <input className="form__label-input" type="text" name="cardNumber" placeholder="XXXX XXXX XXXX XXXX" onChange={handleCardNumber} onKeyDown={keyPress} value={cardNumber}/>
            <span>{error.cardNumber ? `error`:``}</span>
          </label>

          <div className="form__infos">
            <label className="form__label">
              <span className="form__label-title">Expires on</span>
              <input className="form__label-input" type="text" name="expiration" placeholder="MM/YY" onChange={handleExpiration} onKeyDown={keyPress} value={expiration} />
              <span>{error.expiration ? `error`:``}</span>
            </label>

            <label className="form__label">
              <span className="form__label-title">Security Code (CVC)</span>
              <input className="form__label-input" type="text" name="securityCode" placeholder="CVC" onChange={handleCvc} value={cvc} />
              <span>{error.cvc ? `error`:``}</span>
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
