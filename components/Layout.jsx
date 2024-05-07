import Head from "next/head";
import React from "react";
import Header from "./Header";

const Layout = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="description" content={title} />
        <meta property="og:site_name" content="Portfolio"></meta>
        <meta property="og:description" content={description}></meta>
        <link rel="icon" href="/umt.png"></link>
      </Head>

      <div className="mx-auto max-w-[1440px] relative z-10 px-3 md:px-10 overflow-hidden min-h-screen bg-primary-light antialiased font-montserrat dark:bg-gray-900 dark:text-white ">
        <Header />
        <div className=" w-full h-full ">{children}</div>
        <script
          data-name="BMC-Widget"
          data-cfasync="false"
          src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
          data-id="umutbarlak"
          data-description="Support me on Buy me a coffee!"
          data-message="You can support me by buying coffee"
          data-color="#FF5F5F"
          data-position="Right"
          data-x_margin="18"
          data-y_margin="18"
        ></script>
      </div>
    </>
  );
};

export default Layout;
