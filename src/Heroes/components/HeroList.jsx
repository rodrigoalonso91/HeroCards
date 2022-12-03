import { HeroCard } from "../components";
import { getHerosByPublisher } from "../helpers"

export const HeroList = ( {publisher} ) => {

    const heros = getHerosByPublisher(publisher);

    return (
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            { 
                heros.map( hero => {
                   return <HeroCard key={hero.id} {...hero} />
                })
            }
        </div>
    )
}
