import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    nombre: "",
    correo: "",
    comentario: "",
  });

  /**
   *
   * Función para capturar los inputs
   */
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  /**
   * Función para enviar al servidor
   */
  const handleSendForm = (e) => {
    e.preventDefault();
    console.log("Enviando");

    console.log(data);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 place-items-center h-auto mx-4 sm:grid sm:grid-cols-1 md:grid md:grid-cols-1">
      <div className="md:order-1 w-full md:w-1/2">
        <h1 className="py-4 text-dark dark:text-light text-4xl">Contacto</h1>
        <form className="font-display" onSubmit={handleSendForm}>
          <label className="blocktext-dark dark:text-light">
            <span className="block text-sm font-medium text-dark dark:text-light">
              Nombre
            </span>
            <input
              name="nombre"
              value={data.nombre}
              onChange={handleInputChange}
              type="text"
              className="dark:bg-dark mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
          </label>

          <label className="block text-dark dark:text-light">
            <span className="block text-sm font-medium text-dark dark:text-light">
              Correo
            </span>
            <input
              name="correo"
              value={data.correo}
              onChange={handleInputChange}
              type="email"
              className="dark:bg-dark mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
            />
            <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p>
          </label>
          <label className="block text-dark dark:text-light">
            <span className="block text-sm font-medium text-dark dark:text-light">
              Comentarios
            </span>
            <textarea
              name="comentario"
              value={data.comentario}
              onChange={handleInputChange}
              className="dark:bg-dark mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 resize-none"
              rows="4"
            ></textarea>
          </label>

          <button className="my-4 bg-dark dark:bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 text-white font-semibold py-2 px-4 rounded-md">
            Enviar
          </button>
        </form>
      </div>
      <div className="md:order-2 w-full md:w-1/2 sm:w-full sm:mb-4">
        <img
          src="logo.png"
          className="w-40 h-auto md:w-96 mx-auto"
          alt="logo"
        />
      </div>
    </div>
  );
};

export default Contact;
