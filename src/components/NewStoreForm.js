import React, {useState} from "react"

function NewStoreForm({postStore}) {

    const [storeForm, setStoreForm] = useState({name: '',
    image: '',
    season: '',
    episode: ''})

    function onSubmitStore(event) {
        event.preventDefault()
        postStore(storeForm)

    }

    function handleChange(event) {
        
        setStoreForm({...storeForm, [event.target.id]: event.target.value})
        console.log(storeForm)
    }

    return(
        <form onSubmit={onSubmitStore}>
            <input onChange={handleChange} type="text" id="name" placeholder="Store Name"/>
            <input onChange={handleChange} type="text" id="image" placeholder="Image URL" />
            <input onChange={handleChange} type="number" id="season" placeholder="Season" step="1"/>
            <input onChange={handleChange} type="number" id="episode" placeholder="Episode" step="1"/>
            <button type="submit">Add Store</button>
        </form>
    )
}

export default NewStoreForm;