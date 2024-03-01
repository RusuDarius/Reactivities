import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface DetailsProps {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id: string) => void;
  closeForm: () => void;
}

const ActivityDetails = ({
  activity,
  cancelSelectActivity,
  openForm,
}: DetailsProps) => {
  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <CardContent>
        <CardHeader>{activity.title}</CardHeader>
        <CardMeta>
          <span>{activity.date}</span>
        </CardMeta>
        <CardDescription>{activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <ButtonGroup widths={2}>
          <Button
            color="blue"
            content="Edit"
            onClick={() => openForm(activity.id)}
          />
          <Button
            color="grey"
            content="Cancel"
            onClick={() => cancelSelectActivity()}
          />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
};

export default ActivityDetails;
