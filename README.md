# React Typescript Template
[Lighthouse CI]()

## Navigation

- Features

## Motivation

This is common problem in frontend world - there is no generalized template, it's more like example even if is, it's not enforcing a code style or structure. This template is to try to provide a solution, a code base to start from. It should be able to hold light, medium and somewhat large projects, offer structure and architecture, suggest some guidlines and articles to research more about frontend app building.

## Features

- 

## Guidelines

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

## Adoptation

## Useful packages

- [`fuse.js`](https://www.npmjs.com/package/fuse.js) - For searching values
- [`recoil`](https://www.npmjs.com/package/recoil) - For compact contexts
