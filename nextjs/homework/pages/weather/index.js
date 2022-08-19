import Layout from "../../components/Layout";
import axios from 'axios';
import css from '../../styles/Weather.module.scss';

export async function getStaticProps(context) {
    const APIKey = '125c4133df829f739ea47c7cc20dfd7c';
    let cityName = 'Hoi an';
    let weatherData;
    const resonse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${APIKey}&lang=vi&units=metric`)
        .then(res => res)
        .catch(errors => alert(errors));
    weatherData = resonse.data;
    return {
        props: {
            weatherData
        }
    }
}

const Weather = ({weatherData}) => {
    return (
        <Layout>
            <div className={css.container}>
                <div className={css['container__header']}>
                    <h2>Get Weather Info At Hoi An</h2>
                </div>
                {
                    <div className={css['container__weather']}>
                        <div className={css['container__weather__icon']}>
                            <img 
                                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
                                alt={weatherData.weather[0].description}
                            />
                        </div>
                        <div className={css['container__weather__temperature']}>
                            <span>{(weatherData.main.temp).toFixed(0)}</span>
                            <span><sup>o</sup>C</span>
                        </div>
                        <div className={css['container__weather__detail']}>
                            <p className={css['container__weather__detail__description']}>{weatherData.weather[0].description}</p>
                            <p className={css['container__weather__detail__humidity']}>Humidity: {weatherData.main.humidity}%</p>
                            <p className={css['container__weather__detail__wind']}>Wind: {weatherData.wind.speed} m/s</p>
                        </div>
                </div>
                }
            </div>
        </Layout>
    );
};

export default Weather;