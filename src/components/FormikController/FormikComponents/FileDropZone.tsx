import useCustomFormik from "./CustomFormik";
import { useMantineTheme } from "@mantine/core";
import { Dropzone, DropzoneProps } from "@mantine/dropzone";
import FileDropzoneChildren from "./Helpers/FileDropZoneTools";
import { SetFieldValuesProps, ValueType, ControlledProps } from "src/typings";

const TXT_MIME_TYPE = ["text/plain"];
const theme = useMantineTheme();

// { setFieldValue }: SetFieldValuesProps<ValueType>
function FileDropZone(props: DropzoneProps & ControlledProps) {
  const { label, name, ...rest } = props;
  const [formik, hasError] = useCustomFormik(name);

  const handleOnDrop = (files: File[]) => {
    console.log("accepted files", files);
    formik.setFieldValue("fileUpload", files);
  };

  return (
    <Dropzone
      {...rest}
      onReject={(files) => console.log("rejected files", files)}
      maxSize={3 * 1024 ** 2}
      accept={TXT_MIME_TYPE}
      onDrop={handleOnDrop}
    >
      {(status) => {
        return FileDropzoneChildren(status, theme);
      }}
    </Dropzone>
  );
}

export default FileDropZone;
