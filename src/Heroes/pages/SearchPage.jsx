import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string'
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../components';
import { getHerosByName } from '../helpers';

export const SearchPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const { q = '' } = queryString.parse(location.search);
    const heros = getHerosByName(q);

    const showSearchAlert = q === '';
    const showErrorAlert = heros.length === 0 && q !== ''
    
    const { searchText, onInputChange } = useForm({
        searchText: q
    });
    
    const onSearchSubmit = (event) => {
        
        event.preventDefault();
        navigate(`?q=${searchText.trim().toLowerCase()}`)
    }

    return (
        <>
            <h1>Search</h1>
            <hr/>

            <div className="row">

                <div className="col-5">
                    <form onSubmit={ onSearchSubmit }>
                        <input
                          type="text"
                          placeholder="Search a hero"
                          className="form-control"
                          name="searchText"
                          autoComplete="off"
                          value={ searchText } 
                          onChange={ onInputChange } />

                        <button className="btn btn-outline-primary mt-3">
                            Submit
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr/>

                    <div 
                        className="alert alert-primary animate__animated animate__fadeIn" 
                        style={{ display: showSearchAlert ? '' : 'none' }}> 
                            Search a hero </div>

                    <div 
                        className="alert alert-danger animate__animated animate__fadeIn"
                        style={{display: showErrorAlert ? '' : 'none'}}>
                            No hero with <b>{ q }</b>
                    </div>

                    {
                        heros.map( hero => <HeroCard key={hero.id} {...hero} />)
                    }
                </div>
            </div>
        
        
        </>
    )
}
