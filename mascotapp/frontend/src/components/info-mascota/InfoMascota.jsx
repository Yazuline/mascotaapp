import { PerfilMascota } from "../perfil-mascota/PerfilMascota";
import {getMascotaById} from "../../services/serviceMascota";
import { useEffect, useState } from "react";
import { InfoNotFound } from "./InfoNotFound";

export const InfoMascota = () => {
  //const userId = localStorage.getItem("userId");
  const petData = localStorage.getItem("mascotaInfo");
  const mascotaInfo =JSON.parse(petData);
  const [userData, setData] = useState(null);

  useEffect(() => {
    const handleData = async () => {
      try{
        const res = await getMascotaById(mascotaInfo._id);
        setData(res);
        
      } catch(error) {
        console.log("ERROR: ", error.message);
      }
    }
    handleData();
  }, []);

{/*isVisible={false} */}
  return (
    <div className="mt-[8rem] p-5">
        {userData ? (
          <div>
            <h2 className="h2 text-[8vmin] sm:text-[2rem] md:text-[2rem] lg:text-[2.5rem]">Información de {userData.nombre}</h2>
            <PerfilMascota 
              isPet={true}
              isVisible={false}
              petRaza={mascotaInfo === null ? "undefined" : mascotaInfo.raza}
              petDate={mascotaInfo === null ? "undefined" : mascotaInfo.edad}
              petMedicine={mascotaInfo === null ? "undefined" : mascotaInfo.medicamento}
              petImg="/mascota.jpg"
              petDesc={userData.personalidad}
            />
          </div>
        ): (
          <div>
            <InfoNotFound 
              p1="¡Ups! No hemos encontrado datos de tu mascota."
              p2="¡No olvides registrar a tu amigo perruno!"
              imgUrl="/Question-Mark-PNG-Transparent.png"
            />
          </div>
        )}
        {/*<div className={userData ? "flex justify-end mt-[2rem]" : "invisible"}>
            <button className="bg-[#273176] w-[15rem] p-2 text-[#ffff] rounded-md hover:bg-[#525c9e] transition ease-in-out duration-1000">Ver documentos</button>
      </div>*/}
      <div className="flex justify-end mt-[2rem]">
        <img className="w-[20%] lg:w-[10rem]" src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f43e.png" alt="" />
      </div>
    </div>
  )
}
