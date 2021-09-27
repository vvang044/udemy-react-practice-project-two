
import React, {useState} from "react";
import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {

   const [enteredUsername, setEnteredUsername ] = useState('')
   const [enteredUserage, setEnteredUserage ] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || 
             enteredUserage.trim().length){
            return;
        }

        //+ converts a string to a number
        if(+enteredUserage < 1 ){
            return;
        }
        console.log(enteredUsername, enteredUserage)
        setEnteredUserage('') //resets to empty string after lick
        setEnteredUsername('') //resets to empty string after lick
    }

    const usernameChangeHanlder = (event) => {
        setEnteredUsername(event.target.value)
    }

    const userageChangeHanlder = (event) => {
        setEnteredUserage(event.target.value)
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username"> User Name</label>
                <input
                    id="username" 
                    type="text"
                    value={enteredUsername}
                    onChange={usernameChangeHanlder} />

                <label htmlFor="age"> Age( Years )</label>
                <input 
                    id="age" 
                    type="number"
                    value={enteredUserage} 
                    onChange={userageChangeHanlder} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;