import React, { useCallback } from "react";
import { Button } from "semantic-ui-react";
import { store } from "react-notifications-component";

import { notificationSettings } from "constants/notificationSettings";

const Reset = ({ locale }) => {
  const handleReset = useCallback(() => {
    try {
      localStorage.clear();
      //TODO: Обновить
      store.addNotification({
        ...notificationSettings,
        title: "Сброс",
        message: "Произошел сброс настроек",
        type: "success",
      });
    } catch (err) {
      console.log(err);
      store.addNotification({
        ...notificationSettings,
        title: "Сброс",
        message: "Сброс не удался",
        type: "danger",
      });
    }
  }, []);

  return (
    <div id="reset">
      <p>{locale.settings.reset}</p>
      <div>
        <Button onClick={handleReset}>{locale.settings.resetButton}</Button>
      </div>
    </div>
  );
};

export default Reset;
