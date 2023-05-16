import { useLocation } from "react-router-dom";

import Header from "../layout/Header";

import styles from './Result.module.css';
import Graphic from "../form/Graphic";

function Result(){

    const location = useLocation();
    const resultFormUser = location.state.user;
    
    const user = {
        income: parseFloat(resultFormUser.wage + resultFormUser.extra_income),
        profile: {
            name: resultFormUser.name,
            children: parseFloat(resultFormUser.children),
            responsible_for_someone: resultFormUser.responsible_for_someone,
            family_responsibility: resultFormUser.family_responsibility,
            investment_evaluation: resultFormUser.investment_evaluation,
            investment_knowledge: resultFormUser.investment_knowledge
        },
        fixed_expenses: {
            energy: parseFloat(resultFormUser.energy),
            water: parseFloat(resultFormUser.water),
            food: parseFloat(resultFormUser.food),
            internet: parseFloat(resultFormUser.internet),
            rent: parseFloat(resultFormUser.rent),
            other: parseFloat(resultFormUser.other_indespensable)
        },
        variable_expenses: {
            leisure: parseFloat(resultFormUser.leisure),
            entertainment: parseFloat(resultFormUser.entertainment),
            trips: parseFloat(resultFormUser.trips),
            other: parseFloat(resultFormUser.other_dispensable)
        },
        debts: {
            credit_card: parseFloat(resultFormUser.credit_card),
            loan_financing: parseFloat(resultFormUser.loan_financing),
            other: parseFloat(resultFormUser.other_invoices)
        },
        investments: {
            box: parseFloat(resultFormUser.box),
            real_estate: parseFloat(resultFormUser.real_estate),
            national_stocks: parseFloat(resultFormUser.national_stocks),
            international_shares: parseFloat(resultFormUser.international_shares),
            risk_assets: parseFloat(resultFormUser.risk_assets),
            other: parseFloat(resultFormUser.other_investments)
        }
    };

    const arrSummary = [
        [Object.entries(user.fixed_expenses).reduce((acc, curr) => acc + curr[1], 0)],
        [Object.entries(user.variable_expenses).reduce((acc, curr) => acc + curr[1], 0)],
        [Object.entries(user.debts).reduce((acc, curr) => acc + curr[1], 0)],
        [Object.entries(user.investments).reduce((acc, curr) => acc + curr[1], 0)],
    ];

    console.log(arrSummary);
    
    return(
        <main className={styles.body_result} >
            <Header />
            <h1>Resultado</h1>
            <section className={styles.result_graphic}>
                <div>
                    <section>
                        <h1></h1>
                        <Graphic
                            theme="black"
                            arrGraphic={[
                                [50, "despesa"],
                                [75, "renda"],
                                [10, "fiis"],
                                [15, "viagens"],
                                [33, "ações"],
                            ]}
                        />

                        <div className={styles.legend_graphic}>
                            <p></p>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default Result;