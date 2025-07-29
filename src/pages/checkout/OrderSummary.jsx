import moneyFormat from "../../utils/money";
import dayjs from "dayjs";
import { DeliveryOptions } from "./DeliveryOptions";
export function OrderSummary({ cart, deliOption }) {
    return (
        <div className="order-summary">
            {deliOption.length > 0 && cart.map((item) => {
                const selectedopt = deliOption.find((opt) => {
                    return opt.id === item.deliveryOptionId;
                });

                console.log(selectedopt);

                return (
                    <div key={item.id} className="cart-item-container">
                        <div className="delivery-date">
                            Delivery date: {dayjs(selectedopt.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                        </div>

                        <div className="cart-item-details-grid">
                            <img className="product-image"
                                src={item.product.image} />

                            <div className="cart-item-details">
                                <div className="product-name">
                                    {item.product.name}
                                </div>
                                <div className="product-price">
                                    {moneyFormat(item.product.priceCents)}
                                </div>
                                <div className="product-quantity">
                                    <span>
                                        Quantity: <span className="quantity-label">
                                            {item.quantity}
                                        </span>
                                    </span>
                                    <span className="update-quantity-link link-primary">
                                        Update
                                    </span>
                                    <span className="delete-quantity-link link-primary">
                                        Delete
                                    </span>
                                </div>
                            </div>

                            <DeliveryOptions deliOption={deliOption} item={item} />
                        </div>
                    </div>
                );
            })}
        </div>
    );
}