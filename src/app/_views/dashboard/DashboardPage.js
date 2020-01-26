import React from 'react';
import { ThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Hidden from '@material-ui/core/Hidden';
import ComponentHeader from "./components/header/Header";
import ComponentNavigation from "./components/navigation/Navigation";
import Content from "./components/content/Content";
import {styles, theme} from "./DashboardStyle";
import Copyright from "../../_components/Copyright";

function DashboardPage(props) {
    const { classes } = props;
    const drawerWidth = 256;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    return (
        <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <CssBaseline />
                <nav className={classes.drawer}>
                    <Hidden smUp implementation="js">
                        <ComponentNavigation
                            PaperProps={{ style: { width: drawerWidth } }}
                            variant="temporary"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                        />
                    </Hidden>
                    <Hidden xsDown implementation="css">
                        <ComponentNavigation PaperProps={{ style: { width: drawerWidth } }} />
                    </Hidden>
                </nav>
                <div className={classes.app}>
                    <ComponentHeader onDrawerToggle={handleDrawerToggle} />
                    <main className={classes.main}>
                        <Content/>
                    </main>
                    <footer className={classes.footer}>
                        <Copyright />
                    </footer>
                </div>
            </div>
        </ThemeProvider>
    );
}
export default withStyles(styles)(DashboardPage);
