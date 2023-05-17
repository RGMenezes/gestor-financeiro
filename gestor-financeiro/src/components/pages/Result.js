import { useLocation } from "react-router-dom";

import Header from "../layout/Header";

import styles from './Result.module.css';
import Graphic from "../form/Graphic";
import Legend from "../form/Legend";

function Result(){

    const location = useLocation();
    const resultFormUser = location.state.user;
    
    const user = {
        income: parseFloat(resultFormUser.wage) + parseFloat(resultFormUser.extra_income),
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
        Object.entries(user.fixed_expenses).reduce((acc, curr) => acc + curr[1], 0),
        Object.entries(user.variable_expenses).reduce((acc, curr) => acc + curr[1], 0),
        Object.entries(user.debts).reduce((acc, curr) => acc + curr[1], 0),
        Object.entries(user.investments).reduce((acc, curr) => acc + curr[1], 0)
    ];

    const calculatePercentage = (total, percentage) => Math.floor(percentage * 100 / total) ;
    
    return(
        <main className={styles.body_result} >
            <Header />
            <div className={styles.result_title}>
                <h1>Resultado</h1>
                <p>{user.profile.name}, confira sua análise financeira personalizada e descubra seus resultados.</p>
            </div>
            <section className={styles.container_graphic}>

                <section className={styles.result_graphic}>
                    <h2>Resumo financeiro</h2>
                    <div className={styles.graphic} >
                        <Graphic
                            theme="black"
                            arrGraphic={[
                                [calculatePercentage(user.income, arrSummary[0]), "D. fixas"],
                                [calculatePercentage(user.income, arrSummary[1]), "D. variáveis"],
                                [calculatePercentage(user.income, arrSummary[2]), "Dívidas"],
                                [calculatePercentage(user.income, arrSummary[3]), "Investimento"]
                            ]}
                        />
                    </div>

                    <div className={styles.legend_graphic}>
                        <Legend
                            theme="dark" 
                            text={`Despesas Fixas: R$${arrSummary[0]}`} 
                            description="Despesas fixas são despesas de serviços e produtos que sempre estarão presentes no orçamento mensal como energia, água, alimentação, gás, etc." 
                        />
                        <Legend 
                            theme="dark"
                            text={`Despesas Variáveis: R$${arrSummary[1]}`} 
                            description="Despesas variáveis são despesas de serviços e produtos que podem estar ou não no orçamento mensal como lazer, entretenimento, viagens, etc." 
                        />
                        <Legend 
                            theme="dark"
                            text={`Dívidas: R$${arrSummary[2]}`} 
                            description="Dívidas são despesas que possuem um prazo determinado para serem pagos e que podem acarretar em juros como cartão de crédito, financiamentos, empréstimos, etc." 
                        />
                        <Legend 
                            theme="dark"
                            text={`Investimento: R$${arrSummary[3]}`} 
                            description="Investimento é tudo aquilo que depositamos dinheiro com o objetivo de gerar algum benefício no futuro como fundos imobiliários, ações, etc." 
                        />
                    </div>
                </section>

                <section className={styles.result_graphic}>
                    <h2>Despesas Fixas</h2>
                    <div className={styles.graphic} >
                        <Graphic
                            theme="black"
                            arrGraphic={[
                                [calculatePercentage(arrSummary[0], user.fixed_expenses.energy), "Energia"],
                                [calculatePercentage(arrSummary[0], user.fixed_expenses.water), "Água"],
                                [calculatePercentage(arrSummary[0], user.fixed_expenses.rent), "Aluguel"],
                                [calculatePercentage(arrSummary[0], user.fixed_expenses.internet), "Internet"],
                                [calculatePercentage(arrSummary[0], user.fixed_expenses.food), "Alimentação"],
                                [calculatePercentage(arrSummary[0], user.fixed_expenses.other), "Outros"],
                            ]}
                        />
                    </div>

                    <div className={styles.legend_graphic}>
                        <Legend
                            theme="dark" 
                            text={`Energia: R$${user.fixed_expenses.energy}`} 
                            description="Valor da conta mensal de energia." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Água: R$${user.fixed_expenses.water}`} 
                            description="Valor da conta mensal de água." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Aluguel: R$${user.fixed_expenses.rent}`} 
                            description="Valor do aluguel pago por mês." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Internet: R$${user.fixed_expenses.internet}`} 
                            description="Valor da conta mensal de Internet." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Alimentação: R$${user.fixed_expenses.food}`} 
                            description="Valor gasto por mês com alimentação." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Outros: R$${user.fixed_expenses.other}`} 
                            description="Outras despesas fixas como gás, aluguel do carro, plano de saúde, etc." 
                        />
                    </div>
                </section>

            </section>
        </main>
    );
};

export default Result;