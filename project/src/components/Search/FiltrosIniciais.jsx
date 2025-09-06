import React from "react";
import { Search, Filter } from "lucide-react";
import InputNome from "./InputNome";
import InputSobrenome from "./InputSobrenome";
import SelectStatus from "./SelectStatus";

export const FiltrosIniciais = ({
  searchParams,
  updateParam,
  expandir,
  setExpandir,
}) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800 flex items-center">
          <Search className="h-5 w-5 mr-2 text-blue-600" />
          Buscar Pessoas
        </h2>
        <button
          type="button"
          onClick={() => setExpandir(!expandir)}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors px-3 py-1 rounded-md hover:bg-blue-50"
        >
          <Filter className="h-4 w-4 mr-1" />
          {expandir ? "Menos filtros" : "Mais filtros"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <InputNome
          value={searchParams.nome}
          onChange={(e) => updateParam("nome", e.target.value)}
        />

        <InputSobrenome
          value={searchParams.sobrenome}
          onChange={(e) => updateParam("sobrenome", e.target.value)}
        />

        <SelectStatus
          value={searchParams.status}
          onChange={(e) => updateParam("status", e.target.value)}
        />
      </div>
    </>
  );
};
