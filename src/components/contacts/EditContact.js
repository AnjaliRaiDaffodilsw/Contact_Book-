import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { updateContact, getContact } from '../../actions/contactAction';
import shortid from 'shortid';
import { useParams, useHistory } from 'react-router-dom';


function EditContact() {
    let { id } = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    const contact = useSelector((state) => state.contact.contact);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    useEffect(() => {
        if (contact !== null) {
            setName(contact.name);
            setEmail(contact.email)
            setPhone(contact.phone)
        }
        dispatch(getContact(id));
    }, [contact]);

    const submitHandler = (event) => {
        event.preventDefault();
        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email
        })
        dispatch(updateContact(update_contact));
        history.push('/');
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-warning">Edit the Contact</div>
            <div className="card-body">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Name"
                            value={name}

                            onChange={(event) => {
                                setName(event.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your Phone Number"
                            value={phone}
                            onChange={(event) => {
                                setPhone(event.target.value)
                            }}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Your E-mail Address"
                            value={email}
                            onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                        />
                    </div>
                    <button className="btn btn-warning" type="submit">
                        Update Contact
          </button>
                </form>
            </div>
        </div>
    )
}

export default EditContact
