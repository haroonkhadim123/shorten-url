"use client"
import Link from "next/link";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
    

      {/* Bottom Bar */}
      <div className="bg-gray-900 text-white border-t border-gray-800 mt-12 py-6 text-center text-sm">
        &copy; {new Date().getFullYear()} Bitlink. All rights reserved.
      </div>
    </footer>
  );
}
