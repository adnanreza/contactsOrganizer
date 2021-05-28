import React, { Fragment } from "react";
import { Loader } from 'semantic-ui-react'

const Spinner = () => {
  return (
    <Fragment>
      <Loader active inline='centered' size='massive' />
    </Fragment>
  );
};

export default Spinner;
