import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { editUsuario } from '../../services/serviceUsuario';
import Swal from 'sweetalert2';
import PropTypes from 'prop-types';

export default function ResponsiveDialog({ handleClose, open }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const userId = localStorage.getItem("userId");

    const handleData = async (values) => {
      try{
        await editUsuario(userId, values);

        Swal.fire({
          icon: 'success',
          title: 'Su información se ha actualizado',
          confirmButtonColor: '#3e43a8',
          confirmButtonText: 'Entendido'
        }).then(() => {
          window.location.reload();
        });

      } catch(error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Credenciales incorrectas",
          confirmButtonColor: '#d33',
          confirmButtonText: 'Entendido'
        });
        console.log("ERROR: ", error.message);
      }
    }


  const validationSchema = Yup.object({
    nombre: Yup.string().required('El nombre es obligatorio'),
    apellido: Yup.string().required('El apellido es obligatorio'),
    telefono: Yup.string().required('El teléfono es obligatorio'),
    email: Yup.string().email('Formato de correo electrónico inválido').required('El correo es obligatorio'),
  });

  const formik = useFormik({
    initialValues: {
      nombre: '',
      apellido: '',
      telefono: '',
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleData(values);
      handleClose();
    },
  });


  return (
    <React.Fragment>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle id="responsive-dialog-title">{"Perfil"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Actualiza tu perfil
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="nombre"
              name="nombre"
              label="Nombre"
              type="text"
              fullWidth
              value={formik.values.nombre}
              onChange={formik.handleChange}
              error={formik.touched.nombre && Boolean(formik.errors.nombre)}
              helperText={formik.touched.nombre && formik.errors.nombre}
            />
            <TextField
              autoFocus
              margin="dense"
              id="apellido"
              name="apellido"
              label="Apellido"
              type="text"
              fullWidth
              value={formik.values.apellido}
              onChange={formik.handleChange}
              error={formik.touched.apellido && Boolean(formik.errors.apellido)}
              helperText={formik.touched.apellido && formik.errors.apellido}
            />
            <TextField
              margin="dense"
              id="telefono"
              name="telefono"
              label="Teléfono"
              type="text"
              fullWidth
              value={formik.values.telefono}
              onChange={formik.handleChange}
              error={formik.touched.telefono && Boolean(formik.errors.telefono)}
              helperText={formik.touched.telefono && formik.errors.telefono}
            />
            <TextField
              margin="dense"
              id="email"
              name="email"
              label="email"
              type="email"
              fullWidth
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancelar
            </Button>
            <Button type="submit" color="primary">
              Actualizar
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}

ResponsiveDialog.propTypes = {
  handleClose: PropTypes.any,
  open: PropTypes.any,
};

