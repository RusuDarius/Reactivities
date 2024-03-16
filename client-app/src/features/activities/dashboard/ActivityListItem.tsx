import { ReactNode, SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemHeader,
  ItemImage,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

interface ActivityListItemProps {
  activity: Activity;
  labelSwitch: (activity: Activity) => ReactNode;
}

const ActivityListItem = ({ activity, labelSwitch }: ActivityListItemProps) => {
  const { activityStore } = useStore();
  const { activitiesByDate, deleteActivity, loading } = activityStore;
  const [target, setTarget] = useState("");

  const handleActivityDelete = (e: SyntheticEvent, id: string) => {
    // setTarget(id) to remove the usage of e
    setTarget(e.currentTarget.name);
    deleteActivity(id);
  };

  return (
    <SegmentGroup>
      <Segment>
        <ItemGroup>
          <Item>
            <ItemImage size="tiny" circular src="/assets/user.png" />
            <ItemContent>
              <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </ItemHeader>
              <ItemDescription>Hosted by Darius</ItemDescription>
            </ItemContent>
          </Item>
        </ItemGroup>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {activity.date}
          <Icon name="marker" /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color="teal"
          floated="right"
          content="View"
        />
      </Segment>
    </SegmentGroup>
  );
};

export default ActivityListItem;
