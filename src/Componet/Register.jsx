import React from 'react'
import  { useState } from 'react';
import { FiX } from "react-icons/fi";
import { ButtonMain, CloseButton, Container, ListMap } from './Register.styled';

export default function Register({isOpen,setOpen}) {
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
if(isOpen){
  return (
    <Container >
      <CloseButton onClick={()=> setOpen(!isOpen)}><FiX/></CloseButton>
      <label htmlFor='name' className='name'>Nome:
        <input type="text"
          required
          name='name'
          value={name}
            style={{width: "15em"}}
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
          style={{width: "15em"}}
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
          style={{width: "15em"}}
          onChange={e => setTelephone(e.target.value)}
        />
      </label>
      <div>
        <div>
          <label>Sexo:</label>
          <select name="selected" id="sexo" value={gender}
            style={{ width: "10em"}}
            required
            onChange={e => setGender(e.target.value)}>
            <optgroup>
              <option value="feminino">Feminino</option>
              <option value="masculino">Masculino</option>
            </optgroup>
          </select>
          <label>Idade:</label>
          <input type='number' max={100} min={18}
            style={{width: "30px"}}
            value={age}
            onChange={e => setAge(e.target.value)} />
        </div>
        <div>
        </div>
      </div><ButtonMain
        type='submit'
        onClick={() => {
          setList([...list, name, email, telephone, gender, age], setList(""),
            setName([], setEmail(""), setTelephone("")));
        }}>
        Enviar
      </ButtonMain>
      <ListMap>
        {list.map((item, index) => {
          return (
            <div key={index}
              >{item}</div>)
        })}
      </ListMap>
      <div>
        {/* {console.log(setClic)} */}
        {/* {newRegister}                                                                                               
      {email}
      {telephone} */}   
      </div>
    </Container>
  )
}
 
}
