const InputNome = ({ value, onChange }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-1">Nome</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
      placeholder="Digite o nome..."
    />
  </div>
);

export default InputNome;
