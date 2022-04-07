import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";

function AlertMessage() {
  return (
    <Alert icon={<IconAlertCircle size={16} />} title="Bummer!" color="red">
      Something terrible happened! You made a mistake and there is no going
      back, your data was lost forever!
    </Alert>
  );
}

export default AlertMessage;
