import './App.css'
import { useState } from 'react';
import axios from 'axios';
const Form = ({onSubmit}) => {
    const [userName,setUserName]=useState("")
    const handleSubmit= async(event) =>
    {
        event.preventDefault();
        const resp =await axios.get(`https://api.github.com/users/${userName}`);
        setUserName("");
        onSubmit(resp.data)

    }
    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                placeholder='GitHub username'
                required
                value={userName}
                onChange={(e) =>{setUserName(e.target.value)}}

            />
            <button>
                Add card
            </button>

        </form>
    );
}
 
export default Form
;