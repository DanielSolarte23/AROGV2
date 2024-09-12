import React from "react";
import imagen from "../../images/imagenVenta.jpg";
import foto from "../../images/imagenRecoleccion.jpg";
import fotis from "../../images/imagenEstudioi.jpg";

export default function Pagina() {
  return (
    <div className=" container m-auto h-screen">
      <section id="Servicios" className=" flex-col flex items-center h-full">
        <div className="h-[12%]"></div>
        <article className=" w-full h-[12%] flex justify-center items-center">
          <h1 className="text-center text-3xl font-semibold">
            NUESTROS SERVICIOS
          </h1>
        </article>
        <section className=" grid grid-cols-3 w-full  h-[86%] px-5">
          <article className="flex flex-col justify-evenly items-center py-5 px-5">
            <div className="w-48 h-48 flex-shrink-0 rounded-full border-4 border-lime-600 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={imagen}
                alt="imagen"
              />
            </div>

            <h2 className="font-bold text-2xl">Recolección</h2>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus.
            </p>
          </article>
          <article className="flex flex-col justify-evenly items-center py-5 px-5">
            <div className="w-48 h-48 flex-shrink-0 rounded-full border-4 border-lime-600 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={imagen}
                alt="imagen"
              />
            </div>

            <h2 className="font-bold text-2xl">Recolección</h2>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus.
            </p>
          </article>
          <article className="flex flex-col justify-evenly items-center  py-5 px-5">
            <div className="w-48 h-48 flex-shrink-0 rounded-full border-4 border-lime-600 overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={imagen}
                alt="imagen"
              />
            </div>

            <h2 className="font-bold text-2xl">Recolección</h2>
            <p className="text-justify">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus.
            </p>
          </article>
        </section>
      </section>
    </div>
  );
}
