/*
这是第二个页面，包含一个返回的按钮
 */
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:font_awesome_flutter/font_awesome_flutter.dart';

class SecondePage extends StatelessWidget {

  final title;
  SecondePage({Key key, this.title}) : super(key: key);

  static const platform = const MethodChannel('samples.flutter.dev/battery');

  @override
  Widget build(BuildContext context) {
    List<Widget> _list = new List();
    for (int i = 0; i < titleItems.length; i++) {
      _list.add(buildListData(context, titleItems[i], iconItems[i], subTitleItems[i]));
    }
    // 分割线
    var divideTiles = ListTile.divideTiles(context: context, tiles: _list).toList();

    return new Scaffold(
      appBar: new AppBar(
        title: new Text("戻る"),
      ),
      body: Column(
        children: [
            Container(
              child: Text("ミニアプリ　リスト" ,style: TextStyle(color: Colors.black,
                  fontWeight: FontWeight.w700 ),
                textAlign: TextAlign.left,),
              alignment: Alignment.centerLeft,
              height: 50,
              color: Colors.white,
            ),
            Expanded(
              child: new ListView.separated(
                  itemBuilder: (context, item) {
                    return buildListData(context, titleItems[item], iconItems[item], subTitleItems[item]);
                  },
                  separatorBuilder: (BuildContext context, int index) => new Divider(),
                  itemCount: titleItems.length
              ),

          )

        ],
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

  // 数据源
  List<String> titleItems = <String>[
    'keyboard', 'print',
    'router', 'pages',
  ];

  List<Icon> iconItems = <Icon>[
    new Icon(Icons.keyboard,size: 60,), new Icon(Icons.print,size: 60,),
    new Icon(Icons.router,size: 60,), new Icon(Icons.pages,size: 60,),
    new Icon(Icons.zoom_out_map,size: 60,), new Icon(Icons.zoom_out,size: 60,),
    new Icon(Icons.youtube_searched_for,size: 60,), new Icon(Icons.wifi_tethering,size: 60,),
    new Icon(Icons.wifi_lock,size: 60,), new Icon(Icons.widgets,size: 60,),
    new Icon(Icons.weekend,size: 60,), new Icon(Icons.web,size: 60,),
    new Icon(Icons.accessible,size: 60,), new Icon(Icons.ac_unit,size: 60,),
  ];

  List<String> subTitleItems = <String>[
    'subTitle: keyboard', 'subTitle: print',
    'subTitle: router', 'subTitle: pages',
    'subTitle: zoom_out_map', 'subTitle: zoom_out',
    'subTitle: youtube_searched_for', 'subTitle: wifi_tethering',
    'subTitle: wifi_lock', 'subTitle: widgets',
    'subTitle: weekend', 'subTitle: web',
    'subTitle: accessible', 'subTitle: ac_unit',
  ];

  Widget buildListData(BuildContext context, String titleItem, Icon iconItem, String subTitleItem) {
    return new ListTile(
      leading: iconItem,
      title: new Text(
        titleItem,
        style: TextStyle(fontSize: 18),
      ),
      trailing: new Icon(Icons.keyboard_arrow_right),
      onTap: (){},
    );
  }

}