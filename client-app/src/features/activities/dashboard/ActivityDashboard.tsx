import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface DashboardProps {
  activities: Activity[];
  createOrEdit: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

const ActivityDashboard = ({
  activities,
  createOrEdit,
  deleteActivity,
  submitting,
}: DashboardProps) => {
  const { activityStore } = useStore();
  const { selectedActivity, isFormOpen } = activityStore;

  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList
          activities={activities}
          deleteActivity={deleteActivity}
          submitting={submitting}
        />
      </GridColumn>
      <GridColumn width={6}>
        {selectedActivity && !isFormOpen && <ActivityDetails />}
        {isFormOpen && (
          <ActivityForm createOrEdit={createOrEdit} submitting={submitting} />
        )}
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard);
