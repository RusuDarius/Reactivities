import { Grid, GridColumn } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

const ActivityDashboard = () => {
  const { activityStore } = useStore();
  const { selectedActivity, isFormOpen } = activityStore;

  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList />
      </GridColumn>
      <GridColumn width={6}>
        {selectedActivity && !isFormOpen && <ActivityDetails />}
        {isFormOpen && <ActivityForm />}
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard);
