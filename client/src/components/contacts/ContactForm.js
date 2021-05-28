import React, { useState, useContext, useEffect } from "react";
import { Button, Form, Header, Label } from 'semantic-ui-react'
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
        <input
          type='radio'
          label='Personal'
          name='type'
          value='personal'
          class="hidden" readonly="" tabindex="0"
          checked={type === "personal"}
          onChange={onChange}
        />&nbsp;
        <Label as='a' color='orange' size='large'>Personal</Label>
      </Form.Field>
      <Form.Field>
        
        <input
          type='radio'
          label='Professional'
          name='type'
          value='professional'
          class="hidden" readonly="" tabindex="0"
          checked={type === "professional"}
          onChange={onChange}
        />
        &nbsp;
        <Label as='a' color='teal' size='large'>Professional</Label>
      </Form.Field>
      <Button primary type='submit' value={current ? "Update Contact" : "Add Contact"}>
          {current ? "Update Contact" : "Add Contact"}
      </Button>
      {current && (
          <Button secondary onClick={clearAll}>
            Clear
          </Button>
      )}
    </Form>
  );
};

export default ContactForm;
