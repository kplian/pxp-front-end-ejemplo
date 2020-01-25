import React from "react";
import {useStyles} from "./DashboardStyle";
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Copyright from "../../_components/Copyright";
import ComponentHeader from "./components/Header";
import ComponentNavigation from "./components/Navigation";

export default function DashboardPage() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return(
        <div className={classes.root}>
            <CssBaseline />
            <ComponentHeader  clickHandler={handleDrawerOpen}
                              data={{titulo:"PXP",
                                  estado: open}}/>
            <ComponentNavigation  clickHandler={handleDrawerClose}
                                  data={{estado: open}}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer} />
                <Container maxWidth="lg" className={classes.container}>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container>
            </main>
        </div>
    );
}