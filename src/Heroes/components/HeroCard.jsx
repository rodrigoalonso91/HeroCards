

export const HeroCard = ({id, superhero, publisher, alter_ego, first_appearance, characters}) => {

    const heroImgPath = `/assets/heroes/${id}.jpg`;
    
    const CharactersByHero = ({characters, alter_ego}) => {XMLDocument

        if (alter_ego !== characters) {
            return (<p>{characters}</p>);
        }
    }
    

    return (
        <div className="col">
            <div className="card ">
                <div className="row no-gutters">

                    <div className="col-4">
                        <img className="card-img" src={heroImgPath} alt={superhero}/>
                    </div>

                    <div className="col-8">
                        <div className="card-body">

                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            
                            <CharactersByHero characters={characters} alter_ego={alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
