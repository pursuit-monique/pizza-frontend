import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    }, [item, id])


    return (
        <>
            <div>
                <div className="hero-img">
                    <h1>{id}</h1>
                    <h2>{loading}</h2>
                    <h3>{error}</h3>
                    </div>
            </div>
        </>
    )
}

export default ItemPage;