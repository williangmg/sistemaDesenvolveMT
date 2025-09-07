import React from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

export const BarraStatus = ({ status, size = 'default' }) => {
  const localizado = (status !== null);

  const sizeClasses = {
    small: 'px-2 py-1 text-xs',
    default: 'px-3 py-1 text-sm',
    large: 'px-4 py-2 text-base'
  };

  const iconSizes = {
    small: 'h-3 w-3',
    default: 'h-4 w-4',
    large: 'h-5 w-5'
  };

  return (
    <span className={`
      inline-flex items-center rounded-full font-semibold transition-all
      ${sizeClasses[size]}
      ${localizado 
        ? 'bg-green-100 text-green-800 border border-green-200' 
        : 'bg-red-100 text-red-800 border border-red-200'
      }
    `}>
      {localizado ? (
        <CheckCircle className={`${iconSizes[size]} mr-1`} />
      ) : (
        <AlertCircle className={`${iconSizes[size]} mr-1`} />
      )}
      {localizado ? 'Localizado' : 'Desaparecido'}
    </span>
  );
};