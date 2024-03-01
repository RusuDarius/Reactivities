import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { ChangeEvent, useState } from "react";

//TODO Form functionalities

interface FormProps {
  closeForm: () => void;
  activity: Activity | undefined;
  createOrEdit: (activity: Activity) => void;
}

const ActivityForm = ({
  closeForm,
  activity: selectedActivity,
  createOrEdit,
}: FormProps) => {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };
  const [activity, setActivity] = useState(initialState);

  const handleSubmit = () => {
    createOrEdit(activity);
  };

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <FormInput
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        ></FormInput>
        <FormTextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        ></FormTextArea>
        <FormInput
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        ></FormInput>
        <FormInput
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        ></FormInput>
        <FormInput
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        ></FormInput>
        <FormInput
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        ></FormInput>
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          floated="right"
          type="button"
          content="Cancel"
          onClick={() => closeForm()}
        />
      </Form>
    </Segment>
  );
};

export default ActivityForm;
