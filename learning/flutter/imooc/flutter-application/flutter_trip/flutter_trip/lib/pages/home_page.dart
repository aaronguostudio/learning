import 'package:flutter/material.dart';
import 'package:flutter_swiper/flutter_swiper.dart';
const APPBAR_SCROLL_OFFSET = 100;

class HomePage extends StatefulWidget{
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List _imageUrls = [
    "https://a0.muscache.com/4ea/air/v2/pictures/e9325e74-530f-447f-a1a6-576790b0c15a.jpg?t=r:w1200-h720-sfit,e:fjpg-c90",
    "https://a0.muscache.com/4ea/air/v2/pictures/e412c95c-e331-4cf7-9b1e-f36559d41f79.jpg?t=r:w1200-h720-sfit,e:fjpg-c90",
    "https://a0.muscache.com/4ea/air/v2/pictures/83237116-d96f-4deb-9225-597aaf13b8bd.jpg?t=r:w1200-h720-sfit,e:fjpg-c90"
  ];
  double appBarAlpha = 0;
  _onScroll (offset) {
    double alpha = offset/APPBAR_SCROLL_OFFSET;
    print(alpha);
    if (alpha <= 0) {
      alpha = 0;
    } else if (alpha > 1) {
      alpha = 1;
    }
    setState(() {
      appBarAlpha = alpha;
    });
  }
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          MediaQuery.removePadding(
              removeTop: true,
              context: context,
              child: NotificationListener(
                onNotification: (scrollNotification) {
                  /* depth is the index of the element, because scrollNotification will
             * listen all of the children */
                  if (scrollNotification is ScrollUpdateNotification && scrollNotification.depth == 0) {
                    _onScroll(scrollNotification.metrics.pixels);
                  }
                },
                child: ListView(
                  children: <Widget>[
                    Container(
                      height: 200,
                      child: Swiper(
                        itemCount: _imageUrls.length,
                        autoplay: true,
                        itemBuilder: (BuildContext context, int index) {
                          return Image.network(
                            _imageUrls[index],
                            fit: BoxFit.fill,
                          );
                        },
                      ),
                    ),
                    Container(
                      height: 800,
                      child: ListTile(
                          title: Text('hey')
                      ),
                    )
                  ],
                ),
              )
          ),
          Opacity(
            opacity: appBarAlpha,
            child: Container(
              height: 80,
              decoration: BoxDecoration(color: Colors.white),
              child: Center(
                child: Padding(
                    padding: EdgeInsets.only(top: 20),
                    child: Text("Home"),
                ),
              ),
            ),
          ),
        ],
      )
    );
  }
}