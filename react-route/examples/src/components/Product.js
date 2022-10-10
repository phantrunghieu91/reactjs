import { useNavigate, useParams } from "react-router-dom";

export default function Product(props) {
    const {productID} = useParams();
    const navigate = useNavigate();
    
    return (
        <div>
            <header>
                <h1>Product</h1>
            </header>
            <main>
                <div>
                    <h3>Selected brand id: {productID}</h3>
                    <h2>{props.carBrands[productID]}</h2>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>
            </main>
        </div>
    )
};