V-MSG: Simple notify handler component for Vue.js
===============

![Preview](https://nasa8x.github.com/v-msg/www/preview.png)

## Demo

[v-msg](https://nasa8x.github.io/v-msg/dist/www)

## Get Started

```
npm i v-msg
```

```
import 'v-msg/dist/msg.min.css';

import Vue from 'vue';
import Msg from 'v-msg';


// Global register
Vue.use(Msg);
```

```js
// top-left, top-right, top-center, bottom-left, bottom-right, bottom-center
this.$msg.success('This is a notification', { position: 'top-left' });

// notify info theme
this.$msg.info('This is a notification');

// notify warning theme
this.$msg.warning('This is a notification');

// notify error theme
this.$msg.error('This is a notification');

// alert
this.$msg.alert('This is a notification');

// confirm
 this.$msg.confirm('Are you sure want to delete this item?').then(({ data }) => {
                    //alert('You choose: ' + data);
                    this.$msg.alert('You choose: '+ data);
                });

// custom timeout
this.$msg.info('This is a notification', { timeout: 3000 });

```

### MIT License

Copyright (c) 2018 Nasa8x

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.