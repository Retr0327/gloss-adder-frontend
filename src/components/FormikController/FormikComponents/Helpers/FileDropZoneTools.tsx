import { DropzoneStatus } from "@mantine/dropzone";
import { Group, Text, MantineTheme } from "@mantine/core";
import { Upload, FileImport, X, Icon as TablerIcon } from "tabler-icons-react";

function getIconColor(
  status: DropzoneStatus,
  theme: MantineTheme,
  hasError: JSX.Element | null
) {
  return status.accepted
    ? theme.colors[theme.primaryColor][theme.colorScheme === "dark" ? 4 : 6]
    : status.rejected || hasError
    ? theme.colors.red[theme.colorScheme === "dark" ? 4 : 6]
    : theme.colorScheme === "dark"
    ? theme.colors.dark[0]
    : theme.colors.gray[7];
}

function ImageUploadIcon({
  status,
  error,
  ...props
}: React.ComponentProps<TablerIcon> & {
  status: DropzoneStatus;
  error: JSX.Element | null;
}) {
  if (status.accepted) {
    return <Upload {...props} />;
  }

  if (status.rejected || error) {
    return <X {...props} />;
  }

  return <FileImport {...props} />;
}

function fileDropzoneChildren(
  status: DropzoneStatus,
  theme: MantineTheme,
  hasError: JSX.Element | null
) {
  return (
    <Group
      position="center"
      spacing="xl"
      style={{ minHeight: 220, pointerEvents: "none" }}
    >
      <ImageUploadIcon
        status={status}
        error={hasError}
        style={{ color: getIconColor(status, theme, hasError) }}
        size={80}
      />

      <div>
        <Text size="xl" inline>
          {hasError
            ? "Please Select a File"
            : "Drag files here or click to select files"}
        </Text>
        <Text size="sm" color="dimmed" inline mt={7}>
          {!hasError &&
            "Attach as many files as you like, each file should not exceed 5mb"}
        </Text>
      </div>
    </Group>
  );
}

export default fileDropzoneChildren;
