import { motion } from "framer-motion";
import { useMeasure } from "react-use";

import { cn } from "@/lib/utils";

function ResizingContainer({
  children,
  transition,
  className,
}: {
  children: React.ReactNode;
  transition?: object;
  className?: string;
}) {
  const [ref, { width, height }] = useMeasure();

  return (
    <motion.div
      animate={{ height, width }}
      className={cn("", className)}
      transition={transition || { type: "spring", stiffness: 300, damping: 30 }}
    >
      <div
        // @ts-ignore
        ref={ref}
      >
        {children}
      </div>
    </motion.div>
  );
}

export default ResizingContainer;
