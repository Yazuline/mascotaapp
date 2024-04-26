import { PerfilCliente } from "../../components/perfil-cliente/PerfilCliente";
import { PerfilMascota } from "../../components/perfil-mascota/PerfilMascota";
import { OpinionCard } from "../../components/reseña/OpinionCard";
import { getUsuarioById } from "../../services/serviceUsuario.ts";
import moment from 'moment';
import { useEffect, useState } from "react";
import { handleInfos } from "../RegistroMascotas.jsx";
import "./clientStyle.css";

export const ClientSection = () => {
  handleInfos();
  const [userData, setData] = useState(null);

  //obteniendo id de usuario e info de mascota
  const userId = localStorage.getItem("userId");
  const petData = localStorage.getItem("mascotaInfo");
  
  //En caso de que petData sea nulo
  const mascotaInfo = petData === "undefined" || petData === null ? null : JSON.parse(petData);
  console.log("mascota: ", mascotaInfo);

  //Imagen proporcionada en caso de que la imagen del usuario no exista
  const defaultPhoto = "/user-profile.webp";

  console.log("data: ", mascotaInfo);

  //Carga de datos
  useEffect(() => {
    const handleData = async () => {
      try{
        const res = await getUsuarioById(userId); //buscar usuario
        const testImage = new Image();
        testImage.onload = () => {
          setData(res);
        };

        //En caso de que la imagen no haya cargado
        testImage.onerror = () => {
          res.urlfoto = defaultPhoto;
          setData(res);
        };
        testImage.src = res.urlfoto;

      } catch(error) {
        console.log("ERROR: ", error.message);
      }
    }

    handleData();
  }, []);


  return (
    <div className="client-section">
        {userData && (
          <div>
            <PerfilCliente 
              urlImagen={userData.urlfoto}
              nombre={userData.nombre}
              mascota={mascotaInfo === null || userId !== mascotaInfo.usuarioId ? <span className="text-[#e74457]">Sin registrar</span> : mascotaInfo.nombre}
              telefono={userData.telefono}
              correo={userData.email}
              fecha={moment(userData.fecha).format('YYYY')}
              disableBtn={mascotaInfo?.usuarioId !== userId || mascotaInfo?.usuarioId === null ? false : true}
              aLink={`/reservas/${userId}`}
            />
            <PerfilMascota 
              isPet={mascotaInfo?.usuarioId !== userId || mascotaInfo?.usuarioId === null ? false : true}
              petDesc={mascotaInfo === null ? "undefined" : mascotaInfo.personalidad}
              petImg="/mascota.jpg"
              moreInfo={false}
            />
          </div>
        )}
        <h2>Sigue estos pasos</h2>
        <OpinionCard />
    </div>
  )
}
