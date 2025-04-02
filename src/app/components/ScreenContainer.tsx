import { ReactNode, CSSProperties } from "react";

interface Props {
  children: ReactNode;
  style?: CSSProperties;
  className?:string;
}

const ScreenContainer = ({ children, style , className=''}: Props) => {
  return (
    <div className={`max-w-[1298px] w-full mx-auto mid-max-px ${className}`} style={style}>
      {children}
    </div>
  );
};

export default ScreenContainer;
