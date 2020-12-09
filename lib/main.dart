import 'package:flutter/material.dart';
import 'dart:async';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';
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
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: MyHomePage(title: 'スーパーアプリ'),
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
      body: Container(
          child: Column(
            children: <Widget>[
              Container(
                height: 200,
                //设置背景图片
                decoration: new BoxDecoration(
                  image: new DecorationImage(
                    // fit: BoxFit.cover,
                    image: new AssetImage('assets/images/logo_intasect.gif'),
                  ),
                ),
              ),
              Container(
                // decoration: new BoxDecoration(
                //     border: new Border.all(color: Color(0xFFFF0000), width: 0.5),
                //     color: Color(0xFF9E9E9E),
                //     borderRadius: new BorderRadius.circular((20.0))),
                child: Table(
                  children: [
                    TableRow(
                      children: [
                        Container(
                          decoration: BoxDecoration(
                            border: new Border.all(color: Colors.grey , width:  1)
                          ),
                          height: 150,
                          child:
                          IconButton(
                            // Use the FaIcon Widget + FontAwesomeIcons class for the IconData
                              icon: FaIcon(FontAwesomeIcons.youtube,color: Colors.red,size: 80,),
                              onPressed: _openYoutube,
                          ),
                        ),
                        Container(
                          decoration: BoxDecoration(
                              border: new Border.all(color: Colors.grey , width:  1)
                          ),
                          height: 150,
                          child:
                          IconButton(
                            // Use the FaIcon Widget + FontAwesomeIcons class for the IconData
                              icon: FaIcon(FontAwesomeIcons.weixin,color: Colors.green,size: 80,),
                              onPressed: _getBatteryLevel,
                          ),
                        ),
                      ],
                    ),
                    TableRow(
                      children: [
                        Container(
                          decoration: BoxDecoration(
                              border: new Border.all(color: Colors.grey , width:  1)
                          ),
                          height: 150,
                          child:
                          IconButton(
                            // Use the FaIcon Widget + FontAwesomeIcons class for the IconData
                              icon: FaIcon(FontAwesomeIcons.weixin,color: Colors.green,size: 80,),
                              onPressed: _openMiniProgram2,
                          ),
                        ),
                        Container(
                          decoration: BoxDecoration(
                              border: new Border.all(color: Colors.grey , width:  1)
                          ),
                          height: 150,
                          child:
                          IconButton(
                            // Use the FaIcon Widget + FontAwesomeIcons class for the IconData
                              icon: FaIcon(FontAwesomeIcons.chrome,color: Colors.redAccent,size: 80,),
                              onPressed: _openWebview,
                          ),
                        ),
                      ],
                    ),

                  ],

                ),
              ),
            ],
          ),
        ),
    );
  }
}

class LayoutDemo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GridView.count(

      crossAxisCount: 3,  //一行的 Widget 数量
      children: <Widget>[
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本'),
        Text('这是一个文本')
      ],
    );
  }
}
