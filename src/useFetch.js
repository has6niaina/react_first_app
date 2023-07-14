import { useState, useEffect } from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true); //chargement comme dans ajax
    const [error, setError] = useState(null);
    useEffect(() => {
        const abortCont = new AbortController();
        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    console.log(res);
                    if (!res.ok) {
                        throw Error('Pas possible de faire la reqette des données')
                    }
                    return res.json()
                })
                .then(data => {
                    // console.log(data)
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch((err) => {
                    // console.log(err.message);
                    if (err.name === 'AbortError') {
                        console.log('requette aborder')
                    } else {
                        setIsPending(false);
                        setError(err.message);
                    }
                })
        }, 1000)
        return () => abortCont.abort();
    }, [url])
    return { data, isPending, error }
}
export default useFetch;