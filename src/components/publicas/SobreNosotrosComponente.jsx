import images from "../../images/imagenEstudioi.jpg";

export default function SobreNosotros() {
  return (
    <main
      id="SobreNosotros"
      className="w-full h-screen flex flex-col items-center"
    >
      <div className="h-[12%]"></div>
      <div className=" text-2xl w-full h-[12%] flex justify-center items-center font-bold">
        <h1 className="text-3xl">SOBRE NOSOTROS</h1>
      </div>
      <div className="flex w-full h-[74%] px-5">
        {/* Sección de la imagen */}
        <div className="flex w-1/2  p-14 justify-center">
          <div className=" w-5/6 ">
            <img src={images} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Sección del texto */}
        <div className="flex w-1/2 px-14 h-full items-center">
          <div className="h-1/2">
            <p className="text-base  text-justify">
              La Asociación de Reciclaje Goleros nació en 2018 con un propósito
              claro: transformar la gestión de residuos en nuestra comunidad y
              promover prácticas sostenibles. Un grupo de vecinos preocupados
              por el creciente problema de la basura decidió unirse y crear una
              solución que involucrara a todos los ciudadanos.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
