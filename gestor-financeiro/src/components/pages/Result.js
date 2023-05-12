import { useLocation } from "react-router-dom";

function Result(){

    const location = useLocation();
    const user = location.state.user;
    
    return(
        
        <section>
            Resultado
        </section>
    );
};

export default Result;