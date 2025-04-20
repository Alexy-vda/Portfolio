import * as motion from "motion/react-client";
import Link from "next/link";

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="grid grid-cols-3 p-4 justify-items-center fixed top-0 left-0 right-0 z-10"
    >
      <nav className="flex items-center justify-between col-2 border-primary border-1 rounded-full p-2 backdrop-blur-2xl bg-faded-black">
        <ul className="flex gap-4">
          <li>
            <Link href="/" className="p-1">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="p-1">
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className="p-1">
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className="p-1">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </motion.header>
  );
}
