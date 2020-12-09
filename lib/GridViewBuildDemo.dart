import 'package:flutter/material.dart';

void main() {
  runApp(GridViewBuildDemo());
}

class GridViewBuildDemo extends StatefulWidget {
  @override
  State<StatefulWidget> createState() {
    return _GridViewBuildDemoSate();
  }
}

class _GridViewBuildDemoSate extends State<GridViewBuildDemo> {

  List<Anchor> anchors = [];

  @override
  void initState() {
    getAnchors().then((anchors){
      setState(() {
        this.anchors = anchors;
      });
    });
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(8),
      child: GridView.builder(
          shrinkWrap: true,
          physics: ClampingScrollPhysics(),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 2,
            mainAxisSpacing: 10,
            crossAxisSpacing: 10,
            childAspectRatio: 0.8
          ),
          itemCount: anchors.length,
          itemBuilder: (BuildContext context,int index){
            return Container(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: <Widget>[
                  Expanded(child: Image.network(anchors[index].imageUrl)),
                  SizedBox(height: 5,),
                  Text(anchors[index].nickName,style: TextStyle(fontSize: 16),),
                  Text(anchors[index].roomName,style: TextStyle(fontSize: 14,color: Colors.grey))
                ],
              ),
            );
          },
      ),
    );
  }
}