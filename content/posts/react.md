---
title: "react 面试题"
date: "2024-07-02"
---
### 一、说说对React的理解，有哪些特征？
- 理解：
react是构建用户界面的JavaScript库，只提供了UI层面的解决方案。
遵循组件设计模式、声明式编程、函数式编程的概念。
使用虚拟DOM来操控实际DOM，遵循高阶组件到低阶组件的单向数据流。
react可将界面形成独立的小块，每一个小块就是一个组件，这些组件之间可通过组合，嵌套构成整个界面。

- 特征：
JSX语法
单项数据流
虚拟DOM
声明式编程
组件化
### 二、state和props有什么区别？
一个组件的形态可以由内部的数据状态及外部的参数所决定的，内部的数据状态：state，外部参数：props
state：一般存在于constructor，需要通过setState来进行修改。
props：父级所传递的参数，props一般在子组件内是不能够被修改的，只能通过外部传入进行修改。
- 相同点：
两者都是JavaScript对象
两者都用于保存数据信息
state与props的更改都能引起render的重新执行，进行页面重新渲染。

- 不同点：
state是多变的，可以修改的；props在组件内部是不可以被修改的。
props是外部传入的，state是组件内部自己管理的。
### 三、说说对React中类组件和函数组件的理解？
- 类组件：
通过ES6的编写形式来编写组件，该类必须继承React.Cpmponent。通过this.props访问父组件传递的参数。在组件中需要有render方法，在return中返回React对象。
- 函数式组件：
通过编写函数的形式编写组件，函数的第一个参数为props，用于接受父组件参数。
```
// 函数是组件的编写形式
class Welcome extends React.Component { 
    constructor(props) {
        super(props) 
    }
    render() {
        return <h1> Hello, {this.props.name}</h1>
    }
 }
 
// 类组件的编写形式
const Welcome = (props) => { 
    return <h1>Hello, {props.name}</h1>
}
```
- 状态管理的不同
在Hooks出来之前，函数组件为无状态组件，不能够管理组件状态，而类组件可以通过state来管理，通过setState来进行修改。在Hooks出来之后，函数组件可以通过useStete来管理状态。
- 生命周期的不同
函数式组件不存在生命周期，因为生命周期钩子函数都继承于React.Cpmponent。若需要使用生命周期，则改为使用类组件。但函数式组件可以通过useEffect来模拟生命周期的作用：
```
useEffect(() => {
  // componentDidMount 逻辑
}, []);


useEffect(() => {
  // componentDidUpdate 逻辑
}, [variable1, variable2]);

useEffect(() => {
  // componentDidMount 逻辑

  return () => {
    // componentWillUnmount 逻辑
  };
}, []);

useEffect(() => {
  // componentDidMount 和 componentDidUpdate 逻辑

  if (/* 判断是否为初始化渲染 */) {
    // componentDidMount 逻辑
  } else {
    // componentDidUpdate 逻辑
  }
}, [variable1, variable2]);

```
- 调用方式的不同
函数式组件调用即执行函数即可，类组件需要对组件进行实例化，调用实例的render方法。

### 四、说说React的事件机制？
在React中，基于浏览器事件有一套自身的事件机制，包括：事件注册、事件合成、事件派发等，这些事件被称为合成事件。它的所有事件都是挂载在Document对象上，当真实DOM触发时，会冒泡到document上后，再处理react事件，所以会先执行原生事件，再处理react事件，最后再真正执行document上挂载事件。

### 五、说说React中引入css的方式有哪几种？区别？
#### 常见的引入方式:

- 在组件内直接使用
- 组件中引入.css文件
- 组件中引入.modules.css文件
- CSS in JS

#### 区别：

- 在组件内直接使用 css 该方式编写方便，容易能够根据状态修改样式属性，但是大量的演示编写容易导致代码混乱。
- 组件中引入 .css 文件符合我们日常的编写习惯，但是作用域是全局的，样式之间会层叠。
- 引入.module.css 文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写。
- 通过css injs 这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等。

至于使用 react 用哪种方案引入css，并没有一个绝对的答案，可以根据各自情况选择合适的方案。
### 六、React中组件之间是如何通信的？
react中通信方式有以下几种：

- 父向子：父组件在调用子组件的时候，只需要在子组件标签内传递参数，子组件通过props属性就能接收父组件传递过来的参数。
- 子向父：子组件向父组件通信的基本思路是，父组件向子组件传一个函数，然后通过这个函数的回调，拿到子组件传过来的值。
- 兄弟间:父组件作为中间层来实现数据的互通，通过使用父组件传递。
- 父向后代：使用 context 提供了组件之间通讯的一种方式，可以共享数据，其他数据都能读取对应的数据。
- 非关系：使用redux，创建全局资源数据管理，共用实现通信。

### 七、说说对高阶组件的理解？应用场景？
#### 高阶组件的特点：
1. 接受一个或多个函数作为参数输入 
2. 2.返回输出一个函数。
- JavaScript中常见的高阶函数有：map、filter、reduce、forEach、sort、find、some、every、flatMap、reduceRight、findIndex、indexOf、lastIndexOf等
- react中常见的高阶函数有：withRouter、connect、memo、forwardRef、Suspense等。
#### 在 React 中使用高阶函数的场景包括：
- 代码复用： 当多个组件需要相同的逻辑时，可以将这部分逻辑提取到一个高阶函数中，然后将这个函数应用到需要的组件上，以实现代码复用。
- 逻辑抽象： 高阶函数可以将通用逻辑从组件中抽象出来，使组件更加专注于展示数据或处理用户交互。
- 性能优化： 使用 memo 高阶函数可以优化函数组件的性能，避免不必要的重新渲染。
- 状态管理： 使用高阶函数连接 Redux 或者其他状态管理库，可以将状态管理逻辑与组件分离，使组件更加专注于 UI 展示。

### 八、说说你在React项目中是如何捕获错误的？
#### 组件级别的错误处理
- 在组件内部，我们可以通过try-catch块来捕获错误。例如，当我们执行某些可能会抛出错误的操作时：
```
  class MyComponent extends React.Component {
  componentDidMount() {
    try {
      // 可能会抛出错误的代码
    } catch (error) {
      console.error(error);
      // 处理错误，例如显示用户提示或记录错误
    }
  }
}
```
#### 使用错误处理库
- 可以使用诸如Sentry这样的错误处理库来自动捕获和记录错误。这些库通常提供了丰富的配置选项和集成工具，可以帮助开发者快速集成错误报告功能。
#### React的错误边界（Error Boundaries）
- React 16引入了错误边界的概念，它允许我们通过高阶组件来捕获并处理子组件树中发生的任何错误。
```
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // 更新state，使下一次渲染能够显示降级后的UI
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // 你也可以将错误日志上报给服务器
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 你可以渲染任何自定义的降级UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
```
- 在上面的示例中，ErrorBoundary 组件可以在其子组件树中的任何位置捕获错误。当捕获到错误时，getDerivedStateFromError 生命周期方法会被调用，我们可以在这里设置组件的状态以渲染错误UI。componentDidCatch 生命周期方法则可以用来记录错误或执行其他错误处理操作。
除此之外，还可以使用监听onerror事件：
```window.addEventListener('error', function(event) { ... })
```
#### 错误边界的限制
- 虽然错误边界是一个非常有用的特性，但它并不能捕获所有类型的错误。以下是一些错误边界无法捕获的情况：

1. 事件处理器中的错误（例如，点击事件）
2. 异步代码（例如，setTimeout或requestAnimationFrame回调函数）
3. 服务端渲染过程中发生的错误
4. 错误边界自身抛掷的错误（不会被同一个错误边界捕获）
- 因此，除了使用错误边界之外，我们还需要结合其他错误处理策略来确保应用程序的健壮性。


### 九、 说说对React的refs的理解？应用场景？
#### 创建refs有以下几种方式：
1. 传入字符串，使用时通过this.refs传入的字符串的格式获取对应的元素
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref="myref" />;
  }
}
 
// 访问当前节点的方式如下:
this.refs.myref.innerHTML = "hello";
```
2. 传入对象，对象是通过 React.createRef() 方式创建出来，使用时获取到创建的对象中存在 current 属性就是对应的元素。
```
// refs通过React.createRef()创建，然后将ref属性添加到React元素中，如下：
 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={this.myRef} />;
  }
}
 
// 当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中访问
 
const node = this.myRef.current;
```
3. 传入函数，当ref传入为一个函数的时候，在渲染过程中，回调函数参数会传入一个元素对象，然后通过实例将对象进行保存。
```
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return <div ref={element => this.myref = element} />;
  }
}
 
 
// 获取ref对象只需要通过先前存储的对象即可
 
const node = this.myref 
```

4. 传入hook，hook是使用useRef()方式创建
```
function App(props) {
    const myref = useRef()
    return ( 
        <div ref={myref} />
    ) 
}

// 获取ref对象只需要通过先前存储的对象即可
 
const node = myref.current
```
#### 使用场景：
- 对Dom元素的焦点控制、内容选择、控制。
- 对Dom元素的内容设置及媒体播放
- 对Dom元素的操作和对组件实例的操作
- 集成第三方 DOM 库
  
### 十、说说React中的setState执行机制？
- 在使用setState更新数据时，更新类型分为异步更新、同步更新
#### 异步更新
在react合成事件内同步执行的setState是异步的，如onClick等

- React控制的事件处理： 当setState在React的生命周期方法或事件处理函数中被调用时，React会将多个setState调用批处理为一个更新，它们会在事件处理结束后一起被应用，并且可能会导致只有一次重新渲染。
- React Hook： 使用useState hook中的更新函数时，同样也是React控制调度的，与setState有类似的表现。

#### 同步更新
**在宏任务：setTimeout ，微任务：.then ，或直接在DOM元素上绑定的事件内是同步的。**

- setTimeout 或 setInterval 回调：当在这些函数中调用setState()时，状态更新和重渲染通常会在调用它们的下一行代码之前完成。
- 原生事件处理：如果你在React组件中绑定了原生事件（使用 addEventListener 方式）并在事件回调中调用setState()，React无法控制该事件处理中的状态更新，因此状态更新通常会同步发生。
- 异步代码：在Promise、async/await、或者其他异步API的回调中调用setState()，会导致立即更新状态并重新渲染，因为React无法控制这些情况下的状态更新和调度。

### 十一、 说说Real DOM和Virtual DOM的区别？
#### Real DOM
Real DOM即为真实的DOM元素如div等。
#### Virtual DOM
Virtual DOM本质上是以JavaScript对象的形式对DOM的描述。在react中，JSX是其中一大特征，在js通过使用XML的方式去声明界面的DOM结构。
#### 区别
- 虚拟 DOM 不会进行排版与重绘操作，而真实 DOM 会频繁重排与重绘
- 虚拟 DOM 的总损耗是“虚拟 DOM 增删改+真实 DOM 差异增删改+排版与重绘”，真实 DOM 的总损耗是“真实 DOM 完全增删改+排版与重绘

#### 优缺点
- Real DOM 优点：
易用
- Real DOM 缺点：
效率低，解析速度慢，内存占用量过高性能差；
频繁操作真实 DOM，易于导致重绘与回流
- Virtual DOM 优点：
简单方便:如果使用手动操作真实D0M来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难
性能方面:使用 Virtual DOM，能够有效避免真实 DOM 数频繁更新，减少多次引起重绘与回流提高性能
跨平台:React借助虚拟 DOM，带来了跨平台的能力，一套代码多端运行
- Virtual DOM 缺点：
在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化
首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，速度比正常稍慢


### 十二、说说对Fiber架构的理解？解决了什么问题？
- Fiber架构是React 16中引入的新的协调引擎，它重新实现了React的核心算法。这个协调引擎负责渲染界面和计算组件变化。Fiber架构的主要目标是增强React在渲染大型应用和执行动画、手势等交互动作时的性能表现。
#### 理解Fiber架构

- 任务可中断: Fibe 架构的核心特性是其工作单元的'单位任务'可以中断和恢复。即React可以按需暂停渲染更新工作，去执行更高优先级的任务，然后再返回继续之前的渲染工作。
- 增量渲染: Fiber为React提供了增量渲染的能力，即将渲染任务拆分成一系列小的工作单元，每个工作单元完成时React可以暂停处理任务，检查是否有更高优先级的工作需要完成。
- 任务优先级: Fiber允许React根据任务的类型和上下文为不同的更新设置不同的优先级。例如，动画或用户交互的更新会比其他类型的状态更新有更高的优先级。
- 更好的生命周期管理: Fiber引入了新的生命周期方法，并更新了某些旧的生命周期方法来更好地适应异步渲染。

#### 解决的问题

- 避免阻塞: 在老的React版本中，正在执行的更新过程不能被中断，这会导致应用在处理大量的UI更新时出现卡顿，影响用户交互。Fiber通过使渲染任务可中断并进行任务切片来解决此问题。
- 改善动画和交互性能: 由于可以中断渲染任务，Fiber可以确保关键的用户交互和动画在需要时可以得到及时处理，从而提供更流畅的用户体验。
- 优先级调度: 在大型应用中，有些更新操作比其他操作更为紧急，Fiber通过任务优先级确保更重要的更新可以优先执行，对比之前的处理方式，这大大改善了应用的响应性能。
- 更稳健的错误处理: Fiber架构引入了错误边界（Error Boundaries），它允许组件捕获并处理子组件树中的JavaScript错误，防止整个应用崩溃。

**总而言之，Fiber架构让React变得更加强大和灵活，它通过任务的可中断性和优先级调度，使得React更好地适应复杂应用的渲染需求，提供了更流畅的用户体验，并允许React开发者有更细粒度的控制组件的渲染行为。**
### 十三、React中key值有什么作用？
- react也存在Diff算法，key值的存在就是用于判断元素是创建还是移动，从而减少不必要的渲染。因此key的值需要为每一个元素赋予一个确定的值。良好的key属性是优化的非常关键的一步，使用时的注意事项为：

- key应该是唯一的
key不能使用随机数，随机数会在每次render时，重新生成一个数字
不能使用index作为key值，对性能没有作用

### 十四、说说React中diff的原理是什么？
**react中diff算法遵循三个层级策略：**
- tree层级
DOM节点跨层级的操作不做优化，只会对相同层级的节点进行比较只有创建、删除操作，没有移动。
- component层级
如果是相同类组件，则会继续向下diff运算，如果不是同一个类组件，那么直接删除这个组件下所有节点，创建新的。
- element层级
对于比较同一层级的节点们，每个节点会在对应层级用唯一的key值作为唯一标识。element层级提供了 3 种节点操作：INSERT_MARKUP（插入）、MOVE_EXISTING（移动）、REMOVE_NO DE（删除）。

### 十五、说说对React Hooks的理解?解决了什么问题?
Hook是react 16.8的新特征，可在不写class类组件的情况下，使用state以及其他react类组件的特征。解决了函数组件中无法使用状态和副作用的问题，让函数组件具有了更多类组件的特性，同时也让代码更加简洁、可读性更强、逻辑更加清晰。常见的hook如useState、useEffect等。
hooks能够更容易解决状态相关的重用问题：

- 每调用useHook一次都会生成一份独立的状态
- 通过自定义hook能够更好的封装我们的功能

编写 hooks 为函数式编程，每个功能都包裹在函数中，整体风格更清爽，更优雅hooks的出现，使函数组件的功能得到了扩充，拥有了类组件相似的功能，在我们日常使用中，使用hooks 能够解决大多数问题，并且还拥有代码复用机制。
### 十六、说说你是如何提高组件的渲染效率的？在React中如何避免不必要的render？
#### 提高渲染效率可以使用以下方式：
- 使用shouldComponentUpdate： 确定是否可以跳过重新渲染；
- 使用PureComponent： 当 props 和 state 与之前保持一致时会跳过重新渲染；
- 使用React.memo或者useMemo来对组件进行缓存；
- 优化state和props： 尽量减少组件的state和props，只保留必要的部分。对于大型对象或数组，尽量使用不可变数据结构，或者提供一个新的对象或数组，而不是直接修改原对象或数组。这样可以避免不必要的渲染，因为React会使用浅比较来检查props和state是否发生了变化;
- 使用列表的键（key）： 当渲染列表时，确保每个列表项都有一个唯一的key。这样，React就可以准确地识别哪些项发生了变化，哪些项没有变化，从而避免不必要的渲染。
- 使用React.lazy和Suspense懒加载组件： 如果你的应用有很多大型组件，或者有一些只在特定条件下才需要的组件，你可以使用React.lazy和Suspense进行代码拆分。这样，只有当需要渲染这些组件时，才会加载它们的代码，从而减少了初始加载时间，并提高了渲染效率。
- 拆分组件：  将大型组件拆分为多个小型组件，可以提高渲染效率。 因为当父组件的状态或props发生变化时，只有与这些状态或props相关的子组件才会重新渲染，而其他子组件则不会受到影响。
- 使用context和hooks管理状态： 避免在组件树中通过props逐层传递状态，而是使用React的context和hooks来管理状态。这样，你可以将状态存储在更高级别的组件中，并通过context和hooks在需要的地方访问它，从而减少了不必要的props传递和渲染。
- 避免使用内联函数： 使用内联函数，则每次调用render函数时都会创建一个新的函数实例。
### 十七、说说React性能优化的手段有哪些？
#### 提升组件渲染效率
参考上题
#### 事件绑定的方式
在事件绑定方式中，我们了解到四种事件绑定的方式从性能方面考虑，在render方法中使用 bind 和render 方法中使用箭头函数这两种形式在每次组件 render 的时候都会生成新的方法实例，性能欠缺而constructor 中 bind 事件与定义阶段使用箭头函数绑定这两种形式只会生成一个方法实例，性能方面会有所改善。
#### 避免使用内联对象
使用内联对象时，react会在每次渲染时重新创建对此对象的引用，这会导致接收此对象的组件将其视为不同的对象。因此，该组件对于props的千层比较始终返回false，导致组件一直渲染。
```
// Don't do this!
function Component(props) {
  const aProp = { someProp: 'someValue' }
  return <AComponent style={{ margin: 0 }} aProp={aProp} />  
}

// Do this instead :)
const styles = { margin: 0 };
function Component(props) {
  const aProp = { someProp: 'someValue' }
  return <AComponent style={styles} {...aProp} />  
}

```
#### 避免使用 匿名函数
虽然匿名函数是传递函数的好方法，但它们在每次渲染上都有不同的引用。类似于内联对象。为了保证作为props传递给react组件的函数的相同引用，如果使用的类组件可以将其声明为类方法，如果使用的函数组件，可以使用useCallback钩子来保持相同的引用。
```// 避免这样做
function Component(props) {
  return <AComponent onChange={() => props.callback(props.id)} />  
}

// 函数组件，优化方法一
function Component(props) {
  const handleChange = useCallback(() => props.callback(props.id), [props.id]);
  return <AComponent onChange={handleChange} />  
}

// 类组件，优化方法二
class Component extends React.Component {
  handleChange = () => {
   this.props.callback(this.props.id) 
  }
  render() {
    return <AComponent onChange={this.handleChange} />
  }
}
```
#### 组件懒加载
使用React.lazy和React.Suspense完成延迟加载不是立即需要的组件。React加载的组件越少，加载组件的速度越快。
#### 使用React.Fragment避免添加额外的DOM
用户创建新组件时，每个组件应具有单个父标签。父级不能有两个标签，所以顶部要有一个公共标签所以我们经常在组件顶部添加额外标签 div这个额外标签除了充当父标签之外，并没有其他作用，这时候则可以使用 fragement其不会向组件引入任何额外标记，但它可以作为父级标签的作用：
```export default class NestedRoutingComponent extends React.Component { 
    render() {
        return (
            <>
                <h1>This is the Header Component</ h1>
                <p>Welcome To Demo Page</ p>
            <>
        )
    }
}
```
#### 服务器端渲染
采用服务端渲染端方式，可以使用户更快的看到渲染完成的页面服务端渲染，需要起一个 node 服务，可以使用express、koa等，调用react的renderToString 方法，将根组件染成字符串，再输出到响应中。

### 十八、路由

### 十九、讲讲React的hooks，有什么好处？有哪些常用的hooks？
是什么？及好处。
- React Hooks 是 React 16.8 版本引入的一项重要特性，它允许在函数组件中使用状态(state)和其他 React 特性，而无需编写 class 组件。Hooks 提供了一种更简洁、更灵活的方式来编写组件，具有以下几个好处：

- 更简洁的代码：相比于使用 class 组件，使用 Hooks 可以更轻松地管理组件的状态和副作用，代码更加简洁清晰。
- 逻辑复用：Hooks 可以将组件的状态逻辑抽象为可复用的函数，使得逻辑可以在多个组件中共享，提高了代码的可维护性和复用性。
- 减少代码量：相比于使用 class 组件时需要编写大量的模板代码（如 constructor、render 方法等），使用 Hooks 可以减少很多模板代码，
- 代码更加精简。更好的性能优化：Hooks 可以在不引入额外的组件层级的情况下管理状态和副作用，从而更好地进行性能优化。


#### 常用Hooks
#### useState
useState用于在函数组件中管理状态。它返回一个包含当前状态和一个更新状态的函数的数组。更新状态的函数可以接受一个新的值，并更新状态。
```
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Count: {count}</button>;
}
```
#### useEffect
useEffect用于在函数组件中处理副作用。它接受两个参数：一个副作用函数和一个依赖数组。当依赖数组中的任何一个值发生变化时，副作用函数将被调用。
```
import React, { useState, useEffect } from 'react';

function Timer() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  return <div>Time: {time}</div>;
}
```

#### useContext
useContext用于在函数组件中使用上下文。它接受一个上下文对象并返回上下文的当前值。当上下文的值发生变化时，函数组件将重新渲染。
```
import React, { createContext, useContext } from 'react';

const ThemeContext = createContext('light');

function Header() {
  const theme = useContext(ThemeContext);

  return (
    <header style={{ background: theme }}>
      <h1>My App</h1>
    </header>
  );
}

function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
    </ThemeContext.Provider>
  );
}
```

#### useReducer
useReducer用于在函数组件中管理复杂的状态。它接受一个reducer函数和一个初始状态，并返回一个包含当前状态和一个派发操作的数组。派发操作将一个操作对象发送到reducer函数中，并返回一个新的状态。
```
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleIncrement() {
    dispatch({ type: 'increment' });
  }

  function handleDecrement() {
    dispatch({ type: 'decrement' });
  }

  return (
    <>
      <button onClick={handleIncrement}>+</button>
      <span>{state.count}</span>
      <button onClick={handleDecrement}>-</button>
    </>
  );
}
```

#### useCallback
useCallback用于在函数组件中缓存回调函数。 它接受一个回调函数和一个依赖数组，并返回一个缓存的回调函数。当依赖数组中的任何一个值发生变化时，缓存的回调函数将被更新。
```
import React, { useState, useCallback } from 'react';

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <>
      <Child onClick={handleClick} />
      <span>Count: {count}</span>
    </>
  );
}

function Child({ onClick }) {
  return <button onClick={onClick}>Click me</button>;
}

```
#### useMemo
useMemo用于在函数组件中缓存计算结果。它接受一个计算函数和一个依赖数组，并返回一个缓存的计算结果。当依赖数组中的任何一个值发生变化时，计算函数将被重新计算。

```import React, { useMemo } from 'react';

function ExpensiveComponent({ value1, value2 }) {
  const result = useMemo(() => {
    console.log('calculating result');
       return value1 * value2;
  }, [value1, value2]);

  return <div>Result: {result}</div>;
}

```
#### useRef
useRef用于在函数组件中引用DOM元素或其他值。它返回一个包含可变引用的对象。当在函数组件中传递该对象时，它将保留其引用，即使组件重新渲染。
```
import React, { useRef } from 'react';

function Input() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button onClick={handleClick}>Focus input</button>
    </>
  );
}
```
**汇总**
- useState：用于在函数组件中管理状态。可以用于跟踪和更新组件的内部状态，例如表单输入、开关状态、计数器等。
- useEffect：用于处理副作用操作，例如数据获取、订阅事件、DOM操作等。可以在组件渲染后执行一些操作，也可以在组件卸载前进行清理操作。
- useContext：用于在组件之间共享数据。可以创建一个全局的上下文，并在组件树中的多个组件中访问和更新该上下文。
- useReducer：用于管理复杂的状态逻辑。可以用于替代useState，特别适用于具有复杂状态转换的组件，例如有限状态机、游戏状态等。
- useCallback：用于性能优化。可以缓存函数实例，以便在依赖项不变的情况下避免不必要的函数重新创建，提高组件的性能。
- useMemo：用于性能优化。可以缓存计算结果，以便在依赖项不变的情况下避免重复计算，提高组件的性能。
- useRef：用于在函数组件中保存可变值的引用。可以用于保存DOM元素的引用、保存上一次渲染的值等
