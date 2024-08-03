import axios from "axios";
import { useEffect, useState } from "react";
import { axiosClient } from "../axiosClient";

export const useFetch = (url) =>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const fetchData = async () => {
        try {
            setLoading(true)
            const response = await axiosClient.get(url);
            setData(response.data.data);
        } catch (error) {
            setError(true)
        }
        setLoading(false)
    };

    useEffect(() => {    
        fetchData();
    }, [url]);
    return {data, loading, error}
}