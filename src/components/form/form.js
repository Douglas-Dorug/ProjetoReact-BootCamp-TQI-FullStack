import React from 'react'
import { useForm } from "react-hook-form";

//<==========Modelo de como seria feito o form utilizando Hook==========>

function form() {

    const { register, handleSubmit, watch, errors} = useForm;
    const clockOnSubmit = data =>{
        console.log(data);
    }
  return (
    <form onSubmit={handleSubmit()}>
        <input type="text" name="email" ref={register({required: true})}/>
        {errors.email && <span>Este campo é obrigatório!</span>}
        <input type="text" name="name" ref={register}/>
        <input type="text" name="password" ref={register}/>
        <input type="number" name="phone" ref={register}/>
        <button type="submit">Enviar</button>
    </form>
  )
}

export default form