import useSWR from 'swr';
import api from '../services/api';

export default function useFetch(url) {
  const { data, error } = useSWR(url, async (url) => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error };
}

export function useFetchWithMatches(url, category, round) {
  const { data, error } = useSWR(
    [url, category, round],
    async (url, category, round) => {
      const response = await api.get(url, { params: { category, round } });

      return [response.data, response.headers];
    }
  );

  return { data, error };
}
