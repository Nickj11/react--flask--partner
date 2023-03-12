import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import Item from './component/Item';

export default function SingleItem() {
    const { itemID } = useParams()
    const [item, setItem] = useState([])

    const getItem = async () => {
        const url = `http://127.0.0.1:5000/api/products/${itemID}`
        const res = await fetch(url);
        const data = await res.json();
        if (data.status === 'ok') {
            setItem(data.item)
        }
    };

    useEffect(() => {
        getItem()
    }, [])


    return (
        <div> single post
            {itemID}
            <Item itemInfo={item} />
        </div>
    )
}