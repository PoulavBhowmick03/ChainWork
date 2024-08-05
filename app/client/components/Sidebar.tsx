import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconMenu2, IconX } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import Home from "@/app/page"
import Link from 'next/link';
const WalletMultiButtonDynamic = dynamic(
  async () => (await import('@solana/wallet-adapter-react-ui')).WalletMultiButton,
  { ssr: false }
);

const Sidebar = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: (tab: string) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const menuItems = [
    { name: "Overview", value: "overview", icon: "📊" },
    { name: "My Gigs", value: "my-gigs", icon: "📁" },
    { name: "Create Gig", value: "create-gig", icon: "➕" },
    { name: "Find Freelancers", value: "find-freelancers", icon: "🔍" },
    { name: "Active Projects", value: "active-projects", icon: "🚀" },
    { name: "Messages", value: "messages", icon: "💬" },
    { name: "Transactions", value: "transactions", icon: "💰" },
    { name: "Settings", value: "settings", icon: "⚙️" },
  ];

  return (
    <>
      {/* Hamburger menu for small devices */}
      <motion.button
        className="fixed top-4 left-4 z-50 p-2 bg-gray-800 rounded-full text-white md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleSidebar}
      >
        {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
      </motion.button>

      {/* Sidebar */}
      <AnimatePresence>
        {(isOpen || isDesktop) && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-y-0 left-0 z-40 w-64 bg-gray-800 text-white space-y-6 py-7 px-2 md:relative"
          >
            <nav>
              <Link href="/">
                <motion.div
                  className="py-2.5 px-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🏠 Home
                </motion.div>
              </Link>

              {menuItems.map((item) => (
                <motion.a
                  key={item.value}
                  href="#"
                  className={`block py-2.5 px-4 rounded transition duration-200 ${activeTab === item.value ? "bg-gray-700" : "hover:bg-gray-700"
                    }`}
                  onClick={() => {
                    setActiveTab(item.value);
                    if (!isDesktop) setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.icon} {item.name}
                </motion.a>
              ))}
              <motion.div
                className="py-2.5 px-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <WalletMultiButtonDynamic />
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for small devices */}
      {isOpen && !isDesktop && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </>
  );
};

export default Sidebar;