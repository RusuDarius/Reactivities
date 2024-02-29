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

interface ListProps {
  activities: Activity[];
}

function LabelSwitch(activity: Activity) {
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

const ActivityList = ({ activities }: ListProps) => {
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
                <Button floated="right" color="blue" content="View" />
                {LabelSwitch(activity)}
              </ItemExtra>
            </ItemContent>
          </Item>
        ))}
      </ItemGroup>
    </Segment>
  );
};

export default ActivityList;
