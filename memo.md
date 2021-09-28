```
npx create-react-app . --template typescript
```

*自動整形ツール/　tailwind css　/ material UI 5.0系*
```
yarn add -D husky lint-staged prettier tailwindcss@npm:@tailwindcss/postcss7-compat postcss@^7 autoprefixer@^9 @mui/material @emotion/react @emotion/styled

yarn add @craco/craco

huskeyのv5からの設定
$ npx husky install
$ npx husky add .husky/pre-commit "yarn lint-staged"
```

`参考`   
[create-react-appで React + Typescript な環境を構築する](https://qiita.com/sunnyG/items/05c2e9381d6ba2d9fccf)