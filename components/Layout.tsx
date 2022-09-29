import React, { ReactNode } from "react";
import Link from "next/link";
import Head from "next/head";

type Props = {
    children?: ReactNode;
    title?: string;
};

const styles = {
    wrapper: "flex min-h-screen flex-col justify-between",
    navBar: "flex h-12 justify-between shadow-md items-center px-4",
    navLink: "p-2",
    footer: "flex justify-center items-center h-10 shadow-inner",
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
    <div>
        <Head>
            <title>{title ? title + " - Amazona" : "Amazona"}</title>
            <meta charSet="utf-8" />
            <meta name="description" content="Ecommerce Website" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className={styles.wrapper}>
            <header>
                <nav className={styles.navBar}>
                    <Link href="/">
                        <a className="text-lg font-bold">amazona</a>
                    </Link>
                    <div>
                        <Link href="/cart">
                            <a className={styles.navLink}>Cart</a>
                        </Link>
                        <Link href="/login">
                            <a className={styles.navLink}>Login</a>
                        </Link>
                    </div>
                </nav>
            </header>
            <div className="container m-auto mt-4 px-4">{children}</div>
            <footer className={styles.footer}>
                <span>This is a fake copyright footer</span>
            </footer>
        </div>
    </div>
);

export default Layout;
