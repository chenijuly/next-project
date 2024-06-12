/*
 * @Description: 
 * @Author: jdchen
 * @Date: 2024-06-11 09:48:22
 * @LastEditors: jdchen
 * @LastEditTime: 2024-06-12 15:24:28
 */
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const withLayout = (WrappedComponent: any) => {
  const WithProps = (props: any) => (
    <div>
      <Header />
      <main style={{margin: '20px'}}>
        <WrappedComponent {...props} />
      </main>
      <Footer />
    </div>
  );
  return WithProps
};

export default withLayout;