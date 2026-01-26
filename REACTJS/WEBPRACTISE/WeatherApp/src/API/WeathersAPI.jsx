import { useEffect, useState } from "react";

function WeathersAPI(url) {
  const [apiValue, setApiValue] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!url) return;

    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("City not found");
        return res.json();
      })
      .then((data) => {
        setApiValue(data);
        setError("");
      })
      .catch((err) => {
        setError(err.message);
        setApiValue(null);
      })
      .finally(() => setLoading(false));
  }, [url]);

  return { apiValue, error, loading };
}

export default WeathersAPI;
