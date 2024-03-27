import React, { useState } from 'react'
import { useForm } from "react-hook-form"

const ContactSection = () => {
  const { register, handleSubmit } = useForm()
  const [success, setSuccess] = useState()

  const sendDataEmail = (data) => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/send`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response body as JSON
    })
    .then(data => {
      setSuccess("Formulario enviado! Nos contactaremos a la brevedad")
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
  }
  const onSubmit = (data) => sendDataEmail(data)

  return (
    <div id="contact-section" className="my-8 py-8 px-4 mx-2 w-[calc(100vw-1rem-2px)] max-w-screen-xl md:mt-16 bg-gray-50 border border-gray-200 rounded-lg shadow">
      <h1 className="text-4xl font-bold tracking-tight mb-10 text-center">Contactanos</h1>
      <div className="gap-6 flex justify-around items-center w-full">
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900">Nombre</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="Juan Perez"
              {...register("fullName", { required: true, pattern: /^[A-Za-z\s]+$/i })}
            />
          </div>
          <label htmlFor="input-group-1" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
          <div className="relative mb-6">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
              </svg>
            </div>
            <input
              type="text"
              id="input-group-1"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
              placeholder="info@superchem.com.ar"
              {...register("mail", {
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address"
                }
              })} />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Empresa</label>
              <input
                type="text"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Tu empresa"
                {...register("company", {
                  required: false
                })}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Número de teléfono</label>
              <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="541166525252"
                {...register("phone", {
                  required: false
                })}
              />
            </div>
          </div>
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Tu mensaje</label>
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Contanos sobre tu proyecto y tus objetivos. ¿Como podemos ayudarte?"
            {...register("message", {
              required: false
            })}
          ></textarea>
          <button type="submit" className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Enviar</button>
          {success && <span className="mt-6 text-[#52b963]">{success}</span>}
        </form>
        <img src="/distillation-sketch.png" className="hidden sm:block" />
      </div>
    </div>
  )
}

export default ContactSection