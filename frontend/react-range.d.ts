declare module "react-range" {
  import * as React from "react";

  export interface RangeProps {
    step?: number;
    min: number;
    max: number;
    values: number[];
    onChange: (values: number[]) => void;
    renderTrack: (props: any) => React.ReactNode;
    renderThumb: (props: any) => React.ReactNode;
  }

  export const Range: React.FC<RangeProps>;
}
