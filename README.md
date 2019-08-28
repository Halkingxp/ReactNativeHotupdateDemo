# ReactNativeHotupdateDemo
ReactNativeHotupdateDemo


# Window 下打包更新 启动闪退bug 提示找不到index.bundlejs：

原因分析：

因为window下 执行
pushy bundle --platform android
并未在./build/intermedia/android/index.bundlejs 下生成这个文件 导致对比版本差异的时候 没有可更新的内容，但是应用更新完后 从更新之后的目录读取却找不到相应的bundlejs文件 导致应用闪退

解决办法：

修改项目node_modules目录下 react-native-update/local-cli/lib/bundle.js文件
查找 react-native bundle  将多行命令换成一行