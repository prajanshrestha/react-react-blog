import { useState, useEffect } from 'react'
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
      setTimeout(() => {
        axios.get(url)
        .then((response) => {
          // if(!response.ok) {
          //   throw Error("could not fetch the data for that resource");
          // }
          setData(response.data);
          setIsLoading(false);
          setError(null);
        })
        .catch((err) => {
          setIsLoading(false);
          setError("Could not fetch the data for that resource 😔");
        })
      }, 1000);
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch