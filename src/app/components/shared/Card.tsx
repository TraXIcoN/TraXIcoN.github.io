import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export const Card = ({
  children,
  className = "",
  hover = true,
  delay = 0,
}: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={hover ? { scale: 1.02 } : undefined}
      className={`
        bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-purple-100
        ${hover ? "transition-all duration-200" : ""}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export const CardHeader = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={`px-6 py-4 border-b border-gray-100 ${className}`}>
    {children}
  </div>
);

export const CardBody = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`px-6 py-4 ${className}`}>{children}</div>;

export const CardFooter = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => <div className={`px-6 py-4 bg-gray-50/50 ${className}`}>{children}</div>;
