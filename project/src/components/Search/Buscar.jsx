import { useState } from "react";
import { FiltrosIniciais } from "./FiltrosIniciais";
import { MaisFiltros } from "./MaisFiltros";
import { Acoes } from "./Acoes";

export const Buscar = ({ onSearch, loading = false }) => {
  const [expansivel, setExpansivel] = useState(false);
  const [parametrosBusca, setParametrosBusca] = useState({
    nome: "",
    sobrenome: "",
    sexo: "",
    status: "",
    local_desaparecimento: "",
    idade: null,
    pagina: 1,
    limite: 10,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const cleanParams = Object.fromEntries(
      Object.entries(parametrosBusca).filter(
        ([_, valor]) => valor !== "" && valor !== undefined
      )
    );
    onSearch({ ...cleanParams, pagina: 1 });
  };

  const handleClear = () => {
    const clearedParams = {
      pagina: 1,
      limite: 10,
      idade: "",
      sexo: "",
      status: "",
      nome: "",
      sobrenome: "",
      local_desaparecimento: "",
    };
    setParametrosBusca(clearedParams);
    onSearch(clearedParams);
  };

  const atualizarParametro = (chave , valor) => {
    setParametrosBusca((prev) => ({
      ...prev,
      [chave  ]: valor || "",
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FiltrosIniciais
          searchParams={parametrosBusca}
          updateParam={atualizarParametro}
          expandir={expansivel}
          setExpandir={setExpansivel}
        />

        {expansivel && (
          <MaisFiltros
            searchParams={parametrosBusca}
            updateParam={atualizarParametro}
          />
        )}

        <Acoes loading={loading} onClear={handleClear} />
      </form>
    </div>
  );
};
