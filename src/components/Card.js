
function Card(props) {

    const {mark, sneakers, descr, textPrice, price, add} = props;
    return (
    <div className="card">
        <div className="favorite">
            <img src={mark} alt="heart" />
        </div>
        <img width={133} height={112} src={sneakers} alt="Sneakers" />
        <h5>{descr}</h5>
        <div className="cardBottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>{textPrice}</span>
                <b>{price}</b>
                </div>
                <button className="button">
                <img width={11} height={11} src={add} alt="plus" />
                </button>
        </div>
</div>
    )
}
export default Card;
