import { useLocation } from "react-router-dom";

export default function Product2(props) {
    const { state } = useLocation();
    return (
        <div>
            <h3>Selected brand id: {state.productID}</h3>
            <h2>{props.carBrands[state.productID]}</h2>
        </div>
    );
}