import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import { useMantineTheme } from "@mantine/core";
import FileDropzoneChildren from "./Helpers/FileDropZoneTools";
import { SetFieldValuesProps, ValueType, ControlledProps } from "src/typings";

const TXT_MIME_TYPE = ["text/plain"];

function FileDropZone(props: DropzoneProps & ControlledProps) {

  // { setFieldValue }: SetFieldValuesProps<ValueType>
  const theme = useMantineTheme();

  return (
    <Dropzone
      onDrop={(files) => console.log("accepted files", files)}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={TXT_MIME_TYPE}
    >
      {(status) => {
        return FileDropzoneChildren(status, theme);
      }}
    </Dropzone>
  );
}

export default FileDropZone;
