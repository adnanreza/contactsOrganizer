import React from "react";
import { Placeholder, Card, Button } from 'semantic-ui-react'

const Spinner = () => {
  return (
  <>
  <Card fluid>
      <Placeholder fluid>
            <Placeholder.Header>
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Header>
            <Placeholder.Paragraph>
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
              <Placeholder.Line />
            </Placeholder.Paragraph>

        <Placeholder.Paragraph>
          <div className='ui two buttons'>
            <Button disabled>Edit</Button>
            <Button disabled>Cancel</Button>
          </div>
        </Placeholder.Paragraph>

      </Placeholder>
    </Card> 
  </>
  );
};

export default Spinner;
