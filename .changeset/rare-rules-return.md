---
'@belgattitude/http-exception': minor
---

Added `method`, `code` and `errorId params.

| Name      | Type      | Description                                           |
|-----------| --------- |-------------------------------------------------------|
| url       | `string?` | url on which the error happened                       |
| method    | `string?` | http method used to load the url                      |
| code      | `string?` | Custom code (ie: 'AbortError', 'E-1234'...) |
| errorId   | `string?` | Unique error identifier (ie: uuid, nanoid...)         |

```typescript
const err = new HttpRequestTimeout({
  url: "https://api.dev/user/belgattitude",
  method: "GET",
  code: "NETWORK_FAILURE",
  errorId: nanoid(), // can be shared by frontend/backend 
});
console.log(err.url, err.method, err.code, err.errorId);
```
