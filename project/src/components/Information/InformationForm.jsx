import React, { useState } from "react";
import { Send, MapPin, MessageSquare, Upload, X } from "lucide-react";
import { api } from "../../services/api";

export const InformationForm = ({
  personId,
  onSuccess,
  onCancel,
  ocorrenciaId,
}) => {
  const [formData, setFormData] = useState({
    pessoa_id: personId,
    informacao: "",
    localizacao: "",
    data: "",
    ocoId: ocorrenciaId || null,
  });
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    const validFiles = files.filter((file) => {
      const isValidType = file.type.startsWith("image/");
      const isValidSize = file.size <= 5 * 1024 * 1024; // 5MB
      return isValidType && isValidSize;
    });

    if (validFiles.length !== files.length) {
      setError(
        "Alguns arquivos foram ignorados. Apenas imagens até 5MB são aceitas."
      );
    }

    setPhotos((prev) => [...prev, ...validFiles].slice(0, 5)); // Máximo 5 fotos
  };

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const data = new FormData();

      console.log("Data Antes", data);

      data.append("pessoa_id", formData.pessoa_id);
      data.append("informacao", formData.informacao);
      data.append("localizacao", formData.localizacao);
      data.append("data", formData.data);
      data.append("ocoId", formData.ocoId);
      photos.forEach((photo) => {
        data.append("anexos", photo);
      });


      await api.submitInformation(data);
      onSuccess("Informação enviada com sucesso!");
    } catch (err) {
      setError(err.message || "Erro ao enviar informação");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center">
              <MessageSquare className="h-5 w-5 mr-2 text-blue-600" />
              Enviar Informação
            </h2>
            <button
              onClick={onCancel}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="h-5 w-5 text-gray-500" />
            </button>
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 rounded-md p-3 mb-4">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MessageSquare className="inline h-4 w-4 mr-1" />
                Informações *
              </label>
              <textarea
                value={formData.informacao}
                onChange={(e) =>
                  handleInputChange("informacao", e.target.value)
                }
                rows={4}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                placeholder="Descreva as informações que possui sobre esta pessoa..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="inline h-4 w-4 mr-1" />
                Localização onde foi avistado (opcional)
              </label>
              <input
                type="text"
                value={formData.localizacao}
                onChange={(e) =>
                  handleInputChange("localizacao", e.target.value)
                }
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Ex: Rua das Flores, 123 - Centro, Cuiabá/MT"
              />
            </div>

            <div>
              <input
                type="date"
                value={formData.data}
                onChange={(e) => handleInputChange("data", e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Data do avistamento"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Upload className="inline h-4 w-4 mr-1" />
                Fotos (opcional - máx. 5 fotos, 5MB cada)
              </label>
              <input
                type="file"
                multiple
                accept="image/*"
                onChange={handlePhotoUpload}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />

              {photos.length > 0 && (
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {photos.map((photo, index) => (
                    <div key={index} className="relative group">
                      <img
                        src={URL.createObjectURL(photo)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-20 object-cover rounded border"
                      />
                      <button
                        type="button"
                        onClick={() => removePhoto(index)}
                        className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <X className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={onCancel}
                className="flex-1 bg-gray-100 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-200 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading || !formData.informacao.trim()}
                className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <Send className="h-4 w-4 mr-2" />
                {loading ? "Enviando..." : "Enviar Informação"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
