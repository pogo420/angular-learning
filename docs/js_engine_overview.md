# Java Script  Engine:

## Here is the java script engine in image:
![js_engine](/docs/images/JS_Engine.png)

## Program flow:
* JS executes program line by line.
* It pushes code into call stack.
* If the code is network calls/delay/etc.
* Its moved to web api section.
* When the network call or delay is over in web api.
* Data comes to tasks/micro task queue.
* When call stack is empty, event loop pick a task from task queue and executes it in once iteration.
* It executed task is not giving control to another js code, It picks mico task queue and executes all.
* A micro task can add more micro tasks in the queue, and event loop will keep on executing it.
* All promise call back goes to micro task queue.

## References:
* Micro task [reference](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide#microtasks).