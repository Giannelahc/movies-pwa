import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const RegisterForm = () => {
  const [showPass, setShowPass] = useState(false)
  const [message, setMessage] = useState("")

  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
    city: "",
    street: ""
  })

  const togglePassword = (event) => {
    event.preventDefault();

    setShowPass(!showPass)
  }

  const handleRegister = async () => {
    if (!user.email || !user.password || !user.city || !user.street) {
      setMessage("Email, username, password are mandatory!");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
      });
      console.log(JSON.stringify(user))
      const data = await response.json();
      console.log(response)
      if (response.ok) {
        setMessage("¡Registro exitoso!");
      } else {
        setMessage(data.message || "Error en el registro");
      }
    } catch (error) {
      console.error(error);
      setMessage("Error de red o del servidor");
    }
  };

  return (
    <React.Fragment>
      <div className='inputs-container'>
        <div className='input-container'>
          <label className='email'>Email</label>
          <input
            type='text'
            className='email'
            onChange={(e) => setUser({
              ...user,
              email: e.target.value
            })}
          >
          </input>
        </div>
      </div>
      <div className='inputs-container'>
        <div className='input-container'>
          <label className='email'>Username</label>
          <input
            type='text'
            className='username'
            onChange={(e) => setUser({
              ...user,
              username: e.target.value
            })}
          >
          </input>
        </div>
      </div>
      <div className='input-container'>
        <label className='password'>Password</label>
        <input
          type={showPass ? "text" : "password"}
          className='password'
          onChange={(e) => setUser({
            ...user,
            password: e.target.value
          })}
        >
        </input>
        <span onClick={(e) => togglePassword(e)} style={{ cursor: "pointer" }}>
          <span>
            {showPass ? (
              <FontAwesomeIcon icon={faEye} className='customIcon' />
            ) : (
              <FontAwesomeIcon icon={faEyeSlash} className='customIcon' />
            )}
          </span>
        </span>
      </div>
      <div className='inputs-container'>
        <div className='input-container'>
          <label className='city'>City</label>
          <input type="text" className='city'></input>
        </div>
        <div className='input-container'>
          <label className='street'>Street</label>
          <input type="text" className='street'></input>
        </div>
      </div>
      <button className='submit' onClick={handleRegister}>
        submit
      </button>
      <span style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        {message}
      </span>
    </React.Fragment >
  )
}

export default RegisterForm
