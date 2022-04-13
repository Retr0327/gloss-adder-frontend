import { ControllerProps } from "types";
import { Select, FileDropZone } from "./FormikComponents/index";

function FormikController(props: ControllerProps) {
  const { control, ...rest } = props;

  switch (control) {
    case "drop-zone":
      return <FileDropZone {...rest} />;
    case "select":
      return <Select {...rest} />;
    default:
      return null;
  }
}

export default FormikController;
