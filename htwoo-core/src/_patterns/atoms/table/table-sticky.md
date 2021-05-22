---
title: Header Column Sticky
---
This table has a sticky header defined just by using an additional class on `tbody`. The class name is `header-sticky`.

You can define where the table header should be sticky by applying the following additional classes.

* top - sticky on top
* left - sticky on the left side
* right - sticky on the right side
* bottom - stick on bottom

The classes can be also freely combined for example:

```html
<th class="is-stick top left">
    ...
</th>
```

To support multiple columns make sure you include the [table.js](../../js/table) in your code. From the htwoo-core package `node_modules/htwoo-core/lib/js/table`.

To init the sticky behaviout call the following function.

```javascript
/** Table Helper */
import {
    initTables
} from './table.js';

window.onload = () => {
    initTables();
};

```

