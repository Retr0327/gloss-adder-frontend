import React from "react";

type SelectedFilesProps = {
  files: FormData | null;
};

function SelectedFiles(props: SelectedFilesProps) {
  const { files } = props;

  if (files) {
    const objectValues = Object.values(files);

    return <></>;
  }

  return null;
}

export default SelectedFiles;
