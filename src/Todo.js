import React from 'react'

import {List, ListItem, ListItemAvatar, ImageIcon, ListItemText, Button} from "@material-ui/core"
import db from './firebase'
import firebase from 'firebase'



function Todo(props) {
    
    return (
        <List>
            <ListItem className="todo__list">
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary = {props.todo.todo} secondary={Date()}/>
            </ListItem>
            <Button onClick={event => db.collection('todos').doc(props.todo.id).delete()}>❌ Delete me</Button>
        </List>
    )
}

export default Todo
