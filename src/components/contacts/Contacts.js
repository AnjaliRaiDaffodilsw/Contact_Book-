import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Contact from './Contact';
import { selectAllContact, deleteAllContact, deleteSelectedContact } from '../../actions/contactAction'

function Contacts() {
    const contacts = useSelector((state) => state.contact.contacts);
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const selctedContacts = useSelector(
        (state) => state.contact.selectedContact
    );
    useEffect(() => {
        if (selectAll) {
            dispatch(selectAllContact(contacts.map((contact) => contact.id)))
        } else {
            dispatch(deleteAllContact())
        }
    }, [selectAll])
    return (
        < div >
            {
                selctedContacts.length > 0 ? (
                    <button
                        className="btn btn-danger mb-3"
                        onClick={() => dispatch(deleteSelectedContact())}
                    >
                        delete all
                    </button>
                ) : null
            }
            <table className="table shadow ">
                <thead className=" text-black bg-danger">
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox"
                                    id="selectAll"
                                    value={selectAll}
                                    onClick={() => setSelectAll(!selectAll)}
                                    className="custom-control-input" />
                                <label htmlFor="selectAll"
                                    className="custom-control-label"></label>
                            </div>
                        </th>
                        <th >Name</th>
                        <th>Phone</th>
                        <th>E-mail</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((cont) => {
                            return (
                                <Contact
                                    key={cont.id}
                                    name={cont.name}
                                    phone={cont.phone}
                                    email={cont.email}
                                    id={cont.id}
                                    selectAll={selectAll} />
                            )
                        })
                    }

                </tbody>
            </table>
        </div >
    )
}

export default Contacts
