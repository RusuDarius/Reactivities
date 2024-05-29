import {
  Button,
  Form,
  FormInput,
  FormTextArea,
  Segment,
} from "semantic-ui-react";
import { v4 as uuid } from "uuid";
import { ChangeEvent, useEffect, useState } from "react";
import { useStore } from "../../../app/stores/store";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Activity } from "../../../app/models/activity";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import { Formik } from "formik";
import { values } from "mobx";

const ActivityForm = () => {
  const { activityStore } = useStore();
  const {
    createActivity,
    updateActivity,
    loading,
    loadActivity,
    loadingInitial,
  } = activityStore;
  const { id } = useParams();
  const navigate = useNavigate();

  const [activity, setActivity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivity(activity!));
  }, [id, loadActivity]);

  // const handleSubmit = () => {
  //   if (!activity.id) {
  //     activity.id = uuid();
  //     createActivity(activity).then(() =>
  //       navigate(`/activities/${activity.id}`)
  //     );
  //   } else {
  //     updateActivity(activity).then(() =>
  //       navigate(`/activities/${activity.id}`)
  //     );
  //   }
  // };

  // const handleInputChange = (
  //   event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = event.target;
  //   setActivity({ ...activity, [name]: value });
  // };

  if (loadingInitial) return <LoadingComponents content="Loading..." />;

  return (
    <Segment clearing>
      <Formik
        enableReinitialize
        initialValues={activity}
        onSubmit={(values) => console.log(values)}
      >
        {({ values: activity, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <FormInput
              placeholder="Title"
              value={activity.title}
              name="title"
              onChange={handleChange}
            ></FormInput>
            <FormTextArea
              placeholder="Description"
              value={activity.description}
              name="description"
              onChange={handleChange}
            ></FormTextArea>
            <FormInput
              placeholder="Category"
              value={activity.category}
              name="category"
              onChange={handleChange}
            ></FormInput>
            <FormInput
              placeholder="Date"
              type="date"
              value={activity.date}
              name="date"
              onChange={handleChange}
            ></FormInput>
            <FormInput
              placeholder="City"
              value={activity.city}
              name="city"
              onChange={handleChange}
            ></FormInput>
            <FormInput
              placeholder="Venue"
              value={activity.venue}
              name="venue"
              onChange={handleChange}
            ></FormInput>
            <Button
              floated="right"
              positive
              type="submit"
              content="Submit"
              loading={loading}
            />
            <Button
              as={NavLink}
              to="/activities"
              floated="right"
              type="button"
              content="Cancel"
            />
          </Form>
        )}
      </Formik>
    </Segment>
  );
};

export default ActivityForm;
