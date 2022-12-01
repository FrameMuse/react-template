# React Typescript Template
[Lighthouse CI]()

https://feature-sliced.design/

## Navigation

- Features

## Features

- 

## Guidelines

### API

#### General

1. There must be [Swagger](https://swagger.io/) documentaion.
1. There must be, at least, necessary **autotests**.

#### Asdnasjd

1. If arrays are returned, they can't be `nullable` or `optional`, they are always `required` and in case of empty array should return `[]`.

#### 

### Gzip

If you want to use gzipping in your app to enhance perfomance, you better use CDN (like [cloudflare](https://www.cloudflare.com/)) and setup gzip there.

Another way is to use something like [nginx](https://www.nginx.com/) and enable serving of gzipped files there. But you also will need to gzip your build - you can do it by adding [`compress-cra`](https://www.npmjs.com/package/compress-create-react-app) to your app, just follow the instruction in the link.

### Deploy

#### Heroku

Currenly, [Heroku](https://heroku.com/) supports build cra apps without any configuration.

You also might need to know that Heroku consumes two scripts `build` for **building** and `start` for **serving build**, but cra template uses `start` as dev server. Then you will have to either put `react-scripts start` into another field (like `dev`) and make `start` as serving build (like `serve -s build`) or add a Heroku config file `Procfile` with this line
```
web: npm run serve
```

## Useful packages

- [`fuse.js`](https://www.npmjs.com/package/fuse.js) - For searching values
- [`recoil`](https://www.npmjs.com/package/recoil) - For compact contexts
