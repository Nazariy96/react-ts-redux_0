type card = {
    userId:number,
    title:string,
    body:string
}

const Card = (props:card) => {
    const {userId,title,body} =props

    return (
        <div className="c__card">
            <h3 className="c__card--element">{title}</h3>
            <h4 className="c__card--element">{userId}</h4>
            <p className="c__card--element">{body}</p>
        </div>
    );
};

export default Card;
