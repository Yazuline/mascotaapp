import { handleInfos } from "../../pages/RegistroMascotas";
import "./perfilMascotaStyle.css";
import PropTypes from 'prop-types';

export const PerfilMascota = ({ petDesc, petImg, isPet = true, isVisible = true, petRaza, petDate, moreInfo = true, petMedicine}) => {
  handleInfos();
  const userId = localStorage.getItem("userId");

  return (
    <div className={isPet ? "perfil-mascota" : "invisible"}>
        <img src={petImg} alt="" />
        <div className="info">
            <div className="special-div">
                <img src={petImg} alt="" />
                <p>
                    {petDesc}
                </p>
                <div className={moreInfo ? "mt-5" : "hidden"}>
                    <p>
                        <span className="font-bold">Raza: </span>
                        {petRaza}
                    </p>
                    <p>
                        <span className="font-bold">Fecha de nacimiento: </span>
                        {petDate}
                    </p>
                    <p>
                        <span className="font-bold">¿Debe tomar algún medicamento? </span>
                        {petMedicine}
                    </p>
                </div>
            </div>
            <div className={isVisible ? "buttons" : "invisible"}>
            <a href={`/mascota/${userId}`}>
                <button>Conocer más</button>
            </a>
            </div>
        </div>
    </div>
  )
}

PerfilMascota.propTypes = {
    linkMascota: PropTypes.any,
    petDesc: PropTypes.any,
    petImg: PropTypes.any,
    isPet: PropTypes.bool,
    isVisible: PropTypes.bool,
    petRaza: PropTypes.any,
    petDate: PropTypes.any,
    moreInfo: PropTypes.bool,
    petMedicine: PropTypes.any,
};