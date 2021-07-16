import React from 'react'
import {List,ListItem,Avatar,ListItemText} from '@material-ui/core';
import AssignmentIcon from '@material-ui/icons/Assignment';

function Todo(props) {
    return (
        <div>
            <List>
                <ListItem>
                    <Avatar>
                        <AssignmentIcon/>
                    </Avatar>
                    <ListItemText primary={props.todo} secondary="Jan 9, 2014" />
                </ListItem>
            </List>
        </div>
    )
}

export default Todo
