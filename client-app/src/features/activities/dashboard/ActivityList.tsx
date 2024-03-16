import { Header, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import ActivityListItem from "./ActivityListItem";
import { Fragment } from "react";

function LabelDisplaySwitch(activity: Activity) {
  switch (activity.category) {
    case "drinks":
    case "Drinks":
      return <Label color="green">{activity.category}</Label>;
      break;
    case "film":
    case "Film":
      return <Label color="red">{activity.category}</Label>;
      break;
    case "culture":
    case "Culture":
      return <Label color="yellow">{activity.category}</Label>;
      break;
    case "music":
    case "Music":
      return <Label color="olive">{activity.category}</Label>;
      break;
    case "travel":
    case "Travel":
      return <Label color="teal">{activity.category}</Label>;
      break;

    default:
      return <Label>{activity.category}</Label>;
  }
}

const ActivityList = () => {
  const { activityStore } = useStore();
  const { groupedActivities } = activityStore;

  return (
    <>
      {groupedActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          {activities.map((activity) => (
            <ActivityListItem
              key={activity.id}
              activity={activity}
              labelSwitch={LabelDisplaySwitch}
            />
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default observer(ActivityList);
