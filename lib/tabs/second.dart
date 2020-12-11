import 'package:flutter/material.dart';

class SecondTab extends StatelessWidget {

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
                  image: new AssetImage('assets/images/logo_intasect.gif'),
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
                            child: FaIcon(FontAwesomeIcons.yahoo,color: Colors.red,size: 60,),
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
                                            builder: (context) => new SecondTab()
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
