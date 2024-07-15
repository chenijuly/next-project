---
title: "诸葛耘墒的在线视频面试"
date: "2024-06-02"
---

### 1、小程序端AI视频面试
虚拟人面试官提问

#### 视频口述回答

1. 最近的两份工作经历，以及上一份离职原因
2. 在过往的工作或生活中，需要学习掌握一项与工作有关的技能或兴趣爱好时，你会运用哪些方法和诀窍，投入了多长时间？请用实际的例子说明，并介绍当时的背景、过程和结果。
3. 你最近看过的书有哪些？或印象深刻的文章和课程是什么？你学到了什么？
#### 单选题
4.  期望的薪酬幅度是多少
5. 上一份工作的薪资范围
6. 最近两份工作平均多长时间
7. 你能接受的每天工作时长是多少
a.9小时 b.9-10小时 c.10-11小时 d.12小时以上
…
100道职业PUA态度题
### 2、PC端在线笔试
#### 单选题

1. 以下代码执行的打印结果是？
```
var arr = [];
arr[0] = 0;
arr[1] = 1;
arr.foo = 'c';
console.log(arr.length);
```
2. Number(null)返回什么
3. 以下代码运行的结果是什么？
```
var a = 4399 < 0 || typeof(4399 + ‘’);
console.log(a);
```
4. 白屏时间first paint和可交互时间dom ready的关系是？
5. 如何判断一个对象是不是array，最准确的方法是？
6. 有以下ES6代码,描述正确的是
```
function * gen()  {
   yield 1;
   yield 2;
   yield 3;
}
```
7. 在es6中，下面程序运行结果输出，选项结果正确的是
```
for (let i=0; i<12; i++) {} console.log(i);
 const a=12;a=13;console.log(a);
 const g={b:3};console.log(g.b);g.b=12;console.log(g.b);
 let  [head,...tail] = [1,2,3,4];console.log(tail)
 ```

8. 有如下代码片段，运行结果是()
var obj={a:1, b:function () {alert(this.a)}}
var function = obj.b;
fun();

9. 在前提：var arr = [1,3,2]下，下面那个操作会返回一个数组，并且不是arr？
10. 关于javascript的原始类型{primitive type}, 错误的是
11. 要删除arr数组中的第i个元素（从第1个元素开始）最好的做法是？
12. 下面这段javascript代码， 最后一句alert的输出结果是？

```
var msg='hello'；
for (var i = 0; i<10; i++) {
	var msg = 'hello' + i*2 + i;
}
alert(msg);
```

13. 以下js返回false的是
14. 你想通过 XMLHttpRequest更新以下元素，即通过div显示状态，哪个是正确的做法？<div id="statusCode"></div>
15. 在javascript中，用于阻止默认事件的默认操作方法是
16. 以下javascript代码，在浏览器中运行的结果是
function foo(){
    console.log('first');
    setTimeout(function (){
        console.log('second');
    },5);
}
for(var i=0;i< 4399999999;i++) {
    foo();
}
17. 如下代码：请问执行后弹出的值是
var name = "World!";
(function () {
    var name;
    if (typeof name === 'undefined') {
        name = 'Jack';
        console.log('Goodbye' + name);
    } else {
        console.log('hello' + name);
    }
})();
#### 答案
1. 2
2. 0
3. string
4. 先触发first paint ，后触发dom ready
5. Object.propotype.toString.call(arr) === '[object, Array]'
6. gen()执行后返回一个 Generator 对象
7. i not defined,TypeError,3,12,[2,3,4]
8. 弹出undefined
9. [].concat.call(arr,[])
10. alert(null == undefined); 结果为false
11. arr.splice(i-1,1)
12. hello189
13. false == null
14. var myDiv = document.getElementById("statusCode"); myDiv.innerHTML = req.status;
15. preventDefault()
16. 首先全部输出first，然后全部输出second
17. Goodbye Jack

#### 算法题

1. 整数数组 nums 按升序排列，数组中的值 互不相同 。
在传递给函数之前，nums 在预先未知的某个下标 k（0 <= k < nums.length）上进行了 旋转，使数组变为 [nums[k], nums[k+1], …, nums[n-1], nums[0], nums[1], …, nums[k-1]]（下标 从 0 开始 计数）。例如， [0,1,2,4,5,6,7] 在下标 3 处经旋转后可能变为 [4,5,6,7,0,1,2] 。
给你 旋转后 的数组 nums 和一个整数 target ，如果 nums 中存在这个目标值 target ，则返回它的下标，否则返回 -1 。
```
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    // 二分法
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        // >> 1 相当于除以2向下取整
        let mid = (left + right) >> 1;

        if (nums[mid] === target) {
            return mid;
        }

        // 如果中间数小于最右边数，则右半段是有序的
        // 如果中间数大于最右边数，则左半段是有序的
        if (nums[mid] < nums[right]) {
            // 判断target是否在(mid, right]之间
            if (nums[mid] < target && target <= nums[right]) {
                // 如果在，则中间数右移即left增大
                left = mid + 1;
            } else {
                // 如果不在，则中间数左移即right减小
                right = mid - 1;
            }
        } else {
            // 在[left, mid)之间
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
};

```

2、编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 “”。

```
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let re = '';
    if (!strs.length) return re;
    for (let j=0;j<strs[0].length;j++){//第j位
        for (let i=1;i<strs.length;i++){//第i个
            if (strs[i][j]!=strs[0][j]) return re
        }
        re += strs[0][j];
    }
    return re;
}

```