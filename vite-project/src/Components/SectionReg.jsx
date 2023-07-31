import "../assets/Styles/Register.css";
import React, { useState } from 'react';
import { registerUser } from '../hooks/api';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Register = () => {

  const navigate = useNavigate();

  const initialFormData = {
    firstName: '',
    lastName:'',
    email: '',
    password: '',
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await registerUser(formData);
      console.log('User registered successfully:', response);
      setFormData(initialFormData);
      navigate('/register')
    } catch (error) {
    }
  };

  return (

     <div>
       <section id="home">
         <div className="inner-width">
           <div className="content">
             <div className="container">
               <div className="title">Registro</div>
               <div className="content">
                 <form onSubmit={handleSubmit}>
                   <div className="user-details">
                     <div className="input-box">
                       <span className="details">Nombre</span>
                       <input
                         type="text"
                         id="firstName"
                         name='firstName'
                         placeholder="Ingrese nombre"
                         value={formData.firstName}
                         onChange={handleChange}
                         required
                       />
                     </div>
                     <div className="input-box">
                       <span className="details">Apellidos</span>
                       <input
                         type="text"
                         id="lastName"
                         name='lastName'
                         placeholder="Ingrese Apellidos"
                         value={formData.lastName}
                         onChange={handleChange}
                         required
                       />
                     </div>
                     <div className="input-box">
                       <span className="details">Email</span>
                       <input
                         type="email"
                         id="email"
                         name='email'
                         placeholder="Ingrese Email"
                         value={formData.email}
                         onChange={handleChange}
                         required
                       />
                     </div>

                     <div className="input-box">
                       <span className="details">Contraseña</span>
                       <input
                         type="password"
                         id="password"
                         name='password'
                         placeholder="Ingrese contraseña"
                         value={formData.password}
                         onChange={handleChange}
                         required
                       />
                     </div>
                   </div>
                   <div className="button">
                     <button className='btn btn-outline-danger' type="submit">Registrar</button>
                   </div>
                 </form>
               </div>
             </div>
           </div>
         </div>
       </section>
     </div>
  );
};

export default Register;