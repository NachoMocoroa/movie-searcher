import { 
    drawerWidth, 
    headerHeight, 
    headerBgColor, 
    linkColor, 
    linkActiveColor, 
    badgeBgColor
} from '../../layoutConstants';

export const NavigationWrapper = (() => ({
    position: { xs: 'absolute', md: 'unset' },
    top: { xs: 0, md: 'unset' },
    left: { xs: 0, md: 'unset' },
    width: { xs: drawerWidth, md: '100%' }, 
    backgroundColor: headerBgColor,
}));

export const NavigationMobile = (() => ({
    display: { xs: 'block', md: 'none' },
    width: drawerWidth,
    '& .MuiPaper-root.MuiDrawer-paper': {
        boxSizing: 'border-box', 
        width: drawerWidth,
        backgroundColor: headerBgColor,
        '& .navList': {
            listStyle: 'none',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            margin: `${headerHeight} 0 0 0`,
            alignItems: 'flex-end',
            padding: '0 20px',
            '& li': {
                margin: '10px 0',
                padding: '0.5rem 0',
                width: '100%',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderBottom: `3px dotted ${linkColor}`,
                '&:first-of-type': {
                    margin: '0 0 10px 0',
                },
                '&:last-of-type': {
                    margin: '10px 0 0 0',
                },
                '& a': {
                    textDecoration: 'none',
                    fontSize: '1.25em',
                    lineHeight: '1',
                    color: linkColor, 
                    '&:hover, &:active, &.active, &.link-active, &.link_active, &[class*="link_active"]': {
                        color: linkActiveColor,
                    }
                },
            },
        },
    },
}));

export const NavigationDesktop = (() => ({
    display: { xs: 'none', md: 'flex' },
    width: '100%',
    '& .MuiPaper-root.MuiDrawer-paper': {
        position: 'unset',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'transparent',
        '& .navList': {
            listStyle: 'none',
            margin: '0',
            padding: '0',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'baseline',
            overflow: 'hidden',
            '& li': {
                margin: '0 0 0 2rem',
                '&:first-of-type': {
                    margin: '0',
                },
                '&:last-of-type': {
                    margin: '0 0 0 2rem',
                },
                '& a': {
                    textDecoration: 'none',
                    fontSize: '1.25em',
                    lineHeight: '1',
                    color: linkColor,
                    '&:hover, &:active, &.active, &.link-active, &.link_active, &[class*="link_active"]': {
                        color: linkActiveColor,
                    }
                },
            },
        },
    },
}));

export const BadgeBox = (() => ({
    backgroundColor: badgeBgColor,
    color: '#FFFFFF',
    marginLeft: '0.5rem',
    borderRadius: '50%',
    padding: '0',
    fontSize: '1.5rem',
    width: '23px',
    height: '23px',
    lineHeight: '1.2',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
}));
