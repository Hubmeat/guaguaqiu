所有的工程都需要先执行 npm install命令安装组件

node 工程启动
=========================
SET DEBUG=snail_node:* & npm start

vue工程启动
=========================
npm run dev




node工程每个人在routes里创建自己对应的后端接口文件，在apach数据库(guaguaqiu)中查找或者创建自己对应的数据表格，在router中
使用php完成对数据的处理即可。可以参照index.js的示例代码（不会php增删改查，我也不会。。。可以通过下面的链接来学习：
		http://www.runoob.com/nodejs/nodejs-mysql.html
）


vue工程中，每个人操作src目录下的components中自己对应的vue文件。对于数据库中同样数据的调用，我们将数据存在vuex中，直接调用
即可。对于个人页面业务需要的数据，使用fetch发送ajax请求，对应到自己的后端(node)接口上取得即可。

vue工程中所有的静态资源(图片，字体)都放在static目录下？？？？？？？？？

本次vue工程使用mint-ui库描绘，可以参照src目录下index.vue中fetch跨域取值的操作和mint-ui库的使用。链接如下：
		http://mint-ui.github.io/docs/#!/en2/quickstart

=====================================================
==    注：vue文件css部分对页面的布局，采用rem进行布局。页面细节做的好一点。 ==
=====================================================