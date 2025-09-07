import { Calendar, MapPin, User, Eye } from "lucide-react";
import { StatusBadge } from "../UI/StatusBadge";
import { formatDate, formatDateTime } from "../../utils/masks";

export const PersonDetails = ({ person }) => {
  const InfoItem = ({ icon: Icon, label, value }) => {
    if (!value) return null;
    console.log(person);

    return (
      <div className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
        <Icon className="h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0" />
        <div>
          <span className="text-sm font-medium text-gray-700">{label}:</span>
          <p className="text-gray-900">{value}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        {person.urlFoto ? (
          <img
            src={person.urlFoto}
            alt={`${person.nome} ${person.sobrenome}`}
            className="w-full h-64 md:h-80 object-cover"
          />
        ) : (
          <div className="w-full h-64 md:h-80 bg-gray-200 flex items-center justify-center">
            <User className="h-24 w-24 text-gray-400" />
          </div>
        )}

        <div className="absolute top-4 right-4">
          <StatusBadge status={person.status} size="large" />
        </div>
      </div>

      <div className="p-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {person.nome} {person.sobrenome}
          </h1>
          <p className="text-gray-600">
            Registrado em {formatDateTime(person.created_at)}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <InfoItem
            icon={User}
            label="Idade"
            value={person.idade != null ? `${person.idade} anos` : null}
          />
          <InfoItem
            icon={User}
            label="Sexo"
            value={person.sexo != null ? person.sexo : null}
          />
          <InfoItem
            icon={Calendar}
            label="Data do desaparecimento"
            value={
              person.ultimaOcorrencia?.dtDesaparecimento
                ? formatDate(person.ultimaOcorrencia.dtDesaparecimento)
                : null
            }
          />
          <InfoItem
            icon={MapPin}
            label="Local Desaparecimento"
            value={person.ultimaOcorrencia?.localDesaparecimentoConcat || null}
          />
        </div>

        <InfoItem
          icon={MapPin}
          label="Local do desaparecimento"
          value={person.local_desaparecimento}
        />
        <div className="space-y-4">
          <InfoItem
            icon={Eye}
            label="Informações Adicionais"
            value={
              person.ultimaOcorrencia?.ocorrenciaEntrevDesapDTO?.informacao !=
              null
                ? person.ultimaOcorrencia.ocorrenciaEntrevDesapDTO.informacao
                : "Nenhuma informação adicional fornecida."
            }
          />
        </div>
      </div>
    </div>
  );
};
