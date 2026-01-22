import react from 'react';
import "./SearchInput.css"

function SearchInput ({searchTerm, onSearchChange}) {
    return (<section className="search">
        <input type="search"
        placeholder="Buscar producto"
        className="search-bar"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}/>
    </section>);

}

export default SearchInput;