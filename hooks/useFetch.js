import { useEffect, useState } from "react";

export const useFetch = (url, options) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch(url, options);
                const data = await resp.json();
                setData(data);
            } catch (e) {
                setData([]);
                setError(e);
            }
        }
        fetchData();
        // eslint-disable-next-line
    }, [url]);

    return { data, error }
}