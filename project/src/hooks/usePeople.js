import { useState, useEffect } from "react";
import { api } from "../services/api";

export const usePeople = (searchParams = {}) => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 4,
    totalRegistros: 0,
    totalPaginas: 1,
  });

  const fetchPeople = async (params = {}) => {
    setLoading(true);
    setError(null);

    try {
      const response = await api.fetchPeople({
        ...searchParams,
        ...params,
        pagina: params.page != null ? params.page : pagination.page - 1,
        porPagina: params.limit || pagination.limit,
      });

      setPeople(response.content || []);
      setPagination({
        page: response.number, 
        limit: response.size,
        totalRegistros: response.totalElements || 0,
        totalPaginas: response.totalPages || 1,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao carregar dados");
      setPeople([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPeople(searchParams);
  }, []);

  return {
    people,
    loading,
    error,
    pagination,
    refetch: fetchPeople,
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
