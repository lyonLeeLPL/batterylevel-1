import 'package:batterylevel/ThemeColors.dart';
import 'package:batterylevel/tabs/SecondePage.dart';
import 'package:flutter/material.dart';
import 'dart:async';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
import 'package:url_launcher/url_launcher.dart';

import 'webview.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key, this.title}) : super(key: key);

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  _MyHomePageState createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int _counter = 0;

  static const platform = const MethodChannel('samples.flutter.dev/battery');

  // Get battery level.
  String _batteryLevel = 'Unknown battery level.';

  Future<void> _getBatteryLevel() async {
    String batteryLevel;
    try {
      final int result = await platform.invokeMethod('getBatteryLevel');
      batteryLevel = 'Battery level at $result % .';
    } on PlatformException catch (e) {
      batteryLevel = "Failed to get battery level: '${e.message}'.";
    }

    setState(() {
      _batteryLevel = batteryLevel;
    });
  }

  Future<void> _openMiniProgram2() async {
    String batteryLevel;
    try {
      final int result = await platform.invokeMethod('openMiniProgram2');
    } on PlatformException catch (e) {
    }
  }

  Future<void> _openMiniProgram3() async {
    try {
      final int result = await platform.invokeMethod('openMiniProgram3');
    } on PlatformException catch (e) {
    }
  }

  Future<void> _openWebview() async {
    Navigator.push(context, MaterialPageRoute(builder: (BuildContext context) => WebViewExample()));
  }

  _openYoutube() async {
    // Android
    const url = 'vnd.youtube://';
    if (await canLaunch(url)) {
      await launch(url);
    } else {
      //  Ios
      const url = 'youtube://';
      if(await canLaunch(url)){
        await launch(url);
      }else{
        throw 'Could not launch $url';
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(
        // Here we take the value from the MyHomePage object that was created by
        // the App.build method, and use it to set our appbar title.
        title: Text(widget.title),
      ),
      body: Container(
        child: Column(
          children: <Widget>[
            Container(
              height: 150,
              //设置背景图片
              decoration: new BoxDecoration(
                color: Colors.white,
                image: new DecorationImage(
                  // fit: BoxFit.cover,
                  image: new AssetImage('assets/images/logo.jpg'),
                ),
              ),
            ),
            Container(
              color: Colors.white,
              height: 300,
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Container(
                    child: Center(
                      child: Row(
                        // center the children
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Container(
                            child: FaIcon(FontAwesomeIcons.youtube,color: Colors.red,size: 60,),
                          ),
                          Container(
                            height: 60,
                            child: FlatButton(
                              onPressed: _openYoutube,
                              color: Colors.white,
                              child: Text("外部App",
                                style: TextStyle(color: Colors.blue , fontSize: 25),
                              ),
                              shape: RoundedRectangleBorder(
                                  side: BorderSide.none,
                                  borderRadius: BorderRadius.all(Radius.circular(50))
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 1.0, color: ThemeColors.color1),
                      color: ThemeColors.colorBackground,
                    ),
                  ),
                  //////
                  Container(
                    child: Center(
                      child: Row(
                        // center the children
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Container(
                            child: FaIcon(FontAwesomeIcons.chrome,color: Colors.yellow,size: 60,),
                          ),
                          Container(
                            height: 60,
                            child: FlatButton(
                              onPressed: _openWebview,
                              color: Colors.white,
                              child: Text("H5サイト",
                                style: TextStyle(color: Colors.blue , fontSize: 25),
                              ),
                              shape: RoundedRectangleBorder(
                                  side: BorderSide.none,
                                  borderRadius: BorderRadius.all(Radius.circular(50))
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 1.0, color: ThemeColors.color1),
                      color: ThemeColors.colorBackground,
                    ),
                  ),

                  //////
                  Container(
                    child: Center(
                      child: Row(
                        // center the children
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Container(
                            child: FaIcon(FontAwesomeIcons.gripHorizontal,color: Colors.grey,size: 60,),
                          ),
                          Container(
                            height: 60,
                            child: FlatButton(
                              onPressed: _openMiniProgram3,
                              color: Colors.white,
                              child: Text("ミニアプリ",
                                style: TextStyle(color: Colors.blue , fontSize: 25),
                              ),
                              ///圆角
                              shape: RoundedRectangleBorder(
                                  side: BorderSide.none,
                                  borderRadius: BorderRadius.all(Radius.circular(50))
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 1.0, color: ThemeColors.color1),
                      color: ThemeColors.colorBackground,
                    ),
                  ),
                  /////
                  Container(
                    child: Center(
                      child: Row(
                        // center the children
                        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                        children: <Widget>[
                          Container(
                            child: IconButton(icon: FaIcon(FontAwesomeIcons.plusCircle,color: Colors.green,size: 50,),
                            iconSize: 50,
                            onPressed: () {
                              Navigator.push(
                                  context,
                                  new MaterialPageRoute(
                                      builder: (context) => new SecondePage(
                                        title: widget.title,
                                      )
                                  )
                              );
                            }
                              )
                          ),
                        ],
                      ),
                    ),
                    decoration: new BoxDecoration(
                      border: new Border.all(width: 1.0, color: ThemeColors.color1),
                      color: ThemeColors.colorBackground,
                    ),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
      bottomNavigationBar: BottomNavigationBar(
          items: [
            BottomNavigationBarItem(
                icon: Icon(Icons.home), title: Text('ホーム')),
            BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.tools), title: Text('その他')),
            BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.bell), title: Text('お知らせ')),
            BottomNavigationBarItem(
                icon: Icon(FontAwesomeIcons.user), title: Text('マイページ')),
          ],
          type: BottomNavigationBarType.fixed,
          fixedColor: Colors.green),
    );
  }
}

