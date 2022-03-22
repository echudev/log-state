import './App.css';
import React, { useState } from 'react';


function App() {

  const [form, setForm] = useState({
    name: "",
    email: ""
  })
  const [log, setLog] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const chekLogin = () => {
    if (form.name !== "") {
      setLog(true)
    } else {
      alert("ingresa al menos un nombre")
    }
  }

  const logout = () => {
    setForm({
      name: "",
      email: "",
      age: "",
      profession: "",
      country: ""
    })
    setLog(false)
  }

  return (
    <>
      <div className="app">
        <div className={log ? "login hide" : "login"}>
          <h2>Ingresa tus datos</h2>
          <div className="form-container">

            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={form.name}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              name="email"
              placeholder="Correo"
              value={form.email}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              name="age"
              placeholder="Edad"
              value={form.age}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              name="profession"
              placeholder='Profesión'
              value={form.profession}
              onChange={handleChange}
            ></input>

            <input
              type="text"
              name="country"
              placeholder='País'
              value={form.country}
              onChange={handleChange}
            ></input>

          </div>
          <button onClick={chekLogin}>Entrar</button>
        </div>

        {log ? <div className="logged">
          <h1>Bienvenido</h1>
          <p><b>Nombre:</b> {form.name}</p>
          <p><b>Correo:</b> {form.email} </p>
          <p><b>Edad: </b>{form.age}</p>
          <p><b>Profesión:</b> {form.profession} </p>
          <p><b>País:</b> {form.country}</p>
          <button onClick={logout}>Salir</button>
        </div>

          : <div>
            <h1>Logeate!</h1>
          </div>}
      </div>
    </>
  );
}

export default App;
