import React from "react";
import "../../styles/publicas/inicioSesion.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function FormInicio() {
  return (
    <div className="w-full sm:w-full md:h-screen md:w-1/2 md:p-0  h-screen lg:w-2/4 flex flex-col justify-evenly xl:px-14 mr-16">
      <div className="h-5/6 p-8 rounded-2xl form-filter">
        <div className="h-1/6 flex justify-center items-center">
          <h1 className="bienv text-2xl xl:text-2xl">
            BIENVENIDO
          </h1>
        </div>
        <form className="flex flex-col w-full  h-full  items-center xl:h-5/6">
          <div className="h-2/5 w-full px-4">
            <div className="relative h-1/2 p-1">
              <input
                className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2 md:text-base xl:text-lg"
                type="text"
                placeholder="Nombre de usuario"
              ></input>
              <i className="fa-solid fa-user absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal"></i>
            </div>
            <div className="relative  h-1/2 -mb-5 p-1">
              <input
                className=" pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2 md:text-base xl:text-lg"
                type="password"
                placeholder="Contraseña"
              ></input>
              <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal"></i>
            </div>
          </div>
          <div className="h-1/5 w-full flex flex-col justify-center px-4">
            <p className="text-base gap-3 flex   whitespace-nowrap">
              ¿Olvido su contraseña?
              <strong className="text-verde-principal font-medium"> Recuperar</strong>
            </p>
            <p className=" flex text-base gap-3 ">
              ¿No tiene una cuenta?
              <strong className="text-verde-principal font-medium"> Crear cuenta</strong>
            </p>
          </div>
          <div className="h-2/5  w-full flex flex-col justify-evenly items-center">
            <button className="bg-verde-principal w-1/2 p-2 font-semibold text-white rounded-xl  hover:bg-gray-200 hover:text-verde-principal transition">
              <Link to="/PPrincipal">Iniciar sesión</Link>
            </button>
            <button className="bg-gray-200 w-1/2 p-2 py-3 text-sm transition-opacity text-black whitespace-nowrap rounded-xl flex items-center gap-1 md:text-base justify-between">
              <img
                className=" w-5"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII="
              />
              Continuar con google
              <div className="w-5"></div>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
