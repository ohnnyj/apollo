# apollo-client query profiling

## Replaces one field with a union.

### **local (dev)**

| # models | 26 fields | 1 field |
| --- | --- | --- |
| 1 | 185 | 139 |
| 10 | 689 | 300 |
| 100 | 5231 | 1580 |

### **local (dev) w/Chrome DevTools**

| # models | 26 fields | 1 field |
| --- | --- | --- |
| 1 | 29 | 18 |
| 10 | 86 | 37 |
| 100 | 736 | 209 |

### **release apk w/ram bundle**

| # models | 26 fields | 1 field |
| --- | --- | --- |
| 1 | 108 | 95 |
| 10 | 196 | 146 |
| 100 | 533 | 302 |