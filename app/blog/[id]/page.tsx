/*
 * @Description: 
 * @Author: jdchen
 * @Date: 2024-06-02 09:48:26
 * @LastEditors: jdchen
 * @LastEditTime: 2024-07-02 17:25:09
 */
import { getMarkdownContent } from '@/lib/blog';
// import style from '../../globals.scss'
import '@/styles/page.scss';

type Iparams = {
  params: { 
    id: string 
  }
  searchParams: {}
}
// pages/posts/[id].js

export default async function BlogPostPage(params: Iparams) {
  const blogContent = await getMarkdownContent(params.params)
  return (
    <div className="blog-page">
      <h1>{blogContent.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blogContent.contentHtml }} />
    </div>
  );
}
