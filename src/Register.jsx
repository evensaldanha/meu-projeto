import React from 'react'
import  { useState } from 'react';
import "../style.css"

export default function Register() {
 const [list, setList] = useState([]);
  const [name, setName] = useState([]);
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [gender, setGender] = useState("feminino");
  const [age, setAge] = useState(18);
  // const [newEmail, setNewEmail] = useState("");
  // const [newTelephone, setNewTelephone] = useState("");




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
          value={name}
          className='input-name'
          onChange={e => setName(e.target.value)}
          placeholder='Nome'
        />

      </label>
      <label className='email'
        htmlFor='email'>
        Email:
        <input type='email'
          required
          name='email'
          className='input-email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>
      <label className='telephone'
        htmlFor='telephone'>
        Telefone:
        <input type="tel" maxLength={11}
          required
          placeholder=' Telefone'
          autoComplete='on'
          value={telephone}
          className='input-telefone'
          onChange={e => setTelephone(e.target.value)}
        />
      </label>
      <div>
        <div>
          <label>Sexo:</label>
          <select name="selected" id="sexo" value={gender}
            className='select'
            required
            onChange={e => setGender(e.target.value)}>
            <optgroup>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
            </optgroup>
          </select>
          <label>Idade:</label>
          <input type='number' max={100} min={18}
            className='input-idade'
            value={age}
            onChange={e => setAge(e.target.value)} />
        </div>
        <div>
        </div>
      </div><button
        className='botao'
        type='submit'
        onClick={() => {
          setList([...list, name, email, telephone, gender, age], setList(""),
            setName([], setEmail(""), setTelephone("")));
        }}>
        Enviar
      </button>
      <div className='map'>
        {list.map((item, index) => {
          return (
            <div key={index}
              className='div-do-retorno-do-map'>{item}</div>)
        })}
      </div>
      <div>
        {/* {console.log(setClic)} */}
        {/* {newRegister}                                                                                               
      {email}
      {telephone} */}
      </div>
    </div>
  )
}
