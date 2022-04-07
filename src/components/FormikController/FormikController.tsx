import { ControllerProps } from "src/typings";
import FileDropZone from "./FormikComponents/FileDropZone";

function FormikController(props: ControllerProps) {
  const { control, ...rest } = props;

  switch (control) {
    case "drop-zone":
      return <FileDropZone {...rest} />;
    default:
      return null;
  }
}

export default FormikController;
