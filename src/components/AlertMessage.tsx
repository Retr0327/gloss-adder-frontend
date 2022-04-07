import { Alert } from "@mantine/core";
import { IconAlertCircle } from "@tabler/icons";

type AlertMessageProps = {
  title: string;
  message: string;
};

function AlertMessage(props: AlertMessageProps) {
  const { title, message } = props;

  return (
    <Alert icon={<IconAlertCircle size={16} />} title={title} color="red">
      {message}
    </Alert>
  );
}

export default AlertMessage;
