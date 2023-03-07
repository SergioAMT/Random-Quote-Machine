export const Buttons = (props) => {
    return(
        <div className="container">
            <div className="socialMedia" >
            <a class="button" id="tweet-quote" href="twitter.com/intent/tweet"><i class="bi bi-twitter"></i></a>
            <a class="button" href="https://www.facebook.com/"><i class="bi bi-facebook"></i></a>
            </div>
            
            <button type="button" className="btn btn-primary" id="new-quote" onClick={props.onClick} > New quote </button>
        </div>
    )
}