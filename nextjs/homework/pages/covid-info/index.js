import Layout from "../../components/Layout";
import axios from 'axios';
import scss from '../../styles/CovidInfo.module.scss';

export async function getStaticProps(context){
    let covidData;
    let res = await axios.get(`https://api.covid19api.com/total/country/vietnam`)
        .then(response => response);
    covidData = res.data;
    console.log(context);
    return {
        props: {covidData}
    }
}

const addDotToThousand = str => {
    let arr = str.toString().split('');
    for(let i = arr.length - 3; i >= 0; i-=3) {
        if(i == 0) break;
        else arr.splice(i, 0, '.');
    }
    return arr.join('');
};

export default function CovidInfo({ covidData }) {
    const covidDataArr = [...covidData];
    return (
        <Layout>
            <div className={scss.container}>
                <header className={scss['container__header']}>
                    <h2>Vietnam's Covid 19 Infomation</h2>
                    <h4>Total: {covidDataArr.length} days.</h4>
                </header>
                <main className={scss['container__main']}>
                    <div className={scss['container__main__covid-info']}>
                        <table className={scss['container__main__covid-info__table']}>
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Confirmed</th>
                                    <th>Active</th>
                                    <th>Recovered</th>
                                    <th>Deaths</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    covidDataArr.map((ele, index) => (
                                        <tr key={index}>
                                            <td>{ele.Date.split('T')[0]}</td>
                                            <td>{addDotToThousand(ele.Confirmed)}</td>
                                            <td>{addDotToThousand(ele.Active)}</td>
                                            <td>{addDotToThousand(ele.Recovered)}</td>
                                            <td>{addDotToThousand(ele.Deaths)}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </main>
            </div>
        </Layout>
    );
}