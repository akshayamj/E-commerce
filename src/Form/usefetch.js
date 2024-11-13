import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setDate] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDate(data));
  }, [url]);

  return [data];
};

export default useFetch;
