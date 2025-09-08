const Idade = ({ value, onChange }) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-700 mb-1">Idade:</label>
      <input
        type="number"
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
        placeholder="Digite a idade"
        min="0"
      />
      {value && value !== "" && (
        <p className="text-xs text-gray-500 mt-1">
          Faixa etária: {Math.floor(value / 10) * 10}-
          {Math.floor(value / 10) * 10 + 9} anos
        </p>
      )}
    </div>
  );
};

export default Idade;
