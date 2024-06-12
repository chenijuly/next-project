/*
 * @Description: 
 * @Author: jdchen
 * @Date: 2024-05-30 10:59:32
 * @LastEditors: jdchen
 * @LastEditTime: 2024-06-07 10:22:00
 */
// lib/posts.js
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'content/posts');

type IReturnData = {
  id: string;
  [key:string]: any;
}
export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData: IReturnData[] = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    const matterResult = matter(fileContents);
    // console.log("------------------------------", matterResult)
    return {
      id,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
