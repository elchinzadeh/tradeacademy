import { useState, useEffect } from "react";
import { Table } from "antd";

import CirculatingSupply from "./CirculatingSupply";
import PercentChange from "./PercentChange";

import API from "api/nomics";
import * as GF from "global/functions";

import "./style.less";

// TODO Add custom pagination
function Cryptocurrencies() {
    const columns = [
        {
            title: "#",
            dataIndex: "id",
            width: 50,
            render(text: string, record: Cryptocurrency, index: number) {
                return index + 1;
            },
        },
        {
            title: "Name",
            dataIndex: "name",
            render(text: string, record: Cryptocurrency) {
                return (
                    <div className="currency-name">
                        <img
                            className="currency-icon"
                            src={record.logo_url}
                            alt={record.currency}
                        />
                        {record.name} ({record.currency})
                    </div>
                );
            },
        },
        {
            title: "Price",
            dataIndex: "price",
            align: "right" as "right",
            render(text: string) {
                return GF.formatPrice(Number(text));
            },
        },
        {
            title: "Circulating supply",
            dataIndex: "circulating_supply",
            align: "right" as "right",
            render(text: string, record: Cryptocurrency) {
                return (
                    <CirculatingSupply
                        maxSupply={record.max_supply}
                        circulatingSupply={record.circulating_supply}
                        currency={record.currency}
                    />
                );
            },
        },
        {
            title: "1 day",
            dataIndex: "1d",
            align: "right" as "right",
            render(text: Cryptocurrency["1d"], record: Cryptocurrency) {
                return (
                    <PercentChange percent={record["1d"]["price_change_pct"]} />
                );
            },
        },
        {
            title: "30 day",
            dataIndex: "30d",
            align: "right" as "right",
            render(text: Cryptocurrency["30d"], record: Cryptocurrency) {
                return (
                    <PercentChange
                        percent={record["30d"]["price_change_pct"]}
                    />
                );
            },
        },
        {
            title: "365 day",
            dataIndex: "365d",
            align: "right" as "right",
            render(text: Cryptocurrency["365d"], record: Cryptocurrency) {
                return (
                    <PercentChange
                        percent={record["365d"]["price_change_pct"]}
                    />
                );
            },
        },
    ];

    const [data, setData] = useState([]);
    // const [totalItems, setTotalItems] = useState(0);
    // const [pageSize, setPageSize] = useState(10);
    // const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        console.log("get data");
        getData();

        const interval = setInterval(getData, 10000);

        return () => clearInterval(interval);
    }, []);

    const getData = () => {
        console.log("send request");
        API.getPrices({
            // sort: "rank",
            // interval: "7d,30d",
            "per-page": 10,
            page: 1,
        })
            .then((res) => {
                setData(res.data);
                console.log("set data");
                // setTotalItems(+res.headers["X-Pagination-Total-Items"]);
            })
            .finally(() => {
                console.log("finally");
            });
    };

    return (
        <>
            <Table dataSource={data} columns={columns} rowKey="id" />
            {/* <Pagination
                total={totalItems}
                current={currentPage}
                pageSize={pageSize}
            /> */}
        </>
    );
}

export default Cryptocurrencies;
