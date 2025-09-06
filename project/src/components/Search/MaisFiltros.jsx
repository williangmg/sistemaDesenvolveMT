import DataNascimento from "./DataNascimento";
import InputLocalDesaparecimento from "./InputLocalDesaparecimento";
import SelectSexo from "./SelectSexo";

export const MaisFiltros = ({ searchParams, updateParam }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-4 border-t border-gray-200">
      <SelectSexo
        value={searchParams.sexo}
        onChange={(e) => updateParam("sexo", e.target.value)}
      />

      <InputLocalDesaparecimento
        value={searchParams.local_desaparecimento}
        onChange={(e) => updateParam("local_desaparecimento", e.target.value)}
      />

      <DataNascimento
        value={searchParams.data_nascimento}
        onChange={(e) => updateParam("data_nascimento", e.target.value)}
      />
    </div>
  );
};
