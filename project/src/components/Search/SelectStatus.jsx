import React from "react";

const SelectSexo = ({ value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Sexo</label>
    <select
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
    >
      <option value="">Selecione o sexo</option>
      <option value="masculino">Masculino</option>
      <option value="feminino">Feminino</option>
      <option value="outro">Outro</option>
    </select>
  </div>
);

export default SelectSexo;
