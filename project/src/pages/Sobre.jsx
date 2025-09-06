import { Phone, Mail, MapPin } from "lucide-react";
import imgBrasao from "../components/brasao-policia-civil-mt-logo.png";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <img
            src={imgBrasao}
            alt="Brasão da Polícia Civil de MT"
            className="mx-auto mb-4 h-[10rem] w-[10rem] object-contain"
          />
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Sobre o Sistema
          </h1>
          <p className="text-gray-600 text-lg">
            Polícia Judiciária Civil de Mato Grosso
          </p>
        </div>

        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Sistema de Pessoas Desaparecidas
          </h2>

          <p className="text-gray-600 mb-6">
            Este sistema foi desenvolvido para auxiliar cidadãos na consulta de
            registros de pessoas desaparecidas e no envio de informações que
            possam contribuir para sua localização. A plataforma conecta a
            comunidade às autoridades policiais de forma eficiente e segura.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mb-3">
            Como usar o sistema:
          </h3>

          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>
              Use os filtros de busca para encontrar registros específicos
            </li>
            <li>Clique em um card para ver detalhes completos da pessoa</li>
            <li>
              Na página de detalhes, você pode enviar informações relevantes
            </li>
            <li>Inclua fotos e descrições detalhadas quando possível</li>
            <li>
              Todas as informações são analisadas pelas autoridades competentes
            </li>
          </ul>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <h4 className="font-semibold text-blue-800 mb-2">Importante:</h4>
            <p className="text-blue-700 text-sm">
              Este sistema é uma ferramenta de auxílio. Em casos de emergência
              ou informações urgentes, contate diretamente as autoridades
              policiais.
            </p>
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contato</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-800">Telefone</p>
                <p className="text-sm text-gray-600">190 - Emergência</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-800">Email</p>
                <p className="text-sm text-gray-600">contato@pjc.mt.gov.br</p>
              </div>
            </div>

            <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
              <MapPin className="h-5 w-5 text-gray-400" />
              <div>
                <p className="font-medium text-gray-800">Endereço</p>
                <p className="text-sm text-gray-600">Cuiabá, MT</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
