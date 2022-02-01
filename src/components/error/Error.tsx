import { useAppSelector } from "../../app/hooks";

const Error = () => {
    const error = useAppSelector(state => state.postReducer.error)

    return (
        <div className="error">
            <h3 className="error__message">{error}</h3>
        </div>
    ) 
}

export default Error;