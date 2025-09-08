import { useState } from "react";
import { FiltrosIniciais } from "./FiltrosIniciais";
import { MaisFiltros } from "./MaisFiltros";
import { Acoes } from "./Acoes";

export const Buscar = ({ onSearch, loading = false }) => {
  const [expansivel, setExpansivel] = useState(false);
  const [parametrosBusca, setParametrosBusca] = useState({
    nome: "",
    sexo: "",
    status: "",
    local_desaparecimento: "",
    idade: "",
    pagina: 1,
    limite: 10,
    faixaIdadeInicial: undefined,
    faixaIdadeFinal: undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const copia = { ...parametrosBusca };
    const idadeVal = copia.idade;

    const payload = { ...copia };

    if (idadeVal === "" || idadeVal === null || idadeVal === undefined) {
      payload.faixaIdadeInicial = null;
      payload.faixaIdadeFinal = null;
      payload.idade = "";
      setParametrosBusca((prev) => ({
        ...prev,
        idade: "",
        faixaIdadeInicial: undefined,
        faixaIdadeFinal: undefined,
      }));
    } else {
      const idadeNum = parseInt(idadeVal, 10);
      if (!isNaN(idadeNum)) {
        const faixaInicial = Math.floor(idadeNum / 10) * 10;
        payload.faixaIdadeInicial = faixaInicial;
        payload.faixaIdadeFinal = faixaInicial + 9;
      } else {
        payload.faixaIdadeInicial = null;
        payload.faixaIdadeFinal = null;
      }
      delete payload.idade;
      setParametrosBusca((prev) => ({
        ...prev,
        faixaIdadeInicial: payload.faixaIdadeInicial,
        faixaIdadeFinal: payload.faixaIdadeFinal,
      }));
    }

    const parametrosFinais = Object.fromEntries(
      Object.entries(payload).filter(([_, v]) => v !== "" && v !== undefined)
    );

    if (idadeVal === "" || idadeVal === null || idadeVal === undefined) {
      parametrosFinais.faixaIdadeInicial = null;
      parametrosFinais.faixaIdadeFinal = null;
      parametrosFinais.idade = "";
    }

    parametrosFinais.pagina = 1;

    onSearch(parametrosFinais);
  };

  const handleClear = () => {
    const clearedParams = {
      pagina: 1,
      limite: 10,
      idade: "",
      sexo: "",
      status: "",
      nome: "",
      local_desaparecimento: "",
      faixaIdadeInicial: null,
      faixaIdadeFinal: null,
    };
    setParametrosBusca({
      nome: "",
      sexo: "",
      status: "",
      local_desaparecimento: "",
      idade: "",
      pagina: 1,
      limite: 10,
      faixaIdadeInicial: undefined,
      faixaIdadeFinal: undefined,
    });
    onSearch(clearedParams);
  };

  const atualizarParametro = (chave, valor) => {
    setParametrosBusca((prev) => {
      if (chave === "idade") {
        if (valor === "" || valor === null || valor === undefined) {
          return {
            ...prev,
            idade: "",
            faixaIdadeInicial: undefined,
            faixaIdadeFinal: undefined,
          };
        }
        return {
          ...prev,
          idade: valor,
        };
      }

      return {
        ...prev,
        [chave]: valor !== undefined && valor !== null ? valor : "",
      };
    });
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
