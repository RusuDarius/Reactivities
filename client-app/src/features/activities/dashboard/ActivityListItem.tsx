import React, { ReactNode, SyntheticEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Item,
  ItemContent,
  ItemDescription,
  ItemExtra,
  ItemHeader,
  ItemMeta,
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
    <Item key={activity.id}>
      <ItemContent>
        <ItemHeader as="a">{activity.title}</ItemHeader>
        <ItemMeta>{activity.date}</ItemMeta>
        <ItemDescription>{activity.description}</ItemDescription>
        <ItemExtra>
          <Button
            as={Link}
            to={`/activities/${activity.id}`}
            floated="right"
            color="blue"
            content="View"
          />
          <Button
            floated="right"
            color="red"
            content="Delete"
            name={activity.id}
            loading={loading && target == activity.id}
            onClick={(e) => handleActivityDelete(e, activity.id)}
          />
          {labelSwitch(activity)}
        </ItemExtra>
      </ItemContent>
    </Item>
  );
};

export default ActivityListItem;
