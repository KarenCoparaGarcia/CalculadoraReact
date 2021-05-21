import React, { useState } from "react";

export default function Calculo() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [numero3, setNumero3] = useState("");
  const [numero4, setNumero4] = useState("");
  const [resultado, setResultado] = useState("");
  const [total, setTotal] = useState("");
  const [accion, setAccion] = useState("");
  const Accion = (e) => {
    e.preventDefault();
    if (accion === "Sumar") {
      setResultado(numero1);
      setTotal(Number(numero1) + Number(numero1));
    } else if (accion === "Restar") {
      setResultado(numero2);
      setTotal(Number(numero2) - Number(numero2));
    } else if (accion === "Multiplicar") {
      setResultado(numero3);
      setTotal(Number(numero3) * Number(numero3));
    } else if (accion === "Dividir") {
      setResultado(numero4);
      setTotal(Number(numero4) / Number(numero4));
    }
  };
  const Limpiar = () => {
    setTotal("");
    setNumero1("");
    setResultado("");
    setNumero2("");
    setNumero3("");
    setNumero4("");
    setAccion("");
  };
  return (
    <div className="caja">
      <div className="segundacaja">
        <div>
          <form onSubmit={Accion}>
            <input
              type="text"
              value={numero1}
              required
              onChange={(e) => setNumero1(e.target.value)}
            ></input>
            <button onClick={() => setAccion("Sumar")}>Sumar</button>
          </form>
          <form onSubmit={Accion}>
            <input
              type="text"
              value={numero2}
              required
              onChange={(e) => setNumero2(e.target.value)}
            ></input>
            <button onClick={() => setAccion("Restar")}>Restar</button>
          </form>
          <form onSubmit={Accion}>
            <input
              type="text"
              value={numero3}
              required
              onChange={(e) => setNumero3(e.target.value)}
            ></input>
            <button onClick={() => setAccion("Multiplicar")}>
              Multiplicar
            </button>
          </form>
          <form onSubmit={Accion}>
            <input
              type="text"
              value={numero4}
              required
              onChange={(e) => setNumero4(e.target.value)}
            ></input>
            <button onClick={() => setAccion("Dividir")}>Dividir</button>
          </form>
        </div>
      </div>
      <div className="resultado">
        <button className="total" onClick={Limpiar} >Total:</button>
        <label>{total}</label>
        <label>
          {accion}: {resultado}
        </label>
      </div>
    </div>
  );
}
