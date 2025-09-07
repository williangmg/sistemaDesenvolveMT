export const formatDate = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString("pt-BR");
  } catch {
    return dateString;
  }
};

export const formatDateTime = (dateString) => {
  try {
    const date = new Date(dateString);
    return date.toLocaleString("pt-BR");
  } catch {
    return dateString;
  }
};
