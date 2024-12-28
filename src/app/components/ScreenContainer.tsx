import { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
}

const ScreenContainer = ({ children, style }: Props) => {
  return (
    <div className="max-w-[1298px] w-full mx-auto mid-max-px" style={style}>
      {children}
    </div>
  );
};

export default ScreenContainer;
