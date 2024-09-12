import React from "react"
import LogoIS from "../../components/publicas/logoIS-Component"
import FormInicio from "../../components/publicas/FormInicioComponent"
import {  } from "../../styles/publicas/inicioSesion.css";

export default function InicioSesion (){
    return (
        <div className="sm:p-0  h-screen w-full md:justify-end flex pagIn">
        {/* <LogoIS />   */}
        <FormInicio />
        </div>
    )
}