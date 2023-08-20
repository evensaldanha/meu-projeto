import React, { useState } from 'react'
import "../style.css"

export default function Bory() {
  const [name, setName] = useState("");

  return (
    <div className='container'>
      <label htmlFor='name' className='name'>Nome:
        <input type="text"
          required
          name='name'
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder='Nome'
        />
        <button type='submit'
          onClick={() => setName([...name, name], setName(""))}>Enviar</button>
      </label>
      <label className='email'
        htmlFor='email'>
        Email:
        <input type='email'
          required
          name='name'
          placeholder='Email' />
        <button type='submit'>Enviar</button>
      </label>
      <label className='telephone'
        htmlFor='telephone'>
        Telefone:
        <input type="tel" maxLength={11}
          required
          placeholder=' Telefone' />
        <button type='submit'
        >Enviar</button>
      </label>
      <div>{name}</div>
      {/* {newName.map(nomes => nomes)} */}
    </div>
  )
}
