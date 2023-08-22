import React, { useState } from 'react'
import "../style.css"

export default function Bory() {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [email, setEmail] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [newTelephone, setNewTelephone] = useState("");
  // const useStateReturn = useState("")
  // const name = useStateReturn[0]
  // const setName = useStateReturn[1]

  // const person = {
  //   firstName: 'maria',
  //   age: 18,
  // }

  // const { firstName } = person;
  // const firstName = person.firstName

  // const person2 = ['maria', 18]

  // const [nameX, ageX] = person2; 

  // const nameX = person2[0]
  // const ageX = person2[1]

  return (
    <div className='container'>
      <label htmlFor='name' className='name'>Nome:
        <input type="text"
          required
          name='name'
          value={newName}
          onChange={e => setNewName(e.target.value)}
          placeholder='Nome'
        />
        <button type='submit'
          onClick={() => setName([...name, newName], setNewName(""))}>Enviar</button>
      </label>
      <label className='email'
        htmlFor='email'>
        Email:
        <input type='email'
          required
          name='name'
          placeholder='Email'
          value={newEmail}
          onChange={e => setNewEmail(e.target.value)} />
        <button type='submit'
          onClick={() => setEmail([...email, newEmail], setNewEmail(""))}>Enviar</button>
      </label>
      <label className='telephone'
        htmlFor='telephone'>
        Telefone:
        <input type="tel" maxLength={11}
          required
          placeholder=' Telefone' 
          value={newTelephone}
          onChange={e => setNewTelephone(e.target.value)}/>
        <button type='submit'
        onClick={() => setTelephone([...telephone,newTelephone], setNewTelephone(""))}
        >Enviar</button>
      </label>
      <div>
        {name}
      </div>
      <div>
        {email}
      </div>
      <div>{telephone}</div>
    </div>
  )
}
