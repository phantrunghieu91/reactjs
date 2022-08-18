import { useNavigate } from "react-router-dom";

export default function Category(props) {
    let navigate = useNavigate();
    
    const sendDataToProduct = (e) => {
        navigate(`/product/${e.target.value}`);
    };

    const sendDataToProductTwo = (e) => {
        navigate(`/product-2`, {state: {productID: e.target.value}});
    }

    return (
        <div>
            <header>
                <h1>Category</h1>
            </header>
            <main>
                <h3>Select a category: </h3>
                <div>
                    <h4>Only use 'useNavigate'</h4>
                    <select 
                        name='category'
                        onChange={event => {sendDataToProduct(event)}}
                        defaultValue='default'
                    >
                        <option value='default' hidden disabled>Choose your car</option>
                        {
                            props.carBrands.map((brand, index) => 
                                <option value={index} key={`brand-${index}`}>{brand}</option>)
                        }
                    </select>
                </div>
                <div>
                    <h4>Use 'useNavigate' and 'useLocation'</h4>
                    <select 
                        name='category'
                        onChange={(event) => {sendDataToProductTwo(event)}}
                        defaultValue='default'
                    >
                        <option value='default' hidden disabled>Choose your car</option>
                        {
                            props.carBrands.map((brand, index) => 
                                <option value={index} key={`brand-${index}`}>{brand}</option>)
                        }
                    </select>
                </div>
            </main>
        </div>
    )
};