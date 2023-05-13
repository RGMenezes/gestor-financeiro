import { useLocation } from "react-router-dom";

import Header from "../layout/Header";

function Result(){

    const location = useLocation();
    const user = location.state.user;
    console.log(user);
    
    return(
        <>
            <Header />
            <section>
                Resultado
            </section>
        </>
    );
};

export default Result;