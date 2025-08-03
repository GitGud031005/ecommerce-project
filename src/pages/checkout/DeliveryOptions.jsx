import axios from "axios";
import moneyFormat from "../../utils/money";
import dayjs from "dayjs";
export function DeliveryOptions({ deliOption, item, loadCart })
{
    return (
        <div className="delivery-options">
            <div className="delivery-options-title">
                Choose a delivery option:
            </div>
            {deliOption.map((opt) => {
                let price = 'FREE shipping';
                if (opt.priceCents > 0) {
                    price = `${moneyFormat(opt.priceCents)} - Shipping`
                }
                const updateDeli = async () => {
                    await axios.put(`/api/cart-items/${item.productId}`, 
                        {
                            deliveryOptionId: opt.id
                        }
                    );
                    await loadCart();
                }
                return (
                    <div key={opt.id} className="delivery-option"
                    onClick={updateDeli}>
                        <input type="radio"
                            checked={opt.id === item.deliveryOptionId}
                            onChange={() => {}}
                            className="delivery-option-input"
                            name={`delivery-option-${item.productId}`} />
                        <div>
                            <div className="delivery-option-date">
                                {dayjs(opt.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
                            </div>
                            <div className="delivery-option-price">
                                {price}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}