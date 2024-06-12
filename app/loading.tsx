/*
 * @Description: 
 * @Author: jdchen
 * @Date: 2024-06-10 10:46:11
 * @LastEditors: jdchen
 * @LastEditTime: 2024-06-10 10:46:13
 */
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <div className=" fixed top-0 left-0 w-full z-50 h-0.5">
      <div className="lload h-full bg-primary"></div>
    </div>
  )
}