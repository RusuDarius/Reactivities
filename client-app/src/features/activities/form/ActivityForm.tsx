import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";

//TODO Form functionalities

const ActivityForm = () => {
  return (
    <Segment clearing>
      <Form>
        <FormInput placeholder="Title"></FormInput>
        <FormTextArea placeholder="Description"></FormTextArea>
        <FormInput placeholder="Category"></FormInput>
        <FormInput placeholder="Date"></FormInput>
        <FormInput placeholder="Title"></FormInput>
        <FormInput placeholder="Venue"></FormInput>
        <Button floated="right" positive type="submit" content="Submit" />
        <Button floated="right" type="button" content="Cancel" />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
