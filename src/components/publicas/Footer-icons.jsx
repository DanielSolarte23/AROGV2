import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className=" flex w-full h-[10%]  items-center px-[6.5rem]">
      {/* contenedor de redes sociales */}
      <div className=" flex gap-5">
        <i className="fa-brands fa-facebook text-2xl  text-zinc-800"></i>
        <i className="fa-brands fa-instagram text-2xl  text-zinc-800"></i>
        <i className="fa-brands fa-tiktok text-2xl  text-zinc-800"></i>
        <i className="fa-brands fa-whatsapp text-2xl text-zinc-800"></i>
      </div>
    </footer>
  );
}
