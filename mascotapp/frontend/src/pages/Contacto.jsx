import {
  FieldForm,
  InputForm,
  LabelForm,
  TextAreaForm,
} from "../styles/CuidadorRegistroStyled";
import { useFormik } from "formik";
import * as Yup from "yup";
import TextError from "../components/text-error/TextError";
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import Swal from "sweetalert2";

/* EN PROCESO */
const Contacto = () => {
  const form = useRef();
  const validationSchemaForm = Yup.object({
    nombre: Yup.string().trim().required("Ingresa tu nombre. Ej: Jorge"),
    apellido: Yup.string().trim().required("Ingresa tu apellido. Ej: Pérez"),
    correo: Yup.string()
      .email("Formato de correo inválido")
      .required("Ingresa tu correo eléctronico"),
    descripcion: Yup.string().trim().required("Por favor escriba su pregunta"),
  });

  const initialValues = {
    nombre: "",
    apellido: "",
    correo: "",
    descripcion: "",
  };

  const enviarForm = (values) => {
    console.log(values);
  };

  const sendEmail = () => {
    emailjs
      .sendForm('service_rys7tcj', 'template_zx87jjd', form.current, {
        publicKey: '3SL72t_Qn7xcaDa9_',
      })
      .then(
        () => {
          console.log('CORREO ENVIADO!');
        },
        (error) => {
          console.log('ERROR...', error.message);
        },
      );
  };

  const {
    touched,
    handleSubmit,
    handleChange,
    errors,
    values,
    getFieldProps,
    handleBlur,
  } = useFormik({
    initialValues,
    validationSchema: validationSchemaForm,
    onSubmit: (values, { resetForm }) => {
      sendEmail();
      enviarForm(values);
      Swal.fire({
        icon: 'success',
        title: '¡Mensaje enviado!',
        text: 'Nos pondremos en contacto contigo lo antes posible',
        showConfirmButton: false,
        timer: 2000
      })
      resetForm();
    }
  });
  return (
    <form action="" className="p-3 mt-10 mx-auto max-w-lg mt-[5rem]" ref={form} onSubmit={handleSubmit}>
      <h2 className="h2 text-[8vmin] text-center my-10 text-color-3 sm:text-[2rem] md:text-[2.5rem] lg:text-[2.5rem]">
        Contáctate con nosotros
      </h2>
      <fieldset  className="grid grid-cols-1 gap-6">
        <FieldForm>
          <LabelForm htmlFor="nombre">
            Nombre <span>*</span>
          </LabelForm>
          <InputForm
            type="text"
            name="nombre"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.nombre}
            error={touched.nombre && errors.nombre}
            {...getFieldProps("nombre")}
            placeholder="Ingresa tu nombre"
          />
          {touched.nombre && errors.nombre && (
            <TextError>{errors.nombre}</TextError>
          )}
        </FieldForm>

        <FieldForm>
          <LabelForm htmlFor="apellido">
            Apellido <span>*</span>
          </LabelForm>
          <InputForm
            type="text"
            name="apellido"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.apellido}
            error={touched.apellido && errors.apellido}
            {...getFieldProps("apellido")}
            placeholder="Ingresa tu apellido"
          />
          {touched.apellido && errors.apellido && (
            <TextError>{errors.apellido}</TextError>
          )}
        </FieldForm>

        <FieldForm>
          <LabelForm htmlFor="correo">
            Correo <span>*</span>
          </LabelForm>
          <InputForm
            type="email"
            name="correo"
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.correo}
            error={touched.correo && errors.correo}
            {...getFieldProps("correo")}
            placeholder="Ingresa tu correo"
          />
          {touched.correo && errors.correo && (
            <TextError>{errors.correo}</TextError>
          )}
        </FieldForm>

        <FieldForm>
          <LabelForm htmlFor="descripcion">
            Deja tu mensaje <span>*</span>
          </LabelForm>
          <TextAreaForm 
            type="text" 
            rows="4" 
            cols="33" 
            name="descripcion" 
            onBlur={handleBlur}
            onChange={handleChange}
            value={values.descripcion}
            error={touched.descripcion && errors.descripcion}
            {...getFieldProps("descripcion")}
          />
          
        </FieldForm>
      </fieldset>
      <div className="mt-10 mx-auto max-w-lg flex flex-col">
        <button
          type="submit"
          className="w-full px-4 py-2 flex items-center justify-center bg-color-3 text-white rounded-md"
        >
          Enviar
        </button>
      </div>
    </form>
  );
};

export default Contacto;
