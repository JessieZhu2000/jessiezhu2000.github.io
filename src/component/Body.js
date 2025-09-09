import React from "react"
import Detail from "./Detail";

const Body = ({ show, bgImg }) => {
  const modifier = show ? ` pageHero--${String(show).toLowerCase()}` : '';
  const style = bgImg ? { backgroundImage: `url(${bgImg})` } : {};

  // For Location page: show only the content container (no outer section)
  if (String(show).toLowerCase() === 'location') {
    return (
      <div className="pageHero__content pageHeroContentStandalone">
        <Detail show={show} />
      </div>
    )
  }

  return (
    <section className={"pageHero" + modifier} style={style}>
      <div className="pageHero__content">
        <Detail show={show} />
      </div>
    </section>
  )
}
export default Body