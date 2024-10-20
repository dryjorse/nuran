import clsx from "clsx";
import { FC } from "react";
import ContentLoader, { IContentLoaderProps } from "react-content-loader";

interface Props extends IContentLoaderProps {
  rounded?: number | string;
}

const Skeleton: FC<Props> = ({ rounded = 0, ...props }) => {
  return (
    <ContentLoader
      speed={2}
      backgroundColor="#cccbcb"
      foregroundColor="#ecebeb"
      viewBox={`0 0 ${props.width} ${props.height}`}
      style={{ maxWidth: props.width }}
      {...props}
      width="100%"
      className={clsx("overflow-hidden", props.className)}
    >
      <rect x="0" y="0" width="100%" height={props.height}></rect>
    </ContentLoader>
  );
};

export default Skeleton;
