const TitlesPanel = () => {
  return (
    <div className="mb-5 flex justify-around bg-slate-200 py-5 px-7 gap-5 rounded-md overflow-y-scroll text-[2vmin] sm:text-[2vmin] md:text-[2vmin] lg:text-[2vmin]">
      <p className="text-center w-full md:w-auto mb-2 md:mb-0 md:mr-4">Id</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4">Nombre</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4">Fecha registro</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4">Dirección</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 hidden md:block">Teléfono</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 md:hidden">E-mail</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4 hidden md:block">Monto</p>
      <p className="w-full md:w-auto mb-2 md:mb-0 md:mr-4">Modificar</p>
    </div>
  );
};

export default TitlesPanel;
