import { motion } from "framer-motion";
import { SOCIAL_LINKS } from "../../lib/constants";

export const SocialLinks = () => {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map(({ href, icon: Icon, label }) => (
        <motion.a
          key={href}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="social-icon p-2 text-purple rounded-full hover:bg-purple-100 transition-colors"
          aria-label={label}
        >
          <div className="w-5 h-5 text-purple hover:text-purple-600 transition-colors">
            <Icon />
          </div>
        </motion.a>
      ))}
    </div>
  );
};

// Optional: Individual social link component if you need more customization
export const SocialLink = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="social-icon"
    aria-label={label}
  >
    <div className="w-5 h-5 text-purple hover:text-purple-600 transition-colors">
      <Icon />
    </div>
  </motion.a>
);
