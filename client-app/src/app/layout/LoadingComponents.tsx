import { Dimmer, Loader } from "semantic-ui-react";

interface LoadingComponentsProps {
  inverted?: boolean;
  content: string;
}

const LoadingComponents = ({
  inverted = true,
  content = "Loading...",
}: LoadingComponentsProps) => {
  return (
    <Dimmer active={true} inverted={inverted}>
      <Loader content={content}></Loader>
    </Dimmer>
  );
};

export default LoadingComponents;
