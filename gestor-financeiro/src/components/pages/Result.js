import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "../layout/Header";

import styles from './Result.module.css';
import Graphic from "../form/Graphic";
import Legend from "../form/Legend";

function Result(){

    const location = useLocation();
    const resultFormUser = location.state.user;

    const [opacity, setOpacity] = useState("result_opacity");
    
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
        fixed_result: {
            energy: parseFloat(resultFormUser.energy),
            water: parseFloat(resultFormUser.water),
            food: parseFloat(resultFormUser.food),
            internet: parseFloat(resultFormUser.internet),
            rent: parseFloat(resultFormUser.rent),
            other: parseFloat(resultFormUser.other_indespensable)
        },
        variable_result: {
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
        Object.entries(user.fixed_result).reduce((acc, curr) => acc + curr[1], 0),
        Object.entries(user.variable_result).reduce((acc, curr) => acc + curr[1], 0),
        Object.entries(user.debts).reduce((acc, curr) => acc + curr[1], 0),
        Object.entries(user.investments).reduce((acc, curr) => acc + curr[1], 0)
    ];

    const [result, setResult] = useState(false);
    const [investment, setInvestiment] = useState(false);

    useEffect(() =>{
        let totalSpent = arrSummary.reduce((acc, curr) => acc + curr, 0);
        const averagePersonCust = 300;

        if(totalSpent < user.income){
            if(user.profile.responsible_for_someone * averagePersonCust + user.profile.children * averagePersonCust 
               + totalSpent < user.income){
                const idealFixedExpenses = toString(calculatePercentage(user.income, arrSummary[0]));
                const remainingTotal = arrSummary[1] + arrSummary[2] + arrSummary[3];
                if(parseFloat(idealFixedExpenses.split("")[0]) * 10 === idealFixedExpenses){
                    if(calculatePercentage(remainingTotal, arrSummary[1]) >= 25){
                        setResult(<p>Identificamos que você <strong>gerencia muito bem suas finanças</strong>, porém sempre se mantenha atualizado e atento em como seu dinheiro é gasto.</p>);

                        switch(user.profile.investment_knowledge){
                            case 0: setInvestiment(<p>Tente aprender sobre <strong>finanças e investimentos</strong>, comece criando uma <strong>reserva de emergência</strong> para possíveis problemas futuros.
                                </p>);
                                break
                            case 1: setInvestiment(<p>Aprender mais sobre <strong>investimentos</strong> pode ser ideal para você nesse momento, experimente comprar algum <strong>livro ou pesquisar sobre</strong>.
                                </p>);
                                break
                            case 2: setInvestiment(<p>Coloque em <strong>prática seus conhecimentos</strong> sobre investimentos, acompanhar o mercado pode te deixar mais seguro quando for investir.</p>);
                                break
                            case 3: setInvestiment(<p>Você tem um sólido conhecimento sobre investimentos, continue e rapidamente você <strong>alcançará seus objetivos</strong>.</p>);
                                break
                            default:
                                console.error("answer not found");
                                break
                        };
                    }else{
                        setResult(<p>Identificamos que você <strong>gerencia muito bem suas finanças</strong>, porém sempre se mantenha atualizado e atento em como seu dinheiro é gasto.<br/>
                        Procure <strong>diminuir seus gastos</strong> e <strong>invista</strong> o capital excedente, isso te trará melhor estabilidade no futuro.
                        </p>);

                        switch(user.profile.investment_knowledge){
                            case 0: setInvestiment(<p>Tente aprender sobre <strong>finanças e investimentos</strong>, comece criando uma <strong>reserva de emergência</strong> para possíveis problemas futuros.
                                </p>);
                                break
                            case 1: setInvestiment(<p>Aprender mais sobre <strong>investimentos</strong> pode ser ideal para você nesse momento, experimente comprar algum <strong>livro ou pesquisar sobre</strong>.
                                </p>);
                                break
                            case 2: setInvestiment(<p>Coloque em <strong>prática seus conhecimentos</strong> sobre investimentos, acompanhar o mercado pode te deixar mais seguro quando for investir.</p>);
                                break
                            case 3: setInvestiment(<p>Você tem um sólido conhecimento sobre investimentos, continue e rapidamente você <strong>alcançará seus objetivos.</strong></p>);
                                break
                            default:
                                console.error("answer not found");
                                break
                        };
                    };
                }else{
                    if(calculatePercentage(remainingTotal, arrSummary[1]) >= 25){
                        setResult(<p>Identificamos que você <strong>gerencia bem suas finanças</strong>, porém tente <strong>reduzir o seus gastos</strong> para aumentar o valor investido e consequentemente render mais futuramente.</p>);

                        switch(user.profile.investment_knowledge){
                            case 0: setInvestiment(<p>Tente aprender sobre <strong>finanças e investimentos</strong>, comece criando uma <strong>reserva de emergência</strong> para possíveis problemas futuros.
                                </p>);
                                break
                            case 1: setInvestiment(<p>Aprender mais sobre <strong>investimentos</strong> pode ser ideal para você nesse momento, experimente comprar algum <strong>livro ou pesquisar sobre</strong>.
                                </p>);
                                break
                            case 2: setInvestiment(<p>Coloque em <strong>prática seus conhecimentos</strong> sobre investimentos, acompanhar o mercado pode te deixar mais seguro quando for investir.</p>);
                                break
                            case 3: setInvestiment(<p>Você tem um sólido conhecimento sobre investimentos, continue e rapidamente você <strong>alcançará seus objetivos</strong>.</p>);
                                break
                            default:
                                console.error("answer not found");
                                break
                        };
                    }else{
                        setResult(<p>Identificamos que você <strong>gerencia bem suas finanças</strong>, porém tente <strong>reduzir o seus gastos</strong> para aumentar o valor investido e consequentemente render mais futuramente.<br/>
                        Procure <strong>diminuir seus gastos</strong> e <strong>invista</strong> o capital excedente, isso te trará melhor estabilidade no futuro.
                        </p>);

                        switch(user.profile.investment_knowledge){
                            case 0: setInvestiment(<p>Tente aprender sobre <strong>finanças e investimentos</strong>, comece criando uma <strong>reserva de emergência</strong> para possíveis problemas futuros.
                                </p>);
                                break
                            case 1: setInvestiment(<p>Aprender mais sobre <strong>investimentos</strong> pode ser ideal para você nesse momento, experimente comprar algum <strong>livro ou pesquisar sobre</strong>.
                                </p>);
                                break
                            case 2: setInvestiment(<p>Coloque em <strong>prática seus conhecimentos</strong> sobre investimentos, acompanhar o mercado pode te deixar mais seguro quando for investir.</p>);
                                break
                            case 3: setInvestiment(<p>Você tem um sólido conhecimento sobre investimentos, continue e rapidamente você <strong>alcançará seus objetivos.</strong></p>);
                                break
                            default:
                                console.error("answer not found");
                                break
                        };
                    };
                };
            }else{
                setResult(<p>
                    Sua situação atual é <strong>financeiramente estável</strong>, porém há um risco de você se endividar, você pode:

                    <ul>
                        <li>Reorganizar suas finanças.</li>
                        <li>Buscar fontes de <strong>renda extra</strong>.</li>
                        <li>Investir.</li>
                    </ul>

                    Isso te ajudará a ter um espaço em suas finanças para <strong>emergências</strong> e, além de criar uma <strong>maior estabilidade</strong>, também pode te ajudar a realizar algum de seus sonhos.<br/>
                    <strong>Aprender sobre investimentos</strong> e sobre finanças neste momento é essencial para alcançar melhores resultados.
                </p>);
            };
        }else{
            if(user.profile.responsible_for_someone > 0 || 
               user.profile.children > 0){
                
                setResult(
                <>
                    <p>Sua situação financeira atual é de <strong>endividado com pessoas que depende de você</strong>, aconselhamos que você:</p>

                    <ul>
                        <li>Faça uma lista de suas <strong>dívidas pendentes</strong>.</li>
                        <li>Registre seus ganhos e gastos e <strong>planeje seu orçamento</strong>.</li>
                        <li><strong>Economize</strong> o quanto puder.</li>
                        <li><strong>Renegocie</strong> suas dívidas.</li>
                        <li>Busque outras <strong>fontes de renda</strong>.</li>
                    </ul>

                    <p>
                        Conscientize as pessoas que dependem de você da sua situação financeira para que eles também ajudem a controlar os gastos.<br/>
                        Assim que sua situação financeira se estabilizar, aconselhamos que aprenda sobre investimentos e comece a <strong>investir seu dinheiro</strong> para evitar novos problemas financeiros.
                    </p>
                </>);

            } else {
                setResult(
                <>
                    <p> Sua situação financeira atual é de <strong>endividado </strong>, aconselhamos que você:</p>

                    <ul>
                        <li>Faça uma lista de suas <strong>dívidas pendentes</strong>.</li>
                        <li>Registre seus ganhos e gastos e <strong>planeje seu orçamento</strong>.</li>
                        <li><strong>Economize</strong> o quanto puder.</li>
                        <li><strong>Renegocie</strong> suas dívidas.</li>
                        <li>Busque outras <strong>fontes de renda</strong>.</li>
                    </ul>

                    <p>
                        Assim que sua situação financeira se estabilizar, aconselhamos que aprenda sobre investimentos e comece a <strong>investir seu dinheiro</strong> para evitar novos problemas financeiros.
                    </p>
                </>);
            };
        };
    }, []);

    const calculatePercentage = (total, percentage) => Math.floor(percentage * 100 / total) ;

    setTimeout(() => setOpacity("", 50));
    
    return(
        <main className={`${styles.body_result} ${styles[opacity]}`} >
            <Header />
            <div className={styles.result_title}>
                <h1>Resultado</h1>
                <p><strong>{user.profile.name}</strong>, confira sua análise financeira personalizada e descubra seus resultados.</p>
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
                                [calculatePercentage(arrSummary[0], user.fixed_result.energy), "Energia"],
                                [calculatePercentage(arrSummary[0], user.fixed_result.water), "Água"],
                                [calculatePercentage(arrSummary[0], user.fixed_result.rent), "Aluguel"],
                                [calculatePercentage(arrSummary[0], user.fixed_result.internet), "Internet"],
                                [calculatePercentage(arrSummary[0], user.fixed_result.food), "Alimentação"],
                                [calculatePercentage(arrSummary[0], user.fixed_result.other), "Outros"],
                            ]}
                        />
                    </div>

                    <h3>Total: R${arrSummary[0]}</h3>

                    <div className={styles.legend_graphic}>
                        <Legend
                            theme="dark" 
                            text={`Energia: R$${user.fixed_result.energy}`} 
                            description="Valor da conta mensal de energia." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Água: R$${user.fixed_result.water}`} 
                            description="Valor da conta mensal de água." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Aluguel: R$${user.fixed_result.rent}`} 
                            description="Valor do aluguel pago por mês." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Internet: R$${user.fixed_result.internet}`} 
                            description="Valor da conta mensal de Internet." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Alimentação: R$${user.fixed_result.food}`} 
                            description="Valor gasto por mês com alimentação." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Outros: R$${user.fixed_result.other}`} 
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
                                [calculatePercentage(arrSummary[1], user.variable_result.entertainment), "Entrete."],
                                [calculatePercentage(arrSummary[1], user.variable_result.leisure), "Lazer"],
                                [calculatePercentage(arrSummary[1], user.variable_result.trips), "Viagens"],
                                [calculatePercentage(arrSummary[1], user.variable_result.other), "Outros"]
                            ]}
                        />
                    </div>

                    <h3>Total: R${arrSummary[1]}</h3>

                    <div className={styles.legend_graphic}>
                        <Legend
                            theme="dark" 
                            text={`Entretenimento: R$${user.variable_result.entertainment}`} 
                            description="Dinheiro gasto com entretenimento como cinema, teatro, etc." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Lazer: R$${user.variable_result.leisure}`} 
                            description="Dinheiro gasto com lazer como spa, prática de esporte, etc." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Viagens: R$${user.variable_result.trips}`} 
                            description="Dinheiro gasto com Viagens como praia, viagens internacionais, etc." 
                        />
                        <Legend
                            theme="dark" 
                            text={`Outros: R$${user.variable_result.other}`} 
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
                {result}{investment}
            </section>
        </main>
    );
};

export default Result;