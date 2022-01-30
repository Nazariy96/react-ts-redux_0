import { Link } from "react-router-dom";

type button = {
    dir:string
    className?: string
    children?: string
  }
  
  const ButtonLink = (props:button) => {
    const {dir,className,children} = props
  
    return (
        <button className={`${className} btn__generic`}>
            <Link to={dir}>
                {children}
            </Link>
        </button>
    );
  };
  
  export default ButtonLink;