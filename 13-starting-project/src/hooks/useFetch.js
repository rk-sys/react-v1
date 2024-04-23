import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValues) {

  const [isFetching, setIsFetching] = useState([])
  const [error, setError] = useState([])
  const [fetchData, setFetchData] = useState(initialValues)


  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setUserPlaces(places);
      } catch (error) {
        setError({ message: error.message || 'Failed to fetch data.' });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchData]);

  return {
    isFetching,
    error,
    fetchData,
  }
}
