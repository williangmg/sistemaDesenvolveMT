import { useState, useEffect } from 'react';
import { api } from '../services/api';

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
        setError(err instanceof Error ? err.message : 'Erro ao carregar pessoa');
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