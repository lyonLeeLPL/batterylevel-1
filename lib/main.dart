import 'package:flutter/material.dart';
import 'dart:async';
import 'package:flutter/services.dart';
import 'package:url_launcher/url_launcher.dart';

import 'main2.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        // This is the theme of your application.
        //
        // Try running your application with "flutter run". You'll see the
        // application has a blue toolbar. Then, without quitting the app, try
        // changing the primarySwatch below to Colors.green and then invoke
        // "hot reload" (press "r" in the console where you ran "flutter run",
        // or simply save your changes to "hot reload" in a Flutter IDE).
        // Notice that the counter didn't reset back to zero; the application
        // is not restarted.
        primarySwatch: Colors.blue,
        // This makes the visual density adapt to the platform that you run
        // the app on. For desktop platforms, the controls will be smaller and
        // closer together (more dense) than on mobile platforms.
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'インタセクト スーパーアプリ'),
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

  void _incrementCounter() {
    setState(() {
      // This call to setState tells the Flutter framework that something has
      // changed in this State, which causes it to rerun the build method below
      // so that the display can reflect the updated values. If we changed
      // _counter without calling setState(), then the build method would not be
      // called again, and so nothing would appear to happen.
      _counter++;
    });
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
      body: Center(
        // Center is a layout widget. It takes a single child and positions it
        // in the middle of the parent.
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[


            RaisedButton(
              shape: StadiumBorder(),
              color: Colors.green,
              onPressed: () => _openYoutube(),
              child: Text('点击启动Youtube'),
              splashColor: Colors.black,
            ),
            RaisedButton(
              shape: StadiumBorder(),
              color: Colors.blue,
              child: Text('打开小程序1'),
              onPressed: _getBatteryLevel,
              splashColor: Colors.black,
            ),
            RaisedButton(
              shape: StadiumBorder(),
              color: Colors.red,
              child: Text('打开小程序2'),
              onPressed: _openMiniProgram3,
              splashColor: Colors.black,
            ),
            RaisedButton(
              shape: StadiumBorder(),
              color: Colors.deepPurpleAccent,
              child: Text('打开webview'),
              onPressed: _openMiniProgram3,
              splashColor: Colors.black,
            ),
          ],
        ),
      ),
    );
  }
}
