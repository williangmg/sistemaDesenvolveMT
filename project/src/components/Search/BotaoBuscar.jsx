import { Search } from "lucide-react";

export const BotaoBuscar = ({ loading }) => (
  <button
    type="submit"
    disabled={loading}
    className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-md 
                 hover:bg-blue-700 focus:outline-none focus:ring-2 
                 focus:ring-blue-500 focus:ring-offset-2 
                 transition-colors disabled:opacity-50 
                 disabled:cursor-not-allowed flex items-center justify-center"
  >
    <Search className="h-4 w-4 mr-2" />
    {loading ? "Buscando..." : "Buscar"}
  </button>
);
