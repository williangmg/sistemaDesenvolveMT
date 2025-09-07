import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, User } from "lucide-react";
import { StatusBadge } from "../UI/StatusBadge";
import { formatDate } from "../../utils/masks";

export const PersonCard = ({ person }) => {
  return (
    <Link
      to={`/pessoa/${person.id}`}
      className="block bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
    >
      <div className="relative">
        {person.urlFoto ? (
          <img
            src={person.urlFoto}
            alt={`${person.nome} ${person.sobrenome}`}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
        ) : null}

        <div
          className={`w-full h-48 bg-gray-200 flex items-center justify-center ${
            person.urlFoto ? "hidden" : "flex"
          }`}
        >
          <User className="h-16 w-16 text-gray-400" />
        </div>

        <div className="absolute top-3 right-3">
          <StatusBadge status={person.status} size="small" />
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
          {person.nome} {person.sobrenome}
        </h3>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <User className="h-4 w-4 mr-2 text-gray-400" />
            <span>
              {person.idade} anos •{" "}
              {person.sexo === "M" ? "Masculino" : "Feminino"}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span>
              Desaparecimento:{" "}
              {formatDate(person.ultimaOcorrencia.dtDesaparecimento)}
            </span>
          </div>

          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span className="truncate">
              {person.ultimaOcorrencia?.localDesaparecimentoConcat}
            </span>
          </div>
        </div>

        {person.observacoes && (
          <p className="mt-3 text-sm text-gray-500 line-clamp-2">
            {person.observacoes}
          </p>
        )}
      </div>
    </Link>
  );
};
