import { useState, useEffect } from "react";

// custom hook need to start with keyword use
const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error, setError] = useState(null);

     //best place to fetch data
    useEffect(()=>{
        console.log('use effect ran only once during intialization..');
        const abortController = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortController.signal})
                .then(res=>{
                    if (!res.ok){
                        throw Error('could not fetch data for resource')
                    }
                    return res.json();
                })
                .then(data=>{
                    console.log(data);
                    setData(data);
                    setIsPending(false);
                    setError(null);
                })
                .catch(err=>{
                    if(err.name === 'AbortError') {
                        console.log('fetch aborted');
                    } 
                    else
                    {   
                        setError(err.message)
                        setIsPending(false)
                    }
                });
                }, 1000);
                return () => abortController.abort();
        
    }, [url]);

    return { data, isPending, error}
}
export default useFetch;