import React from "react"

function Search({searchText, setSearchText}) {
    return(
        <div className="search-container">
            <input on type="text" placeholder="Search names..." onChange={(event) => setSearchText(event.target.value)} />
        </div>
    );
}

export default Search;