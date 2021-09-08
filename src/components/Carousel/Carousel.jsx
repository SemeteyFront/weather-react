import { useState } from 'react';
import cn from 'classnames';
import css from './carousel.css';

function Carousel() {
  const [isWeekMode, setIsWeekMode] = useState(true)

  return (
    <div className={css.carousel}>
      <div className={css.header}>
        <h2>Прогноз</h2>
        <button
          className={cn(css.headerBtn, { [css.headerBtnActive]: isWeekMode })}
          onClick={() => setIsWeekMode(true)}
        >
          На неделю
        </button>
        <button
          className={cn(css.headerBtn, { [css.headerBtnActive]: !isWeekMode })}
          onClick={() => setIsWeekMode(false)}
        >
          По часовой
        </button>
      </div>
      <div className={css.content}>
        {[1,2, 3, 4, 5, 6, 7].map((n) => (
          <div className={css.card} key={n}>
            <p>Завтра</p>
            <img src="" alt="image" />
            <b>10°C</b>
            <b>4°C</b>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel