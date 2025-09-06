const Idade = ({ value, onChange }) => (
  <div>
    <label className="text-sm font-medium text-gray-700 mb-1">
      Idade:
    </label>
    <input
      type="number"
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      placeholder="Selecione a idade"
    />
  </div>
);

export default Idade;
