/*
 * @Description: 
 * @Author: jdchen
 * @Date: 2024-06-11 09:39:30
 * @LastEditors: jdchen
 * @LastEditTime: 2024-06-11 09:48:14
 */
import React from 'react';
import withLayout from './withLayout';

const componentPage = () => {
  return (
    <div>
      <h2>Home Page</h2>
      {/* 其他的页面内容 */}
    </div>
  );
};

export default withLayout(componentPage);

