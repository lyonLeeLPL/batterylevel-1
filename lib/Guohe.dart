import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

/**
 * APP的主入口文件
 */

import 'package:flutter/material.dart';

class Guohe extends StatefulWidget {
  @override
  GuoheState createState() => new GuoheState();
}

class GuoheState extends State<Guohe> {
  @override
  Widget build(BuildContext context) {
  
  }
}


class Playground extends StatefulWidget {
  @override
  PlaygroundState createState() => new PlaygroundState();
}

class PlaygroundState extends State<Playground> {
  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: new Scaffold(
        appBar: new AppBar(
          title: new Text("操场"),
          backgroundColor: Color.fromARGB(255, 119, 136, 213), //设置appbar背景颜色
          centerTitle: true, //设置标题是否局中
        ),
        body: new Center(
          child: new Text('操场'),
        ),
      ),
    );
  }
}



//果核的主界面
class Guohe extends StatefulWidget {
  @override
  GuoheState createState() => new GuoheState();
}

class GuoheState extends State<Guohe> with SingleTickerProviderStateMixin {
  TabController controller;

  @override
  void initState() {
    controller = new TabController(length: 3, vsync: this);
  }

  @override
  void dispose() {
    controller.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      home: new Scaffold(
        drawer: new LeftMenu(),
        body: new TabBarView(
          controller: controller,
          children: <Widget>[
            new Today(),
            new Kb(),
            new Playground(),
          ],
        ),
        bottomNavigationBar: new Material(
          color: Colors.white,
          child: new TabBar(
            controller: controller,
            labelColor: Colors.deepPurpleAccent,
            unselectedLabelColor: Colors.black26,
            tabs: <Widget>[
              new Tab(
                text: "今日",
                icon: new Icon(Icons.brightness_5),
              ),
              new Tab(
                text: "课表",
                icon: new Icon(Icons.map),
              ),
              new Tab(
                text: "操场",
                icon: new Icon(Icons.directions_run),
              ),
            ],
          ),
        ),
      ),
    );
  }
}