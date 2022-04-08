import { useEffect, useRef } from "react";
import { CaretUpOutlined, CaretDownOutlined } from "@ant-design/icons";

import { usePrevious } from "hooks";
import * as GF from "global/functions";

type PercentChangeProps = {
    percent: CryptocurrencyPriceChange["price_change_pct"];
};

function PercentChange(props: PercentChangeProps) {
    const percentChangeEl = useRef<HTMLDivElement>(null);
    const previousPercent = usePrevious(props.percent);

    useEffect(() => {
        if (props.percent !== previousPercent) {
            percentChangeEl.current?.classList.add("percent-change--animate");
            setTimeout(() => {
                percentChangeEl.current?.classList.remove(
                    "percent-change--animate"
                );
            }, 5000);
        }
    }, [props.percent]);

    const isIncreased = +props.percent >= 0;
    const className = [
        "percent-change",
        `percent-change${isIncreased ? "--increased" : "--decreased"}`,
    ].join(" ");

    return (
        <div
            data-testid="PercentChange"
            className={className}
            ref={percentChangeEl}
        >
            {isIncreased ? <CaretUpOutlined /> : <CaretDownOutlined />}
            {GF.formatNumber(Number(props.percent) * 100, "#,##0.00 %")}
        </div>
    );
}

export default PercentChange;
