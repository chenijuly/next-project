import '../styles/page.scss';
import Link from "next/link";
// "use client";
import withLayout from '@/app/components/withLayout';
import { getSortedPostsData } from '../lib/posts';
// import { useRouter } from 'next/navigation';
const allPostsData = getSortedPostsData();
const Home = () => {
  // const router = useRouter()
  // const jumpPage = (url: string) => {
  //   router.push(url)
  // }
  return (
    <div className="container">
      <ul className="blogList">
        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            
            <Link legacyBehavior={false} href={`/blog/${id}`} className="blogLink">
              {title}
            </Link>
            <p className='blogDate'>{date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default withLayout(Home)

// const posts = [
//   { id: 'first-post', title: 'My First Post', date: '2024-05-29' },
//   // 你可以在这里添加更多文章
// ];

// export default function Home() {
//   return (
//     <div className="container mx-auto px-4">
//       <h1 className="text-4xl font-bold my-8">Welcome To July's Blog</h1>
//       <ul>
//         {posts.map(({ id, title, date }) => (
//           <li key={id} className="mb-4">
//             <Link legacyBehavior href={`/blog/${id}`} className="text-blue-500 hover:underline">
//               {title}
//             </Link>
//             <br />
//             <span className="text-gray-600">{date}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }
