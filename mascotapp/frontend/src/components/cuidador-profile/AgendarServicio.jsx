import { useFormik } from "formik";
import {
  FieldForm,
  InputForm,
  LabelForm,
} from "../../styles/CuidadorRegistroStyled";

import * as Yup from "yup";
import TextError from "../text-error/TextError";
import SimpleAlert from "./AlertMessage";
import { useContext, useState } from "react";
import { AuthContext } from "../../auth";
import { Link } from "react-router-dom";
import { addReserva } from "../../services/serviceReserva";
import { handleInfos } from "../../pages/RegistroMascotas";
//import Swal from "sweetalert2";

const AgendarServicio = ({ _id, servicio, precioservicio, nombre }) => {
  //Abrir alerta de enviado para informacion de usuario
  handleInfos();
  const [alertOpen, setAlertOpen] = useState(false);
  const userId = localStorage.getItem("userId");
  const petData = localStorage.getItem("mascotaInfo");
  
  //En caso de que petData sea nulo
  const mascotaInfo = petData === "undefined" || petData === null ? null : JSON.parse(petData);

  const closeModal = () => {
    setAlertOpen(!alertOpen);
    console.log("Cerrado");
  };

  const initialValues = {
    fechaDelServicio: "",
    cuidadorId: _id,
    servicio: servicio,
    precioservicio: precioservicio,
  };

  const validationSchema = Yup.object({
    fechaDelServicio: Yup.date().required("Fecha de servicio requerida"),
  });

  const enviarReserva = async (values, { resetForm }) => {
    const idMascota = mascotaInfo._id; 
    const { cuidadorId, servicio, precioservicio } = values;
    let { fechaDelServicio } = values; // Mantener una copia de la fecha original

    // Convertir la fecha a una cadena en formato ISO 8601
    fechaDelServicio = new Date(fechaDelServicio).toISOString();
  
    const fechaActual = new Date();
    const fechaDeCreacion = fechaActual.toISOString();

    const data = {
      usuarioId: userId, // Obtener el id de usuario
      cuidadorId: cuidadorId,
      mascotaId: idMascota, // Obtener el id de la mascota
      servicio,
      fechaDelServicio,
      precioDelServicio: precioservicio,
      estado: "Pendiente", // Se enviará el estado
      fechaDeCreacion,
    };
  
    try {
      await addReserva(data);
      console.log("res: ", data);
      
      
    } catch(error) {
      console.log("res: ", data);
      console.log("ERROR: ", error);
    }
  
    setAlertOpen(true);
    resetForm();
  }


  const {
    touched,
    handleSubmit,
    handleChange,
    values,
    errors,
    getFieldProps,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: enviarReserva,
  });

  const { logged } = useContext(AuthContext);

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-5" id={_id}>
          <FieldForm>
            <LabelForm $width="150px">Selecciona el día</LabelForm>
            <InputForm
              $width="300px"
              type="date"
              min={new Date().toISOString().split("T")[0]}
              name="fechaDelServicio"
              onChange={handleChange}
              value={values.fechaDelServicio}
              error={touched.fechaDelServicio && errors.fechaDelServicio}
              {...getFieldProps("fechaDelServicio")}
            />
            {touched.fechaDelServicio && errors.fechaDelServicio && (
              <TextError block>{errors.fechaDelServicio}</TextError>
            )}
          </FieldForm>
          <div className="flex flex-col gap-5 sm:gap-10 sm:flex sm:flex-row justify-center">
            <FieldForm>
              <LabelForm $width="150px">Servicio</LabelForm>
              <span>{servicio}</span>
            </FieldForm>
            <FieldForm>
              <LabelForm $width="80px">Precio</LabelForm>
              <span>{precioservicio}</span>
            </FieldForm>
          </div>
          <div className="mx-auto">
            {logged ? (
              <button
                type="submit"
                className="bg-color-3 text-white p-3 rounded-md"
              >
                <a className="px-3 py-2">Reservar Turno</a>
              </button>
            ) : (
              <button className="bg-color-3 text-white p-3 rounded-md">
                <Link to={"/entrar"}>Reservar turno</Link>
              </button>
            )}
          </div>
          <span className="text-center text-gray-400 text-sm">
            ID: #{_id} cuidador
          </span>
        </fieldset>
      </form>
      <SimpleAlert open={alertOpen} onClose={closeModal} nombre={nombre} />
    </>
  );
};

export default AgendarServicio;
