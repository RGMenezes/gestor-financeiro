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

                    <h3>Total: R${user.income}</h3>

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

                    <h3>Total: R${arrSummary[0]}</h3>

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

                <section className={styles.result_graphic}>
                    <h2>Despesas variáveis</h2>
                    <div className={styles.graphic} >
                        <Graphic
                            theme="black"
                            arrGraphic={[
                                [calculatePercentage(arrSummary[1], user.variable_expenses.entertainment), "Entrete."],
                                [calculatePercentage(arrSummary[1], user.variable_expenses.leisure), "Lazer"],
                                [calculatePercentage(arrSummary[1], user.variable_expenses.trips), "Viagens"],
                                [calculatePercentage(arrSummary[1], user.variable_expenses.other), "Outros"]
                            ]}
                        />
                    </div>

                    <h3>Total: R${arrSummary[1]}</h3>

                    <div className={styles.legend_graphic}>
                        <Legend
                            theme="dark" 
                            text={`Entretenimento: R$${user.variable_expenses.entertainment}`} 
                            description="Dinheiro gasto com entretenimento como cinema, teatro, etc." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Lazer: R$${user.variable_expenses.leisure}`} 
                            description="Dinheiro gasto com lazer como spa, prática de esporte, etc." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Viagens: R$${user.variable_expenses.trips}`} 
                            description="Dinheiro gasto com Viagens como praia, viagens internacionais, etc." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Outros: R$${user.variable_expenses.other}`} 
                            description="Dinheiro gasto com outros tipos de despesas variáveis como comprar roupas, conserto do carro, etc." 
                        />
                    </div>
                </section>

                <section className={styles.result_graphic}>
                    <h2>Dívidas</h2>
                    <div className={styles.graphic} >
                        <Graphic
                            theme="black"
                            arrGraphic={[
                                [calculatePercentage(arrSummary[2], user.debts.credit_card), "C. de Crédito"],
                                [calculatePercentage(arrSummary[2], user.debts.loan_financing), "Emp. e fin."],
                                [calculatePercentage(arrSummary[2], user.debts.other), "Outros"]
                            ]}
                        />
                    </div>

                    <h3>Total: R${arrSummary[2]}</h3>

                    <div className={styles.legend_graphic}>
                        <Legend
                            theme="dark" 
                            text={`Cartão de crédito: R$${user.debts.credit_card}`} 
                            description="Fatura do cartão de crédito." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Empréstimo e financiamento: R$${user.debts.loan_financing}`} 
                            description="Valor mensal do financiamento e/ou empréstimo." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Outros: R$${user.debts.other}`} 
                            description="Outras dívidas como boleto de cobrança, etc." 
                        />
                    </div>
                </section>

                <section className={styles.result_graphic}>
                    <h2>Investimentos</h2>
                    <div className={styles.graphic} >
                        <Graphic
                            theme="black"
                            arrGraphic={[
                                [calculatePercentage(arrSummary[3], user.investments.box), "Caixa"],
                                [calculatePercentage(arrSummary[3], user.investments.national_stocks), "A. nacionais"],
                                [calculatePercentage(arrSummary[3], user.investments.international_shares), "A. inter."],
                                [calculatePercentage(arrSummary[3], user.investments.real_estate), "F. imobi."],
                                [calculatePercentage(arrSummary[3], user.investments.risk_assets), "I. de risco"],
                                [calculatePercentage(arrSummary[3], user.investments.other), "Outros"],
                            ]}
                        />
                    </div>

                    <h3>Total: R${arrSummary[3]}</h3>

                    <div className={styles.legend_graphic}>
                        <Legend
                            theme="dark" 
                            text={`Caixa: R$${user.investments.box}`} 
                            description="Dinheiro guardado para emergências." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Ações nacionais: R$${user.investments.national_stocks}`} 
                            description="Dinheiro investido em seu próprio país." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Ações internacionais: R$${user.investments.international_shares}`} 
                            description="Dinheiro investido em países estrangeiros." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Fundos imobiliários: R$${user.investments.real_estate}`} 
                            description="Dinheiro investido em imóveis." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Investimento de risco: R$${user.investments.risk_assets}`} 
                            description="Dinheiro investido em ativos de risco como nfts, criptomoedas, etc." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Outros: R$${user.investments.other}`} 
                            description="Outros investimentos." 
                        />
                    </div>
                </section>

            </section>

            <section className={styles.result_text}>
                <h2>O que percebemos?</h2>

                <h3>Despesas</h3>
                <p>Testando <strong>paragráfo</strong> para definir o seu estilo</p>
                
                <h3>Investimentoa</h3>
                <p></p>

                <h3>Padrão de vida</h3>
                <p></p>

                <h3>Escolhas</h3>
                <p></p>
            </section>
        </main>
    );
};

export default Result;