
import React, {useState} from "react";
import Button from "../UI/Button";
import Card from '../UI/Card';
import classes from './AddUser.module.css';

const AddUser = (props) => {

   const [enteredUsername, setEnteredUsername ] = useState('')
   const [enteredUserage, setEnteredUserage ] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredUsername, enteredUserage)
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
                    onChange={usernameChangeHanlder} />

                <label htmlFor="age"> Age( Years )</label>
                <input 
                    id="age" 
                    type="number" 
                    onChange={userageChangeHanlder} />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser;