import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, MessageSquare } from "lucide-react";
import { PersonDetails as PersonDetailsComponent } from "../components/Person/PersonDetails";
import { InformationForm } from "../components/Information/InformationForm";
import { LoadingSpinner } from "../components/UI/LoadingSpinner";
import { ErrorMessage } from "../components/UI/ErrorMessage";
import { usePerson } from "../hooks/usePerson";

const PersonDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { person, loading, error } = usePerson(parseInt(id));
  const [showInformationForm, setShowInformationForm] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleInformationSuccess = (message) => {
    setSuccessMessage(message);
    setShowInformationForm(false);
    setTimeout(() => setSuccessMessage(""), 5000);
  };

  if (loading) return <LoadingSpinner text="Carregando detalhes..." />;

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorMessage
          message={error}
          onRetry={() => window.location.reload()}
        />
      </div>
    );
  }

  if (!person) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <ErrorMessage message="Pessoa não encontrada" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </button>

        <button
          onClick={() => {
            setShowInformationForm(true);
          }}
          className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition-colors flex items-center"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Enviar Informação
        </button>
      </div>

      {successMessage && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <p className="text-green-700">{successMessage}</p>
        </div>
      )}

      <PersonDetailsComponent person={person} />

      {showInformationForm && (
        <InformationForm
          personId={person.id}
          onSuccess={handleInformationSuccess}
          onCancel={() => setShowInformationForm(false)}
          ocorrenciaId={person.ultimaOcorrencia?.ocoId || null}
        />
      )}
    </div>
  );
};

export default PersonDetails;
