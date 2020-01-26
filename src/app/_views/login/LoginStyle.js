export const useStyles = theme =>({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://scontent.fcbb1-1.fna.fbcdn.net/v/t1.0-9/10968450_773809696037231_5020548062858564291_n.jpg?_nc_cat=106&_nc_ohc=8fyVgTd4AxAAX-odYTv&_nc_ht=scontent.fcbb1-1.fna&oh=a6fdc6aece90036ab6b91c819824a8ae&oe=5ED4853C)',
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    fondo:{
        background: 'rgb(228,223,223)',
        flex: 1,
        padding: theme.spacing(6, 4),
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: '#E7584A',
    },
});