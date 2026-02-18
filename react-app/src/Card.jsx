import Pic from "./assets/react.svg";
function Card(){
    return( 
        <div className="card">
            <img className ="card-img" src = {Pic} alt="animal"/>
            <h2 className="card-title">Card Title</h2>
            <p className = "card-text">I am a student pursuing my Btech CSE degree in Ai/ML track.</p>
        </div>
    );
}

export default Card;