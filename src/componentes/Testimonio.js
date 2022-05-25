import React from "react";
import '../css/Testimonio.css';

export function Testimonio() {
  return (
    <div className="contenedor-testimonio">
      <img className="imagen-testimonio"
        src={require("../imagenes/ing1.png")}
        alt="ing1" />
      <div className="contenedor-texto-testimonio">
        <p className="nombre-testimonio">Ingeniero 1</p>
        <p className="cargo-testimonio">Ingeniero Software</p>
        <p className="texto-testimonio">La Ingeniería de Software es una de las ramas de las ciencias de la
          computación que estudia la creación de software confiable y de calidad, basándose en métodos y técnicas
          de ingeniería, y brindando soporte operacional y de mantenimiento</p>
      </div>
    </div>
  );
};

