import React from "react";

const SelectStatus = ({ value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Status
    </label>
    <select
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
    >
      <option value="">Todos</option>
      <option value="DESAPARECIDO">Desaparecido</option>
      <option value="LOCALIZADO">Localizado</option>
    </select>
  </div>
);

export default SelectStatus;