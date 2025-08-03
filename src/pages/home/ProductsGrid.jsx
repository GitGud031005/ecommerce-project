import { Product } from "./Product";
export function ProductsGrid({ products, loadCart }) {

    return (
        <div className="products-grid">
            {products.map((prod) => {
                return (
                    <Product key={prod.id} prod={prod} loadCart={loadCart} />
                );
            })}
        </div>
    );
}