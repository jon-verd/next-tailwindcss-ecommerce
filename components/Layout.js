import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - Vicios' : 'Vicios'}</title>
        <meta name="description" content="Ecommerce Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 items-center px-4 justify-between shadow-md">
            <Link className="text-lg font-bold" href="/">
              Vicios
            </Link>
            <div>
              <Link className="p-2" href="/cart">
                Cart
              </Link>
              <Link className="p-2" href="/login">
                Login
              </Link>
            </div>
          </nav>
        </header>
        <main className="container m-auto mt-4 px-4">{children}</main>
        <footer className="flex h-10 shadow-inner justify-center items-center">
          <p>Copyright © 2022 Vicios</p>
        </footer>
      </div>
    </>
  );
}
