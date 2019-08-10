import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from "../types";

const ContactState = props => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jacques Kallis",
        email: "jacques@ar.com",
        phone: "444-222-1111",
        type: "personal"
      },
      {
        id: 2,
        name: "Dale Steyn",
        email: "dale@ar.com",
        phone: "666-222-1111",
        type: "professional"
      },
      {
        id: 3,
        name: "Hashim Amla",
        email: "hash@ar.com",
        phone: "111-222-1111",
        type: "professional"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  // Add contact
  const addContact = contact => {
    contact.id = uuid.v4(); //assign a id
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete contact
  const deleteContact = id => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  // Set current contact
  const setCurrent = contact => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };

  // Clear current contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  // Update contact
  const updateContact = contact => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };

  // Filter contacts

  // Clear filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        updateContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
