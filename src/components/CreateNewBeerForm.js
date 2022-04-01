import { useState } from "react";

function CreateNewBeerForm() {
    const [newBeer, setNewBeer] = useState({
        name: "",
        tagline: "",
        description: "",
        first_brewed: "",
        brewers_tips: "",
        attenuation_level: 0,
        contributed_by: ""
    });

    const handleInput = (e) => setNewBeer(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div>
            <h1>Create New Beer</h1>
            <form onSubmit={handleSubmit}>

                <label>Name</label>
                <input value="" name="name" type="text" onChange={handleInput} />

                <label>Tagline</label>
                <input value="" name="tagline" type="text" onChange={handleInput} />

                <label>Description</label>
                <input value="" name="description" type="text" onChange={handleInput} />

                <label>First Brewed</label>
                <input value="" name="first_brewed" type="text" onChange={handleInput} />

                <label>Brewers Tips</label>
                <input value="" name="brewers_tips" type="text" onChange={handleInput} />

                <label>Attenuation Level</label>
                <input value="" name="attenuation_level" type="number" onChange={handleInput} />

                <label>Contributed by</label>
                <input value="" name="contributed_by" type="text" onChange={handleInput} />

                <button type="submit">Create new beer!</button>
            </form>
        </div>
    );
}

export default CreateNewBeerForm;