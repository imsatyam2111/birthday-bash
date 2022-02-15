import { Grid, Box } from "@material-ui/core";

const Dashboard = () => {
    return (
        <div>
          <h1>Dashboard</h1>
          <Grid container alignItems="center">
            <Grid item sm={6}>
              <Box height="100%" display="flex" justifyContent="center" flex-direction="row">
                <img src={require("../../assets/birthday1.png")} width="350" height="350" alt="svg1" />
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box height="100%" display="flex" justifyContent="center" flex-direction="row">
                <p className="dashboard-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box height="100%" display="flex" justifyContent="center" flex-direction="row">
                <p className="dashboard-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </Box>
            </Grid>
            <Grid item sm={6}>
              <Box height="100%" display="flex" justifyContent="center" flex-direction="row">
                <img src={require("../../assets/birthday2.png")} width="350" height="350" alt="svg1" />
              </Box>
            </Grid>
          </Grid>
        </div>
    );
}
 
export default Dashboard;