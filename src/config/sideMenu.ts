const sideMenu = Object.freeze([
    {
        title: "Portfolio",
        key: "portfolio",
    },
    {
        title: "Charts",
        key: "charts",
    },
    {
        title: "Assets",
        key: "assets",
    },
]);

export type SideMenuItem = {
    title: string;
    key: string;
    children?: Array<SideMenuItem>;
};

export default sideMenu;
