export const Texto = (props) => {
    return(
        <>
            <div className="title">
                <h1 id="text" > { props.texto } </h1>
            </div>
            
            <span id="author" > { props.autor } </span>
            
        </>
    )
}