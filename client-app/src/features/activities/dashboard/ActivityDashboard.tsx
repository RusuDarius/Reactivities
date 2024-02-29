import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface DashboardProps {
  activities: Activity[];
}

const ActivityDashboard = ({ activities }: DashboardProps) => {
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList activities={activities} />
      </GridColumn>
      <GridColumn width={6}>
        {activities[0] && <ActivityDetails activity={activities[0]} />}
        <ActivityForm />
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;
