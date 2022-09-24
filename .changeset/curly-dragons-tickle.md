---
'@belgattitude/http-exception': minor
---

Export convertToSerializable and createFromSerializable

```typescript
import { 
    convertToSerializable, 
    createFromSerializable 
} from '@belgattitude/http-exception/serializer';

const serializableObject = convertToSerializable(new HttpForbidden()); 
const exception = createFromSerializable(serializableObject);
```
