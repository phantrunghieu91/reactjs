import { useParams } from "react-router-dom";

export default function Product(props) {
    const {productID} = useParams();
    
    return (
        <div>
            <header>
                <h1>Product</h1>
            </header>
            <main>
                <div>
                    <h3>Selected brand id: {productID}</h3>
                    <h2>{props.carBrands[productID]}</h2>
                </div>
            </main>
        </div>
    )
};