import {
    CREATE_CONTACT,
    GET_CONTACT,
    UPDATE_CONTACT,
    DELETE_CONTACT,
    SELECT_CONTACT,
    REMOVE_CONTACT,
    DELETE_SELECTED_CONTACT
} from '../constants/Types';



//actions
export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact
    }
}


//get an action

export const getContact = (id) => {
    return {
        type: GET_CONTACT,
        payload: id
    }
}


//update an action
export const updateContact = (contact) => {
    return {
        type: UPDATE_CONTACT,
        payload: contact
    }
}


//delete action
export const deleteContact = (id) => {
    return {
        type: DELETE_CONTACT,
        payload: id
    }
}

//select all contact
export const selectAllContact = (id) => {
    return {
        type: SELECT_CONTACT,
        payload: id
    }
}

//delete selected contact
export const deleteAllContact = () => {
    return {
        type: REMOVE_CONTACT
    }
}

//DELETE SELECTED CONTACT
export const deleteSelectedContact = (id) => {
    return {
        type: DELETE_SELECTED_CONTACT,
    }
}