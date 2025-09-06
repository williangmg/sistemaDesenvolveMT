import { X } from "lucide-react";

export const BotaoLimpar = ({ onClear }) => {
  return (
    <button
      type="button"
      onClick={onClear}
      className="bg-gray-100 text-gray-700 px-6 py-2 rounded-md 
                 hover:bg-gray-200 focus:outline-none focus:ring-2 
                 focus:ring-gray-500 focus:ring-offset-2 
                 transition-colors flex items-center justify-center"
    >
      <X className="h-4 w-4 mr-2" />
      Limpar
    </button>
  );
};
