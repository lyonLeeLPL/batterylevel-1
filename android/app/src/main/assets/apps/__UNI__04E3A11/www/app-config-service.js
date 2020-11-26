
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/tabBar/component/component","pages/tabBar/API/API","pages/tabBar/template/template","pages/tabBar/extUI/extUI","pages/component/view/view","pages/component/scroll-view/scroll-view","pages/component/swiper/swiper","pages/component/cover-view/cover-view","pages/component/movable-view/movable-view","pages/component/text/text","pages/component/rich-text/rich-text","pages/component/progress/progress","pages/component/button/button","pages/component/checkbox/checkbox","pages/component/form/form","pages/component/input/input","pages/component/label/label","pages/component/picker/picker","pages/component/picker-view/picker-view","pages/component/radio/radio","pages/component/slider/slider","pages/component/switch/switch","pages/component/textarea/textarea","pages/component/editor/editor","pages/component/navigator/navigator","pages/component/navigator/navigate/navigate","pages/component/navigator/redirect/redirect","pages/component/image/image","pages/component/video/video","pages/component/audio/audio","pages/component/map/map","pages/component/canvas/canvas","pages/component/web-view/web-view","pages/component/ad/ad","pages/component/web-view-local/web-view-local","platforms/app-plus/speech/speech","platforms/app-plus/orientation/orientation","platforms/app-plus/proximity/proximity","platforms/app-plus/push/push","platforms/app-plus/shake/shake","pages/about/about","platforms/app-plus/feedback/feedback","pages/API/login/login","pages/API/subnvue/subnvue","pages/API/get-user-info/get-user-info","pages/API/request-payment/request-payment","pages/API/share/share","pages/API/set-navigation-bar-title/set-navigation-bar-title","pages/API/show-loading/show-loading","pages/API/navigator/navigator","pages/API/navigator/new-page/new-vue-page-1","pages/API/navigator/new-page/new-vue-page-2","pages/API/navigator/new-page/new-nvue-page-1","pages/API/navigator/new-page/new-nvue-page-2","pages/API/pull-down-refresh/pull-down-refresh","pages/API/animation/animation","pages/API/get-node-info/get-node-info","pages/API/intersection-observer/intersection-observer","pages/API/canvas/canvas","pages/API/action-sheet/action-sheet","pages/API/modal/modal","pages/API/toast/toast","pages/API/get-network-type/get-network-type","pages/API/get-system-info/get-system-info","pages/API/add-phone-contact/add-phone-contact","pages/API/on-accelerometer-change/on-accelerometer-change","pages/API/on-compass-change/on-compass-change","pages/API/make-phone-call/make-phone-call","pages/API/scan-code/scan-code","pages/API/clipboard/clipboard","pages/API/request/request","pages/API/upload-file/upload-file","pages/API/download-file/download-file","pages/API/image/image","pages/API/voice/voice","pages/API/inner-audio/inner-audio","pages/API/background-audio/background-audio","pages/API/video/video","pages/API/file/file","pages/API/map/map","pages/API/map-search/map-search","pages/API/get-location/get-location","pages/API/open-location/open-location","pages/API/choose-location/choose-location","pages/API/storage/storage","pages/API/sqlite/sqlite","pages/API/rewarded-video-ad/rewarded-video-ad","pages/API/brightness/brightness","pages/API/save-media/save-media","pages/API/bluetooth/bluetooth","pages/API/soter/soter","pages/API/ibeacon/ibeacon","pages/API/vibrate/vibrate","pages/API/websocket-socketTask/websocket-socketTask","pages/API/websocket-global/websocket-global","pages/extUI/badge/badge","pages/extUI/countdown/countdown","pages/extUI/drawer/drawer","pages/extUI/icons/icons","pages/extUI/load-more/load-more","pages/extUI/nav-bar/nav-bar","pages/extUI/number-box/number-box","pages/extUI/popup/popup","pages/extUI/segmented-control/segmented-control","pages/extUI/tag/tag","pages/extUI/list/list","pages/extUI/card/card","pages/extUI/collapse/collapse","pages/extUI/pagination/pagination","pages/extUI/swiper-dot/swiper-dot","pages/extUI/grid/grid","pages/extUI/rate/rate","pages/extUI/steps/steps","pages/extUI/notice-bar/notice-bar","pages/extUI/swipe-action/swipe-action","pages/extUI/search-bar/search-bar","pages/extUI/calendar/calendar","pages/extUI/indexed-list/indexed-list","pages/extUI/fab/fab","pages/extUI/fav/fav","pages/extUI/goods-nav/goods-nav","pages/extUI/section/section","pages/extUI/transition/transition","pages/extUI/title/title","pages/extUI/link/link","pages/extUI/combox/combox","pages/template/ucharts/ucharts","pages/template/nav-default/nav-default","pages/template/component-communication/component-communication","pages/template/nav-transparent/nav-transparent","pages/template/nav-button/nav-button","pages/template/nav-image/nav-image","pages/template/nav-city-dropdown/nav-city-dropdown","pages/template/nav-dot/nav-dot","pages/template/nav-search-input/nav-search-input","pages/template/nav-search-input/detail/detail","pages/template/list2detail-list/list2detail-list","pages/template/list2detail-detail/list2detail-detail","pages/template/tabbar/tabbar","pages/template/tabbar/detail/detail","pages/template/swiper-vertical/swiper-vertical","pages/template/swiper-list/swiper-list","pages/template/swiper-list-nvue/swiper-list-nvue","pages/template/scheme/scheme","pages/template/vant-button/vant-button","pages/template/global/global"],"window":{"pageOrientation":"portrait","navigationBarTextStyle":"white","navigationBarTitleText":"Hello uniapp","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#F8F8F8","backgroundColorTop":"#F4F5F6","backgroundColorBottom":"#F4F5F6"},"tabBar":{"color":"#7A7E83","selectedColor":"#007AFF","borderStyle":"black","backgroundColor":"#F8F8F8","list":[{"pagePath":"pages/tabBar/component/component","iconPath":"static/component.png","selectedIconPath":"static/componentHL.png","text":"内置组件"},{"pagePath":"pages/tabBar/API/API","iconPath":"static/api.png","selectedIconPath":"static/apiHL.png","text":"接口"},{"pagePath":"pages/tabBar/extUI/extUI","iconPath":"static/extui.png","selectedIconPath":"static/extuiHL.png","text":"扩展组件"},{"pagePath":"pages/tabBar/template/template","iconPath":"static/template.png","selectedIconPath":"static/templateHL.png","text":"模板"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"hellouniapp1","compilerVersion":"2.9.10","entryPagePath":"pages/tabBar/component/component","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/tabBar/component/component","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"内置组件","bounce":"vertical","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"/pages/tabBar/API/API","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"接口","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"/pages/tabBar/template/template","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"模版","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"/pages/tabBar/extUI/extUI","meta":{"isQuit":true,"isNVue":true,"isTabBar":true},"window":{"navigationBarTitleText":"扩展组件","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px","color":"#FFFFFF"}]}}},{"path":"/pages/component/view/view","meta":{},"window":{"navigationBarTitleText":"view"}},{"path":"/pages/component/scroll-view/scroll-view","meta":{},"window":{"navigationBarTitleText":"scroll-view"}},{"path":"/pages/component/swiper/swiper","meta":{},"window":{"navigationBarTitleText":"swiper"}},{"path":"/pages/component/cover-view/cover-view","meta":{"isNVue":true},"window":{"navigationBarTitleText":"cover-view"}},{"path":"/pages/component/movable-view/movable-view","meta":{},"window":{"navigationBarTitleText":"movable-view"}},{"path":"/pages/component/text/text","meta":{},"window":{"navigationBarTitleText":"text"}},{"path":"/pages/component/rich-text/rich-text","meta":{},"window":{"navigationBarTitleText":"rich-text"}},{"path":"/pages/component/progress/progress","meta":{},"window":{"navigationBarTitleText":"progress"}},{"path":"/pages/component/button/button","meta":{},"window":{"navigationBarTitleText":"button"}},{"path":"/pages/component/checkbox/checkbox","meta":{},"window":{"navigationBarTitleText":"checkbox"}},{"path":"/pages/component/form/form","meta":{},"window":{"navigationBarTitleText":"form"}},{"path":"/pages/component/input/input","meta":{"isNVue":true},"window":{"navigationBarTitleText":"input","softinputNavBar":"none"}},{"path":"/pages/component/label/label","meta":{},"window":{"navigationBarTitleText":"label"}},{"path":"/pages/component/picker/picker","meta":{},"window":{"navigationBarTitleText":"picker"}},{"path":"/pages/component/picker-view/picker-view","meta":{},"window":{"navigationBarTitleText":"picker-view"}},{"path":"/pages/component/radio/radio","meta":{},"window":{"navigationBarTitleText":"radio"}},{"path":"/pages/component/slider/slider","meta":{},"window":{"navigationBarTitleText":"slider"}},{"path":"/pages/component/switch/switch","meta":{},"window":{"navigationBarTitleText":"switch"}},{"path":"/pages/component/textarea/textarea","meta":{},"window":{"navigationBarTitleText":"textarea"}},{"path":"/pages/component/editor/editor","meta":{},"window":{"navigationBarTitleText":"editor"}},{"path":"/pages/component/navigator/navigator","meta":{},"window":{"navigationBarTitleText":"navigator"}},{"path":"/pages/component/navigator/navigate/navigate","meta":{},"window":{"navigationBarTitleText":"navigatePage"}},{"path":"/pages/component/navigator/redirect/redirect","meta":{},"window":{"navigationBarTitleText":"redirectPage"}},{"path":"/pages/component/image/image","meta":{},"window":{"navigationBarTitleText":"image"}},{"path":"/pages/component/video/video","meta":{"isNVue":true},"window":{"navigationBarTitleText":"video"}},{"path":"/pages/component/audio/audio","meta":{},"window":{"navigationBarTitleText":"audio"}},{"path":"/pages/component/map/map","meta":{"isNVue":true},"window":{"navigationBarTitleText":"map"}},{"path":"/pages/component/canvas/canvas","meta":{},"window":{"navigationBarTitleText":"canvas"}},{"path":"/pages/component/web-view/web-view","meta":{},"window":{"navigationBarTitleText":"web-view"}},{"path":"/pages/component/ad/ad","meta":{},"window":{"navigationBarTitleText":"AD"}},{"path":"/pages/component/web-view-local/web-view-local","meta":{},"window":{}},{"path":"/platforms/app-plus/speech/speech","meta":{},"window":{"navigationBarTitleText":"语音识别"}},{"path":"/platforms/app-plus/orientation/orientation","meta":{},"window":{"navigationBarTitleText":"方向传感器"}},{"path":"/platforms/app-plus/proximity/proximity","meta":{},"window":{"navigationBarTitleText":"距离传感器"}},{"path":"/platforms/app-plus/push/push","meta":{},"window":{"navigationBarTitleText":"推送"}},{"path":"/platforms/app-plus/shake/shake","meta":{},"window":{"navigationBarTitleText":"摇一摇"}},{"path":"/pages/about/about","meta":{},"window":{"navigationBarTitleText":"关于"}},{"path":"/platforms/app-plus/feedback/feedback","meta":{},"window":{"navigationBarTitleText":"问题反馈"}},{"path":"/pages/API/login/login","meta":{},"window":{"navigationBarTitleText":"授权登录"}},{"path":"/pages/API/subnvue/subnvue","meta":{},"window":{"navigationBarTitleText":"原生子窗体","subNVues":[{"id":"drawer","path":"pages/API/subnvue/subnvue/drawer","type":"popup","style":{"width":"50%"}},{"id":"popup","path":"pages/API/subnvue/subnvue/popup","type":"popup","style":{"margin":"auto","width":"80%","height":"600rpx"}},{"id":"video_mask","path":"pages/API/subnvue/subnvue/video-mask","style":{"position":"absolute","bottom":"30px","left":"0","width":"230px","height":"110px","background":"transparent"}}]}},{"path":"/pages/API/get-user-info/get-user-info","meta":{},"window":{"navigationBarTitleText":"获取用户信息"}},{"path":"/pages/API/request-payment/request-payment","meta":{},"window":{"navigationBarTitleText":"发起支付"}},{"path":"/pages/API/share/share","meta":{},"window":{"navigationBarTitleText":"分享"}},{"path":"/pages/API/set-navigation-bar-title/set-navigation-bar-title","meta":{},"window":{"navigationBarTitleText":"设置界面标题"}},{"path":"/pages/API/show-loading/show-loading","meta":{},"window":{"navigationBarTitleText":"加载提示框"}},{"path":"/pages/API/navigator/navigator","meta":{},"window":{"navigationBarTitleText":"页面跳转"}},{"path":"/pages/API/navigator/new-page/new-vue-page-1","meta":{},"window":{"navigationBarTitleText":"新VUE页面1"}},{"path":"/pages/API/navigator/new-page/new-vue-page-2","meta":{},"window":{"navigationBarTitleText":"新VUE页面2"}},{"path":"/pages/API/navigator/new-page/new-nvue-page-1","meta":{"isNVue":true},"window":{"navigationBarTitleText":"新NVUE页面1"}},{"path":"/pages/API/navigator/new-page/new-nvue-page-2","meta":{"isNVue":true},"window":{"navigationBarTitleText":"新NVUE页面2"}},{"path":"/pages/API/pull-down-refresh/pull-down-refresh","meta":{},"window":{"navigationBarTitleText":"下拉刷新","enablePullDownRefresh":true}},{"path":"/pages/API/animation/animation","meta":{},"window":{"navigationBarTitleText":"创建动画"}},{"path":"/pages/API/get-node-info/get-node-info","meta":{},"window":{"navigationBarTitleText":"节点信息"}},{"path":"/pages/API/intersection-observer/intersection-observer","meta":{},"window":{"navigationBarTitleText":"节点布局相交状态"}},{"path":"/pages/API/canvas/canvas","meta":{},"window":{"navigationBarTitleText":"创建绘画"}},{"path":"/pages/API/action-sheet/action-sheet","meta":{},"window":{"navigationBarTitleText":"操作菜单"}},{"path":"/pages/API/modal/modal","meta":{},"window":{"navigationBarTitleText":"模态弹窗"}},{"path":"/pages/API/toast/toast","meta":{},"window":{"navigationBarTitleText":"消息提示框"}},{"path":"/pages/API/get-network-type/get-network-type","meta":{},"window":{"navigationBarTitleText":"获取手机网络状态"}},{"path":"/pages/API/get-system-info/get-system-info","meta":{},"window":{"navigationBarTitleText":"获取手机系统信息"}},{"path":"/pages/API/add-phone-contact/add-phone-contact","meta":{},"window":{"navigationBarTitleText":"添加手机联系人"}},{"path":"/pages/API/on-accelerometer-change/on-accelerometer-change","meta":{},"window":{"navigationBarTitleText":"监听加速度计数据"}},{"path":"/pages/API/on-compass-change/on-compass-change","meta":{},"window":{"navigationBarTitleText":"监听罗盘数据"}},{"path":"/pages/API/make-phone-call/make-phone-call","meta":{},"window":{"navigationBarTitleText":"打电话"}},{"path":"/pages/API/scan-code/scan-code","meta":{},"window":{"navigationBarTitleText":"扫码"}},{"path":"/pages/API/clipboard/clipboard","meta":{},"window":{"navigationBarTitleText":"剪贴板"}},{"path":"/pages/API/request/request","meta":{},"window":{"navigationBarTitleText":"网络请求"}},{"path":"/pages/API/upload-file/upload-file","meta":{},"window":{"navigationBarTitleText":"上传文件"}},{"path":"/pages/API/download-file/download-file","meta":{},"window":{"navigationBarTitleText":"下载文件"}},{"path":"/pages/API/image/image","meta":{},"window":{"navigationBarTitleText":"图片"}},{"path":"/pages/API/voice/voice","meta":{},"window":{"navigationBarTitleText":"录音"}},{"path":"/pages/API/inner-audio/inner-audio","meta":{},"window":{"navigationBarTitleText":"音频"}},{"path":"/pages/API/background-audio/background-audio","meta":{},"window":{"navigationBarTitleText":"背景音频"}},{"path":"/pages/API/video/video","meta":{},"window":{"navigationBarTitleText":"视频"}},{"path":"/pages/API/file/file","meta":{},"window":{"navigationBarTitleText":"文件"}},{"path":"/pages/API/map/map","meta":{"isNVue":true},"window":{"navigationBarTitleText":"map"}},{"path":"/pages/API/map-search/map-search","meta":{"isNVue":true},"window":{"navigationBarTitleText":"map search"}},{"path":"/pages/API/get-location/get-location","meta":{},"window":{"navigationBarTitleText":"获取位置"}},{"path":"/pages/API/open-location/open-location","meta":{},"window":{"navigationBarTitleText":"查看位置"}},{"path":"/pages/API/choose-location/choose-location","meta":{},"window":{"navigationBarTitleText":"使用地图选择位置"}},{"path":"/pages/API/storage/storage","meta":{},"window":{"navigationBarTitleText":"数据存储"}},{"path":"/pages/API/sqlite/sqlite","meta":{},"window":{"navigationBarTitleText":"SQLite"}},{"path":"/pages/API/rewarded-video-ad/rewarded-video-ad","meta":{},"window":{"navigationBarTitleText":"激励视频广告"}},{"path":"/pages/API/brightness/brightness","meta":{},"window":{"navigationBarTitleText":"屏幕亮度"}},{"path":"/pages/API/save-media/save-media","meta":{},"window":{"navigationBarTitleText":"保存媒体到本地"}},{"path":"/pages/API/bluetooth/bluetooth","meta":{},"window":{"navigationBarTitleText":"蓝牙"}},{"path":"/pages/API/soter/soter","meta":{},"window":{"navigationBarTitleText":"生物认证"}},{"path":"/pages/API/ibeacon/ibeacon","meta":{},"window":{"navigationBarTitleText":"iBeacon"}},{"path":"/pages/API/vibrate/vibrate","meta":{},"window":{"navigationBarTitleText":"震动"}},{"path":"/pages/API/websocket-socketTask/websocket-socketTask","meta":{},"window":{"navigationBarTitleText":"websocket-socketTask"}},{"path":"/pages/API/websocket-global/websocket-global","meta":{},"window":{"navigationBarTitleText":"websocket-global"}},{"path":"/pages/extUI/badge/badge","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Badge 数字角标"}},{"path":"/pages/extUI/countdown/countdown","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Countdown 倒计时"}},{"path":"/pages/extUI/drawer/drawer","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Drawer 抽屉","titleNView":{"buttons":[{"text":"","fontSrc":"/static/uni.ttf","fontSize":"22px"}]},"bounce":"none"}},{"path":"/pages/extUI/icons/icons","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Icons 图标"}},{"path":"/pages/extUI/load-more/load-more","meta":{"isNVue":true},"window":{"navigationBarTitleText":"LoadMore 加载更多"}},{"path":"/pages/extUI/nav-bar/nav-bar","meta":{"isNVue":true},"window":{"navigationBarTitleText":"NavBar 导航栏","navigationStyle":"custom","enablePullDownRefresh":true,"titleNView":false,"bounce":"none","pullToRefresh":{"style":"circle","offset":"70px"}}},{"path":"/pages/extUI/number-box/number-box","meta":{"isNVue":true},"window":{"navigationBarTitleText":"NumberBox 数字输入框"}},{"path":"/pages/extUI/popup/popup","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Popup 弹出层","softinputMode":"adjustResize"}},{"path":"/pages/extUI/segmented-control/segmented-control","meta":{"isNVue":true},"window":{"navigationBarTitleText":"SegmentedControl 分段器"}},{"path":"/pages/extUI/tag/tag","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Tag 标签"}},{"path":"/pages/extUI/list/list","meta":{"isNVue":true},"window":{"navigationBarTitleText":"List 列表"}},{"path":"/pages/extUI/card/card","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Card 卡片"}},{"path":"/pages/extUI/collapse/collapse","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Collapse 折叠面板"}},{"path":"/pages/extUI/pagination/pagination","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Pagination 分页器"}},{"path":"/pages/extUI/swiper-dot/swiper-dot","meta":{"isNVue":true},"window":{"navigationBarTitleText":"SwiperDot 轮播图指示点"}},{"path":"/pages/extUI/grid/grid","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Grid 宫格"}},{"path":"/pages/extUI/rate/rate","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Rate 评分"}},{"path":"/pages/extUI/steps/steps","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Steps 步骤条"}},{"path":"/pages/extUI/notice-bar/notice-bar","meta":{"isNVue":true},"window":{"navigationBarTitleText":"NoticeBar 通告栏"}},{"path":"/pages/extUI/swipe-action/swipe-action","meta":{"isNVue":true},"window":{"navigationBarTitleText":"SwipeAction 滑动操作","bounce":"none"}},{"path":"/pages/extUI/search-bar/search-bar","meta":{"isNVue":true},"window":{"navigationBarTitleText":"SearchBar 搜索栏"}},{"path":"/pages/extUI/calendar/calendar","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Calendar 日历"}},{"path":"/pages/extUI/indexed-list/indexed-list","meta":{"isNVue":true},"window":{"navigationBarTitleText":"IndexedList 索引列表","bounce":"none"}},{"path":"/pages/extUI/fab/fab","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Fab 悬浮按钮"}},{"path":"/pages/extUI/fav/fav","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Fav 收藏按钮"}},{"path":"/pages/extUI/goods-nav/goods-nav","meta":{"isNVue":true},"window":{"navigationBarTitleText":"GoodsNav 商品导航"}},{"path":"/pages/extUI/section/section","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Section 章节标题"}},{"path":"/pages/extUI/transition/transition","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Transition 过渡动画"}},{"path":"/pages/extUI/title/title","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Title 章节标题"}},{"path":"/pages/extUI/link/link","meta":{"isNVue":true},"window":{"navigationBarTitleText":"Link 链接"}},{"path":"/pages/extUI/combox/combox","meta":{},"window":{"navigationBarTitleText":"Combox 组合框"}},{"path":"/pages/template/ucharts/ucharts","meta":{},"window":{"navigationBarTitleText":"uCharts 图表"}},{"path":"/pages/template/nav-default/nav-default","meta":{},"window":{"navigationBarTitleText":"默认导航栏"}},{"path":"/pages/template/component-communication/component-communication","meta":{},"window":{"navigationBarTitleText":"组件通讯"}},{"path":"/pages/template/nav-transparent/nav-transparent","meta":{},"window":{"navigationBarTitleText":"透明渐变导航栏","transparentTitle":"auto"}},{"path":"/pages/template/nav-button/nav-button","meta":{},"window":{"navigationBarTitleText":"导航栏带自定义按钮","titleNView":{"buttons":[{"type":"share"},{"type":"favorite"}]}}},{"path":"/pages/template/nav-image/nav-image","meta":{},"window":{"navigationBarBackgroundColor":"#FFFFFF","navigationBarTextStyle":"black","titleImage":"https://img-cdn-qiniu.dcloud.net.cn/static/images/logo1@2x.png"}},{"path":"/pages/template/nav-city-dropdown/nav-city-dropdown","meta":{},"window":{"navigationBarTitleText":"导航栏带城市选择","titleNView":{"buttons":[{"text":"北京市","fontSize":"14","select":true,"width":"auto"}]}}},{"path":"/pages/template/nav-dot/nav-dot","meta":{},"window":{"navigationBarTitleText":"导航栏带红点和角标","titleNView":{"buttons":[{"text":"消息","fontSize":"14","redDot":true},{"text":"关注","fontSize":"14","badgeText":"12"}]}}},{"path":"/pages/template/nav-search-input/nav-search-input","meta":{},"window":{"navigationBarTitleText":"导航栏带搜索框","titleNView":{"type":"transparent","titleColor":"#fff","backgroundColor":"#007AFF","buttons":[{"fontSrc":"/static/uni.ttf","text":"","width":"40px","fontSize":"28px","color":"#fff","background":"rgba(0,0,0,0)"}],"searchInput":{"backgroundColor":"#fff","borderRadius":"6px","placeholder":"请输入地址 如：大钟寺","disabled":true}}}},{"path":"/pages/template/nav-search-input/detail/detail","meta":{},"window":{"navigationBarTitleText":"搜索","titleNView":{"titleColor":"#fff","backgroundColor":"#007AFF","buttons":[{"fontSrc":"/static/uni.ttf","text":"","width":"auto","fontSize":"28px","color":"#fff"}],"searchInput":{"backgroundColor":"#fff","borderRadius":"6px","placeholder":"请输入地址 如：大钟寺","autoFocus":true}}}},{"path":"/pages/template/list2detail-list/list2detail-list","meta":{},"window":{"navigationBarTitleText":"列表到详情示例","enablePullDownRefresh":true}},{"path":"/pages/template/list2detail-detail/list2detail-detail","meta":{},"window":{"navigationBarTitleText":"详情","titleNView":{"type":"transparent","buttons":[{"type":"share"}]}}},{"path":"/pages/template/tabbar/tabbar","meta":{"isNVue":true},"window":{"navigationBarTitleText":"可拖动顶部选项卡"}},{"path":"/pages/template/tabbar/detail/detail","meta":{},"window":{"navigationBarTitleText":"详情页面"}},{"path":"/pages/template/swiper-vertical/swiper-vertical","meta":{"isNVue":true},"window":{"navigationBarTitleText":"上下滑动切换视频","titleNView":false}},{"path":"/pages/template/swiper-list/swiper-list","meta":{"isNVue":true},"window":{"navigationBarTitleText":"swiper-list"}},{"path":"/pages/template/swiper-list-nvue/swiper-list-nvue","meta":{"isNVue":true},"window":{"navigationBarTitleText":"swiper-list"}},{"path":"/pages/template/scheme/scheme","meta":{},"window":{"navigationBarTitleText":"打开外部应用"}},{"path":"/pages/template/vant-button/vant-button","meta":{},"window":{"navigationBarTitleText":"微信自定义组件示例"}},{"path":"/pages/template/global/global","meta":{},"window":{"navigationBarTitleText":"GlobalData和vuex"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
