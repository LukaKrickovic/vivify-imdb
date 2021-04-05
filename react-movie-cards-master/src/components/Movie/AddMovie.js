import React, { useState } from 'react'

const AddMovie = ({setState, movies}) => {
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');
    const [subtitleError, setSubtitleError] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [imageUrlError, setImageUrlError] = useState('');

    const handleChange = e => {
        switch(e.target.name){
            case 'name': {setName(e.target.value); break; }
            case 'subtitle': {setSubtitle(e.target.value); break; }
            case 'description': {setDescription(e.target.value); break; }
            case 'imageUrl': {setImageUrl(e.target.value); break; }
        }
    }

    const submit = e => {
        e.preventDefault();
        if(validate()){
            var randomId = Math.floor(Math.random() * 10000);
            console.log(randomId)
            setState([...movies, 
                {ratingCount: 0, title: name, subtitle: subtitle, imageUrl: imageUrl, description: description,
                     isDeletable: true, id: randomId}]);
            resetForm();
        }

    }

    function resetForm(){
        setName('');
        setSubtitle('');
        setDescription('');
        setImageUrl('');
    }

    function validate(){
        // var isValid = validateName() && validateSubtitle() && validateDescription() && validateImageUrl();
        var isNameValid = validateName();
        var isSubtitleValid = validateSubtitle();
        var isDescriptionValid = validateDescription();
        var isImageUrlValid = validateImageUrl();
        return isNameValid && isSubtitleValid && isDescriptionValid && isImageUrlValid;
    }

    function validateName(){
        if(!name){
            setNameError('Please input name!');
            return false;
        }
        return true;
    }

    function validateSubtitle(){
        if(!subtitle){
            setSubtitleError('Please input subtitle!');
            console.log(subtitleError)
            return false;
        }
        return true;
    }

    function validateDescription(){
        if(!description){
            setDescriptionError('Please input a description!');
            return false;
        }
        return true;
    }

    function validateImageUrl(){
        if(!imageUrl){
            setImageUrlError('Please input a url for the movie image!');
            return false;
        }
        return true;
    }
    
    return (
        <div>
            <form style={{marginLeft: '10%'}}>
                <label htmlFor='name'>
                Movie name: *
                <input 
                    name='name'
                    // required
                    type='text'
                    value={name}
                    onChange={handleChange}
                ></input>
                </label>
                <p>{nameError}</p>

                <br />
                <label htmlFor='subtitle'>
                Subtitle: *
                <input 
                    name='subtitle'
                    // required
                    type='text'
                    value={subtitle}
                    onChange={handleChange}
                ></input>
                </label>
                <p>{subtitleError}</p>

                <br />
                <label htmlFor='description'>
                Description: *
                <textarea 
                    name='description'
                    // required
                    value={description}
                    onChange={handleChange}
                ></textarea>
                </label>
                <p>{descriptionError}</p>

                <br />
                <label htmlFor='imageUrl'>
                Image URL: *
                <input 
                    name='imageUrl'
                    // required
                    value={imageUrl}
                    onChange={handleChange}
                ></input>
                </label>
                <p>{imageUrlError}</p>

                <br />
                <button onClick={submit}>Submit</button>


            </form>
        </div>
    )
}

export default AddMovie
