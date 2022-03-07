import { Merge } from "@/utilities/types";
import { HTMLMotionProps, motion } from "framer-motion";
import React from "react";
import { MsgBox } from "./box";

type AnimatedMsgBoxProps = Merge<
  React.PropsWithChildren<{}>,
  HTMLMotionProps<"div">
>;

export const AnimatedMsgBox = (props: AnimatedMsgBoxProps) => {
  return (
    <motion.div initial={props.initial} animate={props.animate} {...props}>
      <MsgBox>{props.children}</MsgBox>
    </motion.div>
  );
};

// default animation is go up
AnimatedMsgBox.defaultProps = {
  initial: {
    y: 40,
  },
  animate: {
    y: 0,
  },
};
