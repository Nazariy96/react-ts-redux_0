type card = {
    userId:number,
    title:string,
    body:string
}

const Card = (props:card) => {
    const {userId,title,body} =props

    return (
        <div className="c__card">
            <h3 className="c__card--title">{title}</h3>
            <h4 className="c__card--user">{userId}</h4>
            <p className="c__card--body">{body}</p>
        </div>
    );
};

export default Card;
