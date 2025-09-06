import { BotaoBuscar } from "./BotaoBuscar";
import { BotaoLimpar } from "./BotaoLimpar";

export const SearchActions = ({ loading, onClear }) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 pt-4">
      <BotaoBuscar loading={loading} />

      <BotaoLimpar onClear={onClear} />
    </div>
  );
};
