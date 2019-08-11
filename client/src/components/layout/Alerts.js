import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

const Alerts = () => {
  const alertContext = useContext(AlertContext);

  return (
    // if there is anything in alerts array, loop through and output
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map(alert => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className='fas fa-info-circle' /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
