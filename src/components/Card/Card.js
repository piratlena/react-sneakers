import moduleName from './Card.module.scss';

const Card = (props) => {


    
    return (
    <div className={moduleName.card}>
        <div className={moduleName.favorite}>
            <img src={props.mark} alt="heart" />
        </div>
        <img width={133} height={112} src={props.imageUrl}alt="Sneakers" />
        <h5>{props.descr}</h5>
        <div className="cardBottom d-flex justify-between align-center">
                <div className="d-flex flex-column">
                <span>{props.textPrice}</span>
                <b>{props.price}</b>
                </div>
                <button className="button">
                <img width={11} height={11} src='/img/plus.svg' alt="plus" />
                </button>
        </div>
</div>
    )

}
export default Card;
