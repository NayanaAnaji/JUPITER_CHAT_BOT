import { type FC } from "react";

import { type LegendObject } from "@/types/object-types";

type LegendProps = {
  legendArr: LegendObject[];
};

const CustomColorLegend: FC<LegendProps> = ({ legendArr }) => {
  return (
    <summary className="mb-4 flex w-full flex-wrap justify-between gap-4 bg-gray-50 p-3 text-xs dark:bg-gray-50/15">
      {legendArr.map((o: LegendObject) => {
        return (
          <div className="flex" key={o.legend}>
            <p className="mr-2 font-bold">{o.legend} :</p>
            <div className="flex items-center gap-4">
              {Object.entries(o.legendObj).map(([color, text], i) => (
                <ul key={i} className="flex items-center gap-1">
                  <li
                    style={{ backgroundColor: color }}
                    className="rounded-[2px] px-[8px] py-0.5 shadow"
                  />
                  <li>{text}</li>
                </ul>
              ))}
            </div>
          </div>
        );
      })}
    </summary>
  );
};

export default CustomColorLegend;
