const mainMarginTop = '6rem';
const drawerWidth = 270;
const headerHeight = '5rem';
const headerBgColor = '#333333';
const linkColor = '#FFE400';
const linkActiveColor = '#FFFFFF';
const badgeBgColor = '#CC2062';

export const MainBox = (() => ({
    width: '100%',
    maxWidth: '100rem',
    height: '100%',
    minHeight: `calc(100vh - (${mainMarginTop} + 3rem))`,
    margin: `${mainMarginTop} auto 3rem auto`,
    padding: '0 2rem',
}));

export const HeaderComponent = (() => ({
    position: 'fixed',
    width: '100%',
    height: headerHeight,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: headerBgColor,
    padding: '0 10%',
    zIndex: '1',
    '& .header_items': {
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& .logo': {
            fontSize: '2em',
            color: '#FFFFFF',
            fontSeight: 'bold',
        },
    },
}));
  
export const NavigationWrapper = (() => ({
    position: { xs: 'absolute', md: 'unset' },
    top: { xs: 0, md: 'unset' },
    left: { xs: 0, md: 'unset' },
    width: { xs: drawerWidth, md: '100%' }, 
    backgroundColor: headerBgColor,
}));
  
export const LogoHeader = (() => ({
    fontSize: '2em',
    color: '#FFFFFF',
    fontWeight: 'bold',
}));
  
export const MenuButtonIcon = (() => ({
    display: { md: 'none' },
    color: '#FFFFFF',
    fontSize: '24px',
}));
  
export const ToolbarStyles = (() => ({
    justifyContent: 'space-between',
    width: '100%',
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