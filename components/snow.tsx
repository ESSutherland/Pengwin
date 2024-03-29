"use client";
import { Snowfall } from "react-snowfall";
import { useMedia } from "react-use";

const Snow = () => {
  const isMobile = useMedia("(max-width: 640px)", false);
  const is3XL = useMedia("(min-width: 2000px)", false);
  const snowflakeCount = isMobile ? 80 : is3XL ? 300 : 150;
  const radius: [number, number] = is3XL ? [3, 10] : [1.5, 5];

  return <Snowfall snowflakeCount={snowflakeCount} radius={radius} />;
};

export default Snow;
