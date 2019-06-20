# apollo-client query profiling

## Query field count against number of models.

### **local (dev)**

| # models | 26 fields | 1 field |
| --- | --- | --- |
| 1 | 183 | 111 |
| 10 | 576 | 171 |
| 100 | 4103 | 557 |

### **local (dev) w/Chrome DevTools**

| # models | 26 fields | 1 field |
| --- | --- | --- |
| 1 | 22 | 16 |
| 10 | 101 | 21 |
| 100 | 571 | 87 |

### **release apk w/ram bundle**

| # models | 26 fields | 1 field |
| --- | --- | --- |
| 1 | 100 | 86 |
| 10 | 160 | 106 |
| 100 | 423 | 180 |