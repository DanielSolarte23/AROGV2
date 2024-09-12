import React from "react";
import "../../styles/homePage.css"


export default function imgFondo() {
  return (
    <div id="Inicio" className="w-full contenedor-bienvenida  h-[90%] px-28">
      {/* Contenedor de la imagen y texto */}
      <div className="h-[21%] w-full"></div>
      <section className="w-full mt-3 h-3/4 flex static  rounded-2xl bg-cover bg-center  bg-no-repeat bg-[url('src/images/textura-hoja-verde.jpg')] bg-slate-500">
        <img
          className="absolute top-[70px] right-1  h-[87%]"
          src="src/images/gif-cell-phone.gif"
          alt="cell phone"
        />
        <article className=" h-full flex flex-col justify-center pl-14  p-2  text-3xl  text-white">
          <p className=" text-shadow-2xl">Asociasion de <br /></p>
          <p className=" text-shadow-2xl -mt-3">Recicladores de oficio</p>
          <h1 className="text-shadow-2xl text-[4rem] font-bold">GOLEROS</h1>
        </article>
      </section>
    </div>
  );
}
