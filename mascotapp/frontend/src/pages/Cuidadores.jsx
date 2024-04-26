import {  usuarioCuidador } from "../data/users.ts";
import ListCuidadores from "../components/ListCuidadores.jsx";
import { getUsuarios } from "../services/serviceUsuario.ts";
import { useEffect, useState } from "react";

const Cuidadores = () => {
  const [cuidadorData, setCuidador] = useState(null);
  const [fotos, setFotos] = useState(null);

  useEffect(() => {
    const handleCuidadorInfo = async () => {
      const data = await getUsuarios();
      const buscarRole = data.filter(values => values.role === "cuidador");
      const urlFotos = usuarioCuidador.map(cuidador => cuidador.urlfoto);
      setCuidador(buscarRole);
      setFotos(urlFotos);
    }

    handleCuidadorInfo();
  },[]);
  
  const handleClick = (_id) => {
    localStorage.setItem("cuidadorId", _id);
  };

  return (
    <section className="xl:max-w-screen-xl lg:max-w-screen-lg md:max-w-screen-md sm:max-w-screen-sm m-auto mt-[5rem]">
      <div className="text-center p-8 leading-10">
        <h2 className="h2 animate-translateText">Cuidadores de Mascotas</h2>
        <p className="leading-6 mt-3">
          Conoce los servicios y precios que ofrecen, así como su ubicación y
          condiciones
        </p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-12 my-7">
      {cuidadorData && fotos.map((urlfoto, index) => (
          <div key={index}>
            <ListCuidadores
              _id={cuidadorData[index]._id}
              nombre={cuidadorData[index].nombre}
              urlfoto={urlfoto}
              barrio={cuidadorData[index].barrio}
              servicio={cuidadorData[index].servicio}
              sobreti={cuidadorData[index].sobreti}
              onClick={() => handleClick(cuidadorData[index]._id)} // Agregar onClick
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cuidadores;
