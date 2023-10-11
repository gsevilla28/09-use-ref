import React, { useRef } from "react";

export const Formulario = () => {
  //   const nombre = useRef("Gerardo");
  const nombreInput = useRef();
  const apellidoInput = useRef();
  const emailInput = useRef();
  const miCaja = useRef();
  //   Este Ref nos sirve para referenciar y recoger los valores, sirve para acceder  al objeto en lugar del document.getElementById

  const mostrar = (e) => {
    e.preventDefault();
    console.log(nombreInput.current.value);
    console.log(apellidoInput.current.value);
    console.log(emailInput.current.value);

    console.log(miCaja);
    let { current: caja } = miCaja;
    caja.classList.add("fondoVerde");
    caja.innerHTML = "formulario enviado";
  };

  //   nombreInput.current.select() esta instruccion es similar al txtNombre.focus();
  return (
    <div>
      <h1>Formulario</h1>

      <div
        ref={miCaja}
        style={{ border: "2px solid white", padding: "10px", margin: "20px" }}
      >
        <h2>pruebas con useref</h2>
      </div>
      <form onSubmit={mostrar}>
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          ref={nombreInput}
        />
        <br />
        <input
          type="text"
          name="apellidos"
          placeholder="Apellidos"
          ref={apellidoInput}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="Correo Eletronico"
          ref={emailInput}
        />
        <br />

        <input type="submit" value="Enviar" />
      </form>
      <button onClick={() => nombreInput.current.select()}>
        Empezar a rellenar el formulario
      </button>
    </div>
  );
};
