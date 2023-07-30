import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './ItemPage.css';

const ItemPage = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [item, setItem] = useState([])
    const { id } = useParams();
    useEffect( () =>{
        async function getOneMenuItem(id){
            try {
                setError("");
                setLoading(true);
                const res = await fetch(`http://localhost:9000/items/${id}`);
                const json = await res.json();
                const { data, error } = json;
                if (res.ok){
                    setItem(data);
                    setLoading(false);
                    console.log(data);
                } else {
                    setError(error);
                    setLoading(false)
                }
            }
            catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
        getOneMenuItem(id);
    }, [id])


    return (
        <>
            <div>
                <div className="show_container">
                    <div className="show_hero show_border" style={{
                        height: "70vh",
                        width: '70vw',
                        backgroundImage: `linear-gradient(to bottom, transparent 55%, black),
                        url(${
                        item.image ||
                        "https://pursuit-pizza-images.s3.amazonaws.com/_4e3da2bb-62e1-4fd8-b402-4607dc851f14.jpeg"
                        })`,
                        backgroundSize: "fit",
                        backgroundPosition: "center",
                        margin: 'auto',
                        position: 'relative'}}>
                        <div className="show_herotxt" style={{
                        height: "10vh",
                        width: '20vw'}}>
                            <h1>{item.name}</h1>
                            <h2>{item.shortDescription}</h2>
                        </div>
                    </div>
                    
                    <div className="show_border show_article">{item.longDescription}</div>
                    {/* <h1>{id || "404:  ID not FOUND"}</h1>
                    <h2>{`${loading}`}</h2>
                    <h3>{error || "No errors found"}</h3> */}
                </div>
            </div>
        </>
    )
}

export default ItemPage;