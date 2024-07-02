import { Grid, GridColumn } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import { useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import LoadingComponents from "../../../app/layout/LoadingComponents";
import ActivityFilters from "./ActivityFilters";

const ActivityDashboard = () => {
  const { activityStore } = useStore();
  const { loadActivities, activityRegistry } = activityStore;

  useEffect(() => {
    //* Temporary solution, needs replacement
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size]);

  if (activityStore.loadingInitial)
    return <LoadingComponents content="Loading activities..." />;

  return (
    <Grid>
      <GridColumn width={10}>
        <ActivityList />
      </GridColumn>
      <GridColumn width={6}>
        <ActivityFilters />
      </GridColumn>
    </Grid>
  );
};

export default observer(ActivityDashboard);
