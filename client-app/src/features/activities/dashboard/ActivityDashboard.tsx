import { Grid, GridColumn } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../Details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface DashboardProps {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  isFormOpen: boolean;
  closeForm: () => void;
  openForm: (id: string) => void;
  createOrEdit: (activity: Activity) => void;
}

const ActivityDashboard = ({
  activities,
  selectActivity,
  selectedActivity,
  cancelSelectActivity,
  isFormOpen,
  closeForm,
  openForm,
  createOrEdit,
}: DashboardProps) => {
  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList activities={activities} selectActivity={selectActivity} />
      </GridColumn>
      <GridColumn width={6}>
        {selectedActivity && !isFormOpen && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectActivity={cancelSelectActivity}
            openForm={() => openForm(selectedActivity.id)}
            closeForm={closeForm}
          />
        )}
        {isFormOpen && (
          <ActivityForm
            closeForm={closeForm}
            activity={selectedActivity}
            createOrEdit={createOrEdit}
          />
        )}
      </GridColumn>
    </Grid>
  );
};

export default ActivityDashboard;
