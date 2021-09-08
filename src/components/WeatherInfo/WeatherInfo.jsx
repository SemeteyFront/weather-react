import css from './weatherInfo.css'


function WeatherInfo() {
  return (
    <section className={css.container}>
      <h2>Подробно на сегодня</h2>
      <div className={css.content}>
        <div className={css.card}>
          <p>Скорость ветра</p>
          <strong>7 м/с</strong>
        </div>
        <div className={css.card}>
          <p>Влажность</p>
          <strong>84 %</strong>
        </div>
        <div className={css.card}>
          <p>Видимость</p>
          <strong>6.2 км</strong>
        </div>
        <div className={css.card}>
          <p>Давление</p>
          <strong>742 мм рт. ст.</strong>
        </div>
      </div>
    </section>
  )
}

export default WeatherInfo