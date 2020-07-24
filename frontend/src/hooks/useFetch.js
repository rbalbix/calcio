import useSWR from 'swr';
import api from '../services/api';

export default function useFetch(url) {
  const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error };
}

export function useFetchToRankTop(url, category) {
  const { data, error } = useSWR([url, category], async (url, category) => {
    const response = await api.get(url, { params: { category } });

    return response.data;
  });

  return { data, error };
}
