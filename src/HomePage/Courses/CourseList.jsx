import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const mockData = [
    { name: 'Ifni1', id: 1 },
    { name: 'Data structers', id: 2 },
    { name: 'Algorithms', id: 3 },
    { name: 'Discrete math', id: 4 },
]

const CourseList = ({ showButton, removeButton }) => {
    const [toggleButton, setToggleButton] = useState(false)

    const handleButton = () => {
        if (toggleButton) {
            showButton()
            setToggleButton(false)
        }
        else {
            removeButton()
            setToggleButton(true)
        }
    }

    return (
        <>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                aria-label="courses"
            >
                {
                    mockData.map(({ name, id }) =>
                        <ListItem disablePadding key={id}>
                            <ListItemButton>
                                <ListItemText inset primary={name} />
                            </ListItemButton>
                        </ListItem>
                    )
                }
            </List>

            <IconButton size="large" onClick={handleButton}>
                <EditIcon />
            </IconButton>
        </>
    );
}

export default CourseList

