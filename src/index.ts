import * as Koa from 'koa';
import * as Router from '@koa/router';
import * as bodyParser from 'koa-bodyparser';
import {logger} from "./logger";
import AppRoutes from './routes';

const app = new Koa();
const router = new Router();
const port = process.env.PORT || 4000;

//路由
AppRoutes.forEach(route => router[route.method](route.path, route.action));


// register middleware
app.use(logger());
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(port);

console.log(`应用启动成功 端口:${port}`);
