import React from 'react';
import { Search } from 'lucide-react';

export const EmptyState = ({ title = 'Nenhum registro encontrado', description = 'Tente ajustar os filtros de busca ou verifique os termos utilizados.' }) => {
  return (
    <div className="text-center py-12">
      <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-600 mb-2">{title}</h3>
      <p className="text-gray-500 max-w-md mx-auto">{description}</p>
    </div>
  );
};