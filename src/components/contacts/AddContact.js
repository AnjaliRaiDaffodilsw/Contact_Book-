import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addContact } from '../../actions/contactAction';
import shortid from 'shortid';
import {useHistory} from 'react-router-dom';

function AddContact() {
    const dispatch = useDispatch();
    let history = useHistory();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const submitHandler = (event) => {
        event.preventDefault();
        const new_contact = {
            id : shortid.generate(),
            name: name,
            email: email,
            phone: phone
        }
        dispatch(addContact(new_contact));
        history.push('/');
    }
    return (
        <div className="card border-0 shadow">
            <div className="card-header bg-warning">Add a Contact</div>
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
                    <button className="btn btn-primary" type="submit">
                        Create Contact
          </button>
                </form>
            </div>
        </div>
    )
}

export default AddContact
