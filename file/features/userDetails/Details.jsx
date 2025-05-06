import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetails } from './detailsSlics';

export default function Details() {
    const dispatch = useDispatch();

    const { data, loading, error } = useSelector((state) => state.details);

    useEffect(() => {
        dispatch(fetchDetails());
    }, [dispatch]);

    if (loading) {
        return <p>Loading .... </p>;
    }

    if (error) {
        return <p>Error : {error}</p>
    }

    return (
        <>
            {Array.isArray(data) ?
                <div>{data.map((detail, index) => (
                    <li key={index}>
                        {detail.username}
                    </li>
                ))}</div>
                : <p>No details</p>
            }
        </>
    )
}
