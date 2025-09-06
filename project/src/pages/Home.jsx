import React from 'react';
import { Buscar } from '../components/Search/Buscar';
import { PersonList } from '../components/Person/PersonList';
import { Pagination } from '../components/Pagination/Pagination';
import { ErrorMessage } from '../components/UI/ErrorMessage';
import { usePeople } from '../hooks/usePeople';

const Home = () => {
  const { people, loading, error, pagination, refetch } = usePeople();

  const handleSearch = (searchParams) => {
    refetch({ ...searchParams, page: 0 }); // API espera 0-based
  };

  const handlePageChange = (page) => {
    refetch({ page: page - 1 }); // converte 1-based para 0-based
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Sistema de Pessoas Desaparecidas
        </h1>
        <p className="text-gray-600">
          Consulte registros e colabore com informações para ajudar na localização
        </p>
      </div>

      <Buscar onSearch={handleSearch} loading={loading} />

      {error ? (
        <ErrorMessage message={error} onRetry={() => refetch({ page: 0 })} />
      ) : (
        <>
          <PersonList people={people} loading={loading} />
          
          <Pagination
            paginaAtual={pagination.page}
            totalPaginas={pagination.totalPaginas}
            onPageChange={handlePageChange}
            loading={loading}
          />
        </>
      )}
    </div>
  );
};

export default Home;
