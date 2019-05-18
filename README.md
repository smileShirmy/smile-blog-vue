# vue-blog

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## TODO

- 完成静态页面
- 白天主题/黑夜主题 切换

## Vuex

实际上，本项目用不着`Vuex`，只是强行为了用而用，其实更好的解决方案是使用[Store 模式](https://cn.vuejs.org/v2/guide/state-management.html#%E7%AE%80%E5%8D%95%E7%8A%B6%E6%80%81%E7%AE%A1%E7%90%86%E8%B5%B7%E6%AD%A5%E4%BD%BF%E7%94%A8)

## 规范

### CSS

#### 书写顺序：

1. 位置属性(position, top, right, z-index, display, float等)
2. 大小(width, height, padding, margin)
3. 文字系列(font, line-height, letter-spacing, color, text-align等)
4. 背景(background, border等)
5. 其他(animation, transition等)

### 响应式

- ~ 479px
- 480px ~ 767px
- 768px ~ 1023px
- 1024px ~ 1199px
- 1200px ~ 1399px
- 1400px ~