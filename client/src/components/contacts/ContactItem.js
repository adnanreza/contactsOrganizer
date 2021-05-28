import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button, Card, List, Divider } from 'semantic-ui-react'
import ContactContext from '../../context/contact/contactContext';

const ContactItem = ({ contact }) => {
  const contactContext = useContext(ContactContext);
  const { deleteContact, setCurrent, clearCurrent } = contactContext;

  const { _id, name, email, phone, type } = contact;

  const onDelete = () => {
    deleteContact(_id);
    clearCurrent();
  };

  return (
    <Card fluid color='blue'>
      <Card.Content>
        <Card.Header>
          {name}{' '}
          <span
            style={{ float: 'right' }}
            className={
              'badge ' +
              (type === 'professional' ? 'badge-success' : 'badge-primary')
            }
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </span>
        </Card.Header>
        <Divider/>
        <Card.Meta>
          <List>
            {email && (
              <List.Item>
                <List.Icon name='mail' />
                <List.Content>{email}</List.Content>
              </List.Item>
            )}
            {phone && (
              <List.Item>
                <List.Icon name='phone' />
                <List.Content>{phone}</List.Content>
              </List.Item>
            )}
          </List>
        </Card.Meta>
      </Card.Content>
      
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button
          basic color='green'
          onClick={() => {
            setCurrent(contact);
          }}
        >
          Edit
        </Button>
        <Button basic color='red' onClick={onDelete}>
          Delete
        </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
};

export default ContactItem;
