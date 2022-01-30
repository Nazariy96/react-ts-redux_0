type buttonSubmit = {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  type: "submit"
  className?: string
  children?: string
}

const ButtonSubmit = (props: buttonSubmit) => {
  const { type, onClick, className, children } = props

  return (
    <button className={`${className} btn__generic`} type={type} onClick={onClick}>{children}</button>
  );
};

export default ButtonSubmit;