import { heros } from '../data/heros';

export const getHerosByPublisher = (publisher) => {

    const publisherList = ['DC Comics', 'Marvel Comics'];

    if (!publisherList.includes(publisher)) {
        throw new Error(`${publisher} is not a valid publisher`)
    };

    return heros.filter(hero => hero.publisher === publisher);

}