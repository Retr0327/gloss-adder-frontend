import { Progress } from "@mantine/core";

type ProgressBarType = {
  percentage: number;
};

function ProgressBar({ percentage }: ProgressBarType) {
  return (
    <Progress
      value={percentage}
      label={`${percentage}%`}
      size="xl"
      radius="xl"
    />
  );
}

export default ProgressBar;
