import { FC } from "react";
import { Spin, type SpinProps } from "antd";

const Loader: FC<SpinProps & { width?: number, height?: number }> = ({
    width = 32,
    height = 32,
    ...rest
}) => {
    return (
        <Spin style={{ width, height }} {...rest} />
    );
};

export default Loader;