const API_BASE_URL = "https://abitus-api.geia.vip/v1";

class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

const handleApiError = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new ApiError(response.status, errorText || response.statusText);
  }
  return response;
};

export const api = {
  async fetchPeople(params = {}) {
    const searchParams = new URLSearchParams();

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        searchParams.append(key, String(value));
      }
    });

    const url = `${API_BASE_URL}/pessoas/`;

    try {
      const queryString = searchParams.toString();
      const response = await fetch(
        `${url}aberto/filtro${queryString != null ? `?${queryString}` : ""}`
      );
      await handleApiError(response);
      return await response.json();
    } catch (error) {
      console.error("Error fetching people:", error);
      throw error;
    }
  },

  async fetchPersonById(id) {
    try {
      const response = await fetch(`${API_BASE_URL}/pessoas/${id}`);
      await handleApiError(response);
      return await response.json();
    } catch (error) {
      console.error("Error fetching person:", error);
      throw error;
    }
  },

  async submitInformation(formData) {
    try {
      const response = await fetch(
        `${API_BASE_URL}/ocorrencias/informacoes-desaparecido`,
        {
          method: "POST",
          body: formData,
        }
      );

      await handleApiError(response);
      return await response.json();
    } catch (error) {
      console.error("Error submitting information:", error);
      throw error;
    }
  },
};
