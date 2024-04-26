import "./perfilStyle.css";
import PropTypes from 'prop-types';
import CreateIcon from '@mui/icons-material/Create';
import { useState } from "react";
import ResponsiveDialog from "./ResponsiveDialog";

export const PerfilCliente = ({urlImagen, nombre, mascota, telefono, correo, fecha, disableBtn, aLink}) => {
    const [open, setOpen] = useState(false);
    //const userId = localStorage.getItem("userId");

    const handleClickOpen = () => {
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
    };
  return (
   <div className="client-containers">
        <div className="profile">
            <img src={urlImagen}/>
            <div>
                <h2>
                    {nombre}
                    <CreateIcon className="ml-2 icon" onClick={handleClickOpen}/>
                </h2>
                <h4><span className="font-bold">Dueño/a de: </span>{mascota}</h4>
                <p><span className="font-bold">Teléfono: </span>{telefono}</p>
                <p className="mb-5"><span className="font-bold">Correo: </span> {correo}</p>
                <p>Es parte de Mascotaland desde <span className="font-bold">{fecha}</span></p>
            </div>
        </div>
        <div className="buttons">
            <button onClick={handleClickOpen}>Editar información</button>
            <ResponsiveDialog open={open} handleClose={handleClose}/>
            <a href={aLink}>
                <button>Historial de reservas</button>
            </a>
            <a href="/registro-mascotas">
                <button className={disableBtn ? "disable" : ""} disabled={disableBtn}>Agregar mascota</button>
            </a>
        </div>
    </div>
  )
}

PerfilCliente.propTypes = {
    urlImagen: PropTypes.any,
    nombre: PropTypes.any,
    mascota: PropTypes.any,
    telefono: PropTypes.any,
    correo: PropTypes.any,
    fecha: PropTypes.any,
    disableBtn: PropTypes.bool,
    aLink: PropTypes.any,
};
  
