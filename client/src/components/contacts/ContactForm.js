import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Grid, Header, Segment, Container, Checkbox } from 'semantic-ui-react'
import ContactContext from "../../context/contact/contactContext";

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      //clear it
      setContact({
        name: "",
        email: "",
        phone: "",
        type: "personal"
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    type: "personal"
  });

  const { name, email, phone, type } = contact;

  const onChange = e =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    //Clear contact after submission
    setContact({
      name: "",
      email: "",
      phone: "",
      type: "personal"
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <Form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? "Edit Contact" : "Add Contact"}
      </h2>
      <Form.Field>
        <input
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onChange}
        />
      </Form.Field>
      <Form.Field>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onChange}
        />
      </Form.Field>
      <Form.Field>
        <input
          type='text'
          name='phone'
          placeholder='Phone'
          value={phone}
          onChange={onChange}
        />
       </Form.Field> 
      <Header as='h5'>Contact Type</Header>
      <Form.Field>
        <Checkbox
          radio
          type='radio'
          label='Personal'
          name='type'
          value='personal'
          checked={type === "personal"}
          onChange={onChange}
        />
      </Form.Field>
      <Form.Field>
      <Checkbox
        radio
        type='radio'
        label='Professional'
        name='type'
        value='professional'
        checked={type === "professional"}
        onChange={onChange}
      />
      </Form.Field>
      <div>
        <Button type='submit' value={current ? "Update Contact" : "Add Contact"}>
          {current ? "Update Contact" : "Add Contact"}
        </Button>
      </div>
      {current && (
        <div>
          <Button onClick={clearAll}>
            Clear
          </Button>
        </div>
      )}
    </Form>
  );
};

export default ContactForm;
