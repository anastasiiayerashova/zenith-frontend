import s from './LineSection.module.css'

const LineSection = () => {
    return (
        <section className={s.line_section}>
  <h1 className={s.visually_hidden}>Tech Skills</h1>

  <div className={s.marquee}>
    <div className={s.marquee__inner}>
      <ul className={s.marquee__line}>
        <li>BEST PRICES</li>
        <li>NEW ARRIVALS</li>
        <li>LATEST COLLECTION</li>
        <li>LIMITED OFFER</li>
        <li>HOT DEALS</li>
        <li>DISCOUNTS</li>
        <li>SALE</li>
      </ul>

      <ul className={s.marquee__line}>
        <li>BEST PRICES</li>
        <li>NEW ARRIVALS</li>
        <li>LATEST COLLECTION</li>
        <li>LIMITED OFFER</li>
        <li>HOT DEALS</li>
        <li>DISCOUNTS</li>
        <li>SALE</li>
      </ul>
    </div>
  </div>

  <div className={s.marquee_2}>
    <div className={s.marquee__inner_2}>
      <ul className={s.marquee__line_2}>
        <li>BEST PRICES</li>
        <li>NEW ARRIVALS</li>
        <li>LATEST COLLECTION</li>
        <li>LIMITED OFFER</li>
        <li>HOT DEALS</li>
        <li>DISCOUNTS</li>
        <li>SALE</li>
      </ul>

      <ul className={s.marquee__line_2}>
        <li>BEST PRICES</li>
        <li>NEW ARRIVALS</li>
        <li>LATEST COLLECTION</li>
        <li>LIMITED OFFER</li>
        <li>HOT DEALS</li>
        <li>DISCOUNTS</li>
        <li>SALE</li>
      </ul>
    </div>
  </div>
</section>
    )
}

export default LineSection