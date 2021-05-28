import React, { useContext, useRef, useEffect } from "react";
import { Form } from 'semantic-ui-react'
import ContactContext from "../../context/contact/contactContext";

const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  const { filterContacts, clearFilter, filtered } = contactContext;

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const onChange = e => {
    if (text.current.value !== "") {
      filterContacts(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <Form>
      <Form.Field>
        <input
          ref={text}
          type='text'
          placeholder='Filter Contacts...'
          onChange={onChange}
        />
      </Form.Field>
    </Form>
  );
};

export default ContactFilter;
