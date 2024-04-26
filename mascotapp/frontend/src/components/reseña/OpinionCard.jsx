import "./opinionStyle.css";

export const OpinionCard = () => {
  return (
    <div className="opinion-container">
        <div className="card">
            <p className="mb-5">
                Registra a tu compañero peludo y forma parte de nuestra comunidad 
                canina. Ingresa los detalles de tu mascota, desde su nombre y 
                raza hasta sus peculiaridades únicas. ¡Únete ahora y comparte 
                la alegría de tener una mascota con otros amantes de los perros!
            </p>
            <div className="user-card">
                <img src="/22-221984_registro-png-transparent-png.png" alt="" />
                <p>Registra tu mascota</p>
            </div>
        </div>
        <div className="card">
            <p className="mb-5">
                Encuentra el cuidador perfecto para tu peludo amigo. Explora nuestra 
                red de cuidadores confiables, filtra por experiencia, ubicación y 
                servicios ofrecidos, y elige al cuidador ideal para las necesidades 
                de tu mascota. ¡Confía en nosotros para el cuidado amoroso y 
                profesional que tu mascota se merece!
            </p>
            <div className="user-card">
                <img src="/canguros_mascotas_1.jpg" alt="" />
                <p>Contrata cuidadores</p>
            </div>
        </div>
        <div className="card">
            <p className="mb-5">
                Organiza tu tiempo y reserva una cita para tu amigo peludo. Con 
                nuestra herramienta de agenda fácil de usar, selecciona la fecha 
                y hora que mejor se adapte a tu horario. ¡No pierdas tiempo y 
                asegura una atención personalizada para tu mascota hoy mismo!
            </p>
            <div className="user-card">
                <img src="/watch.jpg" alt="" />
                <p>Agenda una cita</p>
            </div>
        </div>

        {/*<div className="card">
            <p className="mb-5">
                ¡Tuve el placer de cuidar a Loki durante un fin de semana y 
                fue una experiencia increíble! Desde el momento en que llegó 
                a mi casa, Loki mostró una actitud amigable y juguetona 
                que hizo que todos nos enamoráramos de él al instante.
            </p>
            <div className="user-card">
                <img src="https://images.hola.com/imagenes/estar-bien/20221018219233/buenas-personas-caracteristicas/1-153-242/getty-chica-feliz-t.jpg?tx=w_680" alt="" />
                <p>Cinthia Juárez - Cuidadora de mascotas</p>
            </div>
  </div>*/}
    </div>
  )
}
