import "./ItemCount.css"

export default function ItemCount ({stock, count, increment, decrement}){
    return(
        <div className="item_count_container">
        <div className="item_count_counter_container">
        < button className= "item_count_button" onClick={decrement} disabled={count <=0}>
            -
        </button>
        <span className="item_count_button">{count}</span>
        <button
            className="item_count_button"
            onClick={increment}
            disabled={count >= stock}
            >
                +
            </button>
            </div>
        </div>
    );
}