import React, { useContext, useEffect } from "react";
import { Container, Divider, Segment } from 'semantic-ui-react'
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/ContactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Segment>
        <ContactForm />
      </Segment>
      <Divider/>
      <Segment>
        <ContactFilter />
        <Divider/>
        <Contacts />
      </Segment>
    </Container>
  );
};

export default Home;
