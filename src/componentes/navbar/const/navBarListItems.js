import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import MultipleStopIcon from '@mui/icons-material/MultipleStop';

export const mainNavBarItems = [
    {
        id: 0,
        icon: <PeopleIcon/>,
        label: 'Authentication',
        route: 'authentication',
    },
    {
        id: 0,
        icon: <StorageIcon/>,
        label: 'Database',
        route: 'database',
    },
    {
        id: 0,
        icon: <ImageIcon/>,
        label: 'Storage',
        route: 'storage',
    },
    {
        id: 0,
        icon: <PublicIcon/>,
        label: 'Hosting',
        route: 'hosting',
    },
    {
        id: 0,
        icon: <MultipleStopIcon/>,
        label: 'Functions',
        route: 'functions',
    },
]