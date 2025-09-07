import { useState, useEffect } from "react";
import { api } from "../services/api";

export const usePeople = (parametrosIniciais = {}) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 0,
    limit: 10,
    totalRegistros: 0,
    totalPaginas: 1,
  });
  const [searchParams, setSearchParams] = useState(parametrosIniciais);

  const fetchPeople = async (params = {}) => {
    setLoading(true);
    setError(null);

    try {
      const parametrosCombinados = { ...searchParams, ...params };

      const response = await api.fetchPeople({
        ...parametrosCombinados,
        pagina:
          params.page != null ? params.page : params.pagina || pagination.page,
        porPagina: 10,
      });

      setPeople(response.content || []);
      setPagination({
        page: response.number + 1,
        limit: response.size,
        totalRegistros: response.totalElements || 0,
        totalPaginas: response.totalPages || 1,
      });
      if (Object.keys(params).length > 0) {
        setSearchParams(parametrosCombinados);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar dados");
      setPeople([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople(parametrosIniciais);
  }, []);

  return {
    people,
    loading,
    error,
    pagination,
    refetch: fetchPeople,
    searchParams,
    setSearchParams: (params) => {
      setSearchParams(params);
      fetchPeople(params);
    },
  };
};

export const usePerson = (id) => {
  const [person, setPerson] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPerson = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await api.fetchPersonById(id);
        setPerson(response);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Erro ao carregar pessoa"
        );
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPerson();
    }
  }, [id]);

  return { person, loading, error };
};
