const Koa = require('koa');

const User = require('./db/User')
const Published = require('./db/Published')
const Retroaction = require('./db/retroaction')

// 创建一个Koa对象表示web app本身:
const app = new Koa();
// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
// add router middleware:

const koaBody = require('koa-body');
const fs = require('fs');
const path = require('path');

// 设置上传图片大小限制
app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 200 * 1024 * 1024 // 设置上传文件大小最大限制，默认2M
    }
}));

const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
app.use(router.routes());

const staticFiles = require('koa-static')
app.use(staticFiles(path.join(__dirname + '/public/')))


// add url-route:
router.get('/holle', async(ctx, next) => {
    console.log(User)
    let users = await User.findAll();
    ctx.body = users
});

router.post('/login', async(ctx, next) => {
    const jane = await User.create(ctx.request.body);
    console.log("Jane's auto-generated ID:", jane.id);
    ctx.body = jane
});

// 单张图片上传接口
router.post('/uploadfile', async(ctx, next) => {
    // 上传单个文件
    const file = ctx.request.files.file; // 获取上传文件
    // 创建可读流
    const reader = fs.createReadStream(file.path);
    let filePath = path.join(__dirname, 'public/upload/') + `${file.name}`;
    console.log(filePath)
        // 创建可写流
    const upStream = fs.createWriteStream(filePath);
    // 可读流通过管道写入可写流
    reader.pipe(upStream);
    return ctx.body = `http://localhost:3000/upload/${file.name}`;
});

// 增加用户上传接口
router.post('/user/add', async(ctx, next) => {
    const jane = await User.create(ctx.request.body);
    console.log("Jane's auto-generated ID:", jane.id);
    ctx.body = jane
});

// 增加用户列表查询接口
// add user findAll:
router.get('/findAll', async(ctx, next) => {
    console.log(User)
    let users = await User.findAll();
    ctx.body = users
});

router.post('/uploadfiles', async(ctx, next) => {
    // 上传单个文件
    const files = ctx.request.files; // 获取上传文件
    console.log("file", files)

    let filess = []
    for (const key in files) {
        let file = files[key]
            // 创建可读流
        const reader = fs.createReadStream(file.path);
        let filePath = path.join(__dirname, 'public/upload/') + `${file.name}`;
        console.log(filePath)
            // 创建可写流
        const upStream = fs.createWriteStream(filePath);
        // 可读流通过管道写入可写流
        reader.pipe(upStream);

        filess.push(`http://localhost:3000/upload/${file.name}`)
    }

    return ctx.body = filess;
});

// 多张图片上传接口代码如下
router.post('/published', async(ctx, next) => {
    console.log("ctx.request.body", ctx.request.body)
        // image = [];
        // for (let i of ctx.request.body.imageList) {
        //     image.push(i)
        // }
        // console.log(image)
    ctx.request.body.imageList = JSON.stringify(ctx.request.body)
    const published = await Published.create(ctx.request.body);
    console.log("published's auto-generated ID:", published.id);
    ctx.body = published
});

// 增加列表刷新接口
router.get('/add', async(ctx, next) => {
    console.log("Published", Published)
    let publisheds = await Published.findAll();
    // console.log("publisheds", publisheds)
    // let obj = JSON.parse(publisheds)
    ctx.body = publisheds
});
// 建议反馈上传接口
router.post('/retroaction', async(ctx, next) => {
    const jane = await Retroaction.create(ctx.request.body);
    console.log("Jane's auto-generated ID:", jane.id);
    ctx.body = jane
});

app.listen(3000, () => {
    console.log('http://localhost:3000')
})