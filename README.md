# TODO LIST API

- GET TODO LIST

```js
/api/todos
```

- POST TODO LIST

```js
/api/todos

body: { content: string }
```

- UPDATE TODO LIST

```js
/api/todos/:todoId

body: { content: string, isDone: boolean }
```

- DELETE TODO LIST

```js
/api/todos/:todoId
```
