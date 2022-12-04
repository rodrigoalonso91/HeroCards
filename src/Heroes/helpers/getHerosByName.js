import { heros } from "../data/heros"

export const getHerosByName = ( name = '' ) => {

    name = name.toLocaleLowerCase().trim();

    if ( name.length === 0 ) return [];

    return heros.filter( ( hero ) => {

        return hero.superhero.toLocaleLowerCase().includes(name) || 
               hero.characters.toLocaleLowerCase().includes(name) || 
               hero.alter_ego.toLocaleLowerCase().includes(name)
    })
}