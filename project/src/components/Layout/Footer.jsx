import imgBrasao from "../brasao-policia-civil-mt-logo.png";

export const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-3 mb-4 md:mb-0">
            <img
              src={imgBrasao}
              alt="Brasão da Polícia Civil de MT"
              className="h-12 w-12 w-[3rem] h-[3rem] object-contain"
            />
            <div>
              <h3 className="font-semibold">PJCMT</h3>
              <p className="text-sm text-gray-300">
                Polícia Judiciária Civil de Mato Grosso
              </p>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-300">
              Sistema de Pessoas Desaparecidas
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Desenvolvido para auxiliar na localização de pessoas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
