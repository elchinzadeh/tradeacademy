import { Breadcrumb as BC } from "antd";

function Breadcrumbs() {
    return (
        <BC style={{ margin: "16px 0" }}>
            <BC.Item>Home</BC.Item>
            <BC.Item>Portfolio</BC.Item>
        </BC>
    );
}

export default Breadcrumbs;
