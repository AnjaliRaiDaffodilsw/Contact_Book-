import React from 'react'
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { deleteContact } from '../../actions/contactAction';
import { useDispatch } from 'react-redux';

function Contact({ name, phone, email, id, selectAll }) {
    const dispatch = useDispatch();
    return (
        <tr>
            <td>
                <div className="custom-control custom-checkbox">
                    <input
                        checked={selectAll}
                        type="checkbox" className="custom-control-input" />
                    <label className="custom-control-label"></label>
                </div>
            </td>
            <td>
                <Avatar className="mr-2" name={name} size="45" round={true} />
                {name}
            </td>
            <td>{phone}</td>
            <td>{email}</td>
            <td className="actions">
                <Link to={`/edit/${id}`}>
                    <span className="material-icons mr-2">
                        edit
                    </span>
                </Link>
                <span
                    className="material-icons  text-danger"
                    onClick={() => dispatch(deleteContact(id))}>
                    remove_circle
                </span>
            </td>
        </tr >
    )
}

export default Contact
