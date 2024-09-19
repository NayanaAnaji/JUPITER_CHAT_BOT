import { type FC } from "react";

interface ICustomSummary {
  summary: Readonly<Record<string, string | number | string[]>>;
}

const CustomSummary: FC<ICustomSummary> = (props) => {
  const { summary = {} } = props;

  return (
    <summary className="flex-center flex w-full flex-wrap gap-4 bg-gray-50 p-3 text-xs dark:bg-gray-50/15">
      {Object.entries(summary).map(([key, value]) => {
        return (
          <p key={key}>
            <span className="font-bold">{key}</span>:{" "}
            <span>
              {Array.isArray(value)
                ? value.join(", ")
                : value}
            </span>
          </p>
        );
      })}
    </summary>
  );
};

export default CustomSummary;
