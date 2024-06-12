/*
 * @Description:
 * @Author: jdchen
 * @Date: 2024-06-07 15:51:51
 * @LastEditors: jdchen
 * @LastEditTime: 2024-06-11 10:03:39
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "content/posts");
export type IReturnBlogData = {
  id: string;
  contentHtml: string;
  title: string;
  date: string;
  [key: string]: any;
};

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, "") },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getMarkdownContent(params: { id: string }) {
  // console.log(params);

  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  const matterResult = matter(fileContents);
  // console.log("------------------------------", matterResult);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();
  const { title, date } = matterResult.data;
  const returnVal: IReturnBlogData = {
    id: params.id,
    contentHtml,
    title,
    date,
  };
  return returnVal;
}
