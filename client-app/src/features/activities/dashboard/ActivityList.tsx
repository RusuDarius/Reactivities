import {
  Button,
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemGroup,
  ItemHeader,
  ItemMeta,
  Label,
  Segment,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { SyntheticEvent, useState } from "react";

interface ListProps {
  activities: Activity[];
  selectActivity: (id: string) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

function LabelDisplaySwitch(activity: Activity) {
  switch (activity.category) {
    case "drinks":
      return <Label color="green">{activity.category}</Label>;
      break;
    case "film":
      return <Label color="red">{activity.category}</Label>;
      break;
    case "culture":
      return <Label color="yellow">{activity.category}</Label>;
      break;
    case "music":
      return <Label color="olive">{activity.category}</Label>;
      break;
    case "travel":
      return <Label color="teal">{activity.category}</Label>;
      break;

    default:
      return <Label>{activity.category}</Label>;
  }
}

const ActivityList = ({
  activities,
  selectActivity,
  deleteActivity,
  submitting,
}: ListProps) => {
  const [target, setTarget] = useState("");

  const handleActivityDelete = (e: SyntheticEvent, id: string) => {
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <Segment>
      <ItemGroup divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
            <ItemContent>
              <ItemHeader as="a">{activity.title}</ItemHeader>
              <ItemMeta>{activity.date}</ItemMeta>
              <ItemDescription>{activity.description}</ItemDescription>
              <ItemExtra>
                <Button
                  floated="right"
                  color="blue"
                  content="View"
                  onClick={() => selectActivity(activity.id)}
                />
                <Button
                  floated="right"
                  color="red"
                  content="Delete"
                  name={activity.id}
                  loading={submitting && target == activity.id}
                  onClick={(e) => handleActivityDelete(e, activity.id)}
                />
                {LabelDisplaySwitch(activity)}
              </ItemExtra>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </Segment>
  );
};

export default ActivityList;
