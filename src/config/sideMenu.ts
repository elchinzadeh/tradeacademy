const sideMenu = Object.freeze([
    {
        title: "Cryptocurrencies",
        key: "cryptocurrencies",
        route: "/cryptocurrencies",
    },
    {
        title: "Portfolio",
        key: "portfolio",
        route: "/portfolio",
    },
    {
        title: "Charts",
        key: "charts",
        route: "/charts",
    },
    {
        title: "About",
        key: "About",
        route: "/about",
    },
]);

export type SideMenuItem = {
    title: string;
    key: string;
    route: string;
    children?: Array<SideMenuItem>;
};

export default sideMenu;
