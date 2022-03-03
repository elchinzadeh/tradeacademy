import { Tooltip } from "antd";

import * as GF from "global/functions";

type CirculatingSupplyProps = {
    maxSupply: Cryptocurrency["max_supply"];
    circulatingSupply: Cryptocurrency["circulating_supply"];
    currency: Cryptocurrency["currency"];
};

export default function CirculatingSupply({
    circulatingSupply,
    maxSupply,
    currency,
}: CirculatingSupplyProps) {
    let percent: string = "";
    if (maxSupply) {
        percent = ((+circulatingSupply / +maxSupply) * 100).toFixed(2);
    }

    const tooltipText = (
        <>
            {percent && (
                <div className="circulating-supply__tooltip-text">
                    <span>Percentage:</span>
                    <span>{percent}%</span>
                </div>
            )}
            <div className="circulating-supply__tooltip-text">
                <span>Circulating supply:</span>
                <span> {GF.formatNumber(+circulatingSupply)}</span>
            </div>
            {maxSupply && (
                <div className="circulating-supply__tooltip-text">
                    <span>Max supply:</span>
                    <span>{GF.formatNumber(+maxSupply)}</span>
                </div>
            )}
        </>
    );

    return (
        <Tooltip placement="bottom" title={tooltipText}>
            <div className="circulating-supply">
                {GF.formatNumber(+circulatingSupply)}&nbsp;
                {currency}
                {maxSupply && (
                    <div className="circulating-supply__bar">
                        <div
                            className="circulating-supply__filled"
                            style={{ width: percent + "%" }}
                        />
                    </div>
                )}
            </div>
        </Tooltip>
    );
}
