import React from 'react';
import { motion } from 'framer-motion';
import { LinkedinIcon, GithubIcon, InstagramIcon, Facebook, TwitterIcon, PhoneCall, Mail, MapPin, FacebookIcon } from 'lucide-react';

interface ContactDetails {
  phone: string;
  email: string;
  address: string;
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

interface AnimatedContactDetailsProps {
  contactDetails: ContactDetails;
}

const AnimatedContactDetails: React.FC<AnimatedContactDetailsProps> = ({ contactDetails }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LinkedinIcon':
        return <LinkedinIcon size={24} />;
      case 'InstagramIcon':
        return <InstagramIcon size={24} />;
      case 'GithubIcon':
        return <GithubIcon size={24} />;
      case 'FacebookIcon':
        return <FacebookIcon size={24} />;
      case 'TwitterIcon':
        return <TwitterIcon size={24} />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 3 }}
      className="flex flex-col items-start mt-4 space-y-4" // Adjusted mt-8 to mt-4 for less space
    >
      {/* Phone */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex items-center"
      >
        <PhoneCall size={24} className="mr-2 mx-20" />
        <span className="text-gray-700 dark:text-white">{contactDetails.phone}</span>
      </motion.div>

      {/* Email */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center"
      >
        <Mail size={24} className="mr-2 mx-20" />
        <span className="text-gray-700 dark:text-white">{contactDetails.email}</span>
      </motion.div>

      {/* Address */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex items-center"
      >
        <MapPin size={24} className="mr-2 mx-20" />
        <span className="text-gray-700 dark:text-white">{contactDetails.address}</span>
      </motion.div>

      {/* Social Links */}
      <div className="flex mt-4 gap-3 mx-20">
        {contactDetails.socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="flex items-center text-gray-700 dark:text-white hover:text-blue-500"
          >
            {getIcon(link.icon)}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default AnimatedContactDetails;
