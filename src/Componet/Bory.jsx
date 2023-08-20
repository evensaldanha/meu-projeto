import React, { useState } from 'react'
import "../style.css"

export default function Bory() {
const [name,setName]= useState("");

  return (
    <div className='container'>
      <label htmlFor='name' className='nome'>Nome:
        <input type="text"
          required
          name='name'
          value={name || ""}
          onChange={e => setName(e.target.value)}
          />
        <button type='submit'
        onClick={() => setName([...name,name], setName(""))}>Enviar</button>
      </label>
      <label className='email'
      htmlFor='email'>
        Email:
        <input type='email'
          required
          name='name'/>
        <button type='submit'>Enviar</button>
      </label>
      <label className='telephone'
      htmlFor='telephone'>
        Telefone:
        <input type="tel" maxLength={11}
          required />
        <button type='submit' 
        >Enviar</button>
      </label>
      <p>{name}</p>
      {/* {newName.map(nomes => nomes)} */}
    </div>
  )
}
