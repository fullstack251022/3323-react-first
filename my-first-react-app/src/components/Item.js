function Item(props) {
    return(
        <div style={ {border: "1px solid black"}}>
            <img style={{maxWidth: "300px",}} 
             src={props.imageSource}></img>
            <p>{props.description}</p>

            <p>price {props.price} nis</p>

            <button>Click me</button>
        </div>
    )
}

export default Item;