"use client";
import Link from "next/link";
import styles from "./header.module.css";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { SiShopware } from "react-icons/si";

interface NavbarProps {
  isAdmin: boolean;
  token: string;
}

const Navbar = ({ isAdmin, token }: NavbarProps) => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div>
        <Link href="/" className={styles.logo}>
          <SiShopware className="mr-2" />
          Best Shopping
        </Link>
        <div className={styles.menu}>
          {toggle ? (
            <IoMdClose onClick={() => setToggle((prev) => !prev)} />
          ) : (
            <AiOutlineMenu onClick={() => setToggle((prev) => !prev)} />
          )}
        </div>
      </div>
      <div
        className={styles.navLinksWrapper}
        style={{
          clipPath: (toggle && "polygon(0 0, 100% 0, 100% 100%, 0 100%)") || "",
        }}
      >
        <ul className={styles.navLinks}>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/"
          >
            Home
          </Link>
          <Link
            onClick={() => setToggle(false)}
            className={styles.navLink}
            href="/products?pageNumber=1"
          >
            Products
          </Link>
          {token ? (
            <Link
              onClick={() => setToggle(false)}
              className={styles.navLink}
              href="/carts"
            >
              Cart
            </Link>
          ) : (
            <Link
              onClick={() => setToggle(false)}
              className={styles.navLink}
              href="/login"
            >
              Cart
            </Link>
          )}
          {isAdmin && (
            <Link
              onClick={() => setToggle(false)}
              className={styles.navLink}
              href="/admin"
            >
              Admin Dashboard
            </Link>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
