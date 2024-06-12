/*
 * @Description: 
 * @Author: jdchen
 * @Date: 2024-05-31 15:31:11
 * @LastEditors: jdchen
 * @LastEditTime: 2024-06-12 10:03:19
 */
"use client";
import '../globals.scss'
import withLayout from '@/app/components/withLayout';
const Blog = () => {
  return (
    <div className="blog-page">
      <h1>Blog Us tsx</h1>
      <p>This is the about page.</p>
    </div>
  );
}
// import { IReturnBlogData, getMarkdownContent } from '@/lib/blog';
// // import style from '../../globals.scss'
// import { useEffect, useState } from 'react';

// type Iparams = {
//   params: { 
//     id: string 
//   }
//   searchParams: {}
// }

// const BlogPostPage = (params: Iparams) => {
//   const [blogContent, setBlogContent] = useState({title: '', contentHtml: ''})
//   useEffect(() => {
//     const getContent = async () => {
//       const result: any = getMarkdownContent(params.params)
//       setBlogContent(result)
//     }
//     getContent()
//   }, [])
//   return (
//     <div className="blog-page">
//       <h1>{blogContent.title || ''}</h1>
//       <div dangerouslySetInnerHTML={{ __html: blogContent.contentHtml }} />
//     </div>
//   );
// }

export default withLayout(Blog);