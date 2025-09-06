import Idade from "./Idade";
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

      <Idade
        value={searchParams.idade}
        onChange={(e) => updateParam("idade", e.target.value)}
      />
    </div>
  );
};
