import { useAppSelector } from "../../app/hooks";

const Error = () => {
    const error = useAppSelector(state => state.postReducer.error)

    return (
        <div>
            <h3>{error}</h3>
        </div>
    ) 
}

export default Error;