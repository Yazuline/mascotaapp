import { Navigate, useParams } from "react-router-dom";
import InfoCuidador from "../components/cuidador-profile/InfoCuidador";
import ItemsCuidador from "../components/cuidador-profile/ItemsCuidador";

import { useEffect, useState } from "react";
import { getUsuarioById } from "../services/serviceUsuario";

//Importo la informacion de mis usuarios ejemplos
/*const getCuidadorById = (_id) => {
  return usuarioCuidador.find((cuidador) => cuidador._id === _id);
};*/

const PageCuidador = () => {
  const [cuidadorData, setCuidadorData] = useState(null);
  
  const cuidadorId = localStorage.getItem("cuidadorId");
  console.log(cuidadorId);

  useEffect(() => {
    const handleData = async () => {
      const cuidador = await getUsuarioById(cuidadorId);
      setCuidadorData(cuidador);
  
      if (!cuidador) {
        return <Navigate to="/cuidadores" />;
      }
    }

    handleData();
  },[])

  
  // Lista de fotos aleatorias
  const fotosAleatorias = [
    "https://i0.wp.com/blog.cuidamimascota.com/wp-content/uploads/2020/01/25056-vetdog.png?fit=320%2C248&ssl=1",
    "https://www.rover.com/blog/wp-content/uploads/2019/05/caracteristicas-de-un-buen-cuidador-de-perros-close-up-de-un-bulldog-ingles-dando-un-paseo-copia-e1438101554942.jpg",
    "https://assets.petbacker.com/user-images/320/u_de0a1c4d3f.64b599043990b.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkerpWZ_Z8GA3cTMKwwHcVyBzILnQ8bq2shsC0T1CLjw&s",
    "https://resizer.glanacion.com/resizer/v2/el-inedito-sueldo-como-cuidador-de-perros-que-GNVUMAES6JH6XK6UZ4YILNH35Q.png?auth=9511cd2943983289cc12f0adde99369e8b31bcfb5ac1164d5a82f3128aa8fce0&width=768&quality=70&smart=false",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrE0HwWBncxDcZg0wKZ_IZC9URBOauFuv7hoKlPRgPNA&s",
    "https://v.fastcdn.co/t/dacf0b1a/243febb0/1698785697-55285111-460x500-Untitled-design-22-1.jpg"
  ];

  // Función para seleccionar una foto aleatoria
  const seleccionarFotoAleatoria = () => {
    const indiceAleatorio = Math.floor(Math.random() * fotosAleatorias.length);
    return fotosAleatorias[indiceAleatorio];
  };

  return (
    <section className="mt-[10rem] mb-16">
      <h2 className="max-w-sm mx-auto md:max-w-md lg:max-w-lg h3 md:h2 text-center px-2">
        Conoce al próximo cuidador de tu mascota
      </h2>
      <article className="mt-10 md:mt-[5rem] max-w-sm mx-auto sm:max-w-xl md:max-w-2xl lg:max-w-4xl xl:max-w-6xl flex flex-col gap-20">
        <div className="mx-auto">
        {cuidadorData && (
          <InfoCuidador
            _id={cuidadorData._id}
            nombre={cuidadorData.nombre}
            apellido={cuidadorData.apellido}
            urlfoto={seleccionarFotoAleatoria()}
            telefono={cuidadorData.telefono}
            email={cuidadorData.email}
            barrio={cuidadorData.barrio}
            sobreti={cuidadorData.sobreti}
            isDec={cuidadorData.sobreti}
            servicio={cuidadorData.servicio}
            precioservicio={cuidadorData.precioservicio ? `${cuidadorData.precioservicio}` : 200}
          />
          )}
        </div>
        <ItemsCuidador />
      </article>
    </section>
  );
};

export default PageCuidador;