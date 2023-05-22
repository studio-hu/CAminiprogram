/*
 Navicat Premium Data Transfer

 Source Server         : mysql
 Source Server Type    : MySQL
 Source Server Version : 80025
 Source Host           : localhost:3306
 Source Schema         : ca

 Target Server Type    : MySQL
 Target Server Version : 80025
 File Encoding         : 65001

 Date: 08/05/2023 18:35:11
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for activity
-- ----------------------------
DROP TABLE IF EXISTS `activity`;
CREATE TABLE `activity`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '文章id',
  `title` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '文章标题',
  `profile` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '文章简介',
  `author` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '文章作者',
  `categories` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '文章分类',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '文章主要内容',
  `imgurl` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '封面',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of activity
-- ----------------------------
INSERT INTO `activity` VALUES (3, '哈哈哈哈哈', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (4, 'xixixi', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (5, 'enenen', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (6, 'enenen', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (7, 'enenen', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (8, 'enenen', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (9, 'enenen', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (10, 'enenen', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (11, 'enenen', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (12, 'enenen', '电脑', '萝卜', '知识', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', '哈哈哈哈哈');
INSERT INTO `activity` VALUES (13, 'adfads', 'afads', 'afasdf', 'adfads', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/976542167967837883141214842561400184840.jpg', NULL);
INSERT INTO `activity` VALUES (14, 'adfads', 'afads', 'afasdf', 'adfads', 'fsdafasdfadsf', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/222744167967864876641484777106700816213.jpg');
INSERT INTO `activity` VALUES (15, 'adfads', 'afads', 'afasdf', 'adfads', '# ahasdfhdsakhfsd\r\n##### sdfasdfsdafasdfdfd\r\n###### 六级标题\r\nfahsfasdhfjdsafhdsfdsa\r\n**fasdfsdafasdfdsfsdf**\r\n*asdfdasfdsafsadfsd*\r\n++afasdfdsfdsfdfdsf++\\\r\n1. asfdasfasdfdasf\r\n2. sfddsafdsfsdaf\r\n3. dsfadsfdsfdfd\r\n4. asdfadsfdsafd', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/863700167967872245841558469367700643035.jpg');
INSERT INTO `activity` VALUES (16, 'adf', 'afasd', 'asdfsf', 'asfasdf', '![Grua.jpg](1)', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/524895167967962919642465207760500245175.jpg');
INSERT INTO `activity` VALUES (17, 'adf', 'afasd', 'asdfsf', 'asfasdf', '', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/179444167967969524042531251224200692321.jpg');
INSERT INTO `activity` VALUES (18, 'adf', 'afasd', 'asdfsf', 'asfasdf', '![tupian](https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/384668167549624122019072227696700099856.jpg)', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/725360167967989955942735570346400305404.jpg');
INSERT INTO `activity` VALUES (19, 'adf', 'afasd', 'asdfsf', 'asfasdf', '![](https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/384668167549624122019072227696700099856.jpg)', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/873611167968010747242943483420400491482.jpg');

-- ----------------------------
-- Table structure for image
-- ----------------------------
DROP TABLE IF EXISTS `image`;
CREATE TABLE `image`  (
  `id` int(0) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '图片用处名字',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '图片地址',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of image
-- ----------------------------
INSERT INTO `image` VALUES (2, 'hhhhh', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/064354167975094502229432661977700996839.jpg');
INSERT INTO `image` VALUES (3, 'fsdafsd', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/692558167975198567230473311677100916615.jpg');
INSERT INTO `image` VALUES (4, 'fsdafsd', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230325/647750167975199058930478229361000307595.jpg');

-- ----------------------------
-- Table structure for log
-- ----------------------------
DROP TABLE IF EXISTS `log`;
CREATE TABLE `log`  (
  `id` int(0) NOT NULL COMMENT '文章id',
  `openid` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '微信用户唯一凭证',
  `realname` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户姓名',
  `time` varchar(225) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '题目',
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '主要内容',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '图片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for repairtable
-- ----------------------------
DROP TABLE IF EXISTS `repairtable`;
CREATE TABLE `repairtable`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '订单号',
  `createtime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '订单创建时间',
  `updatetime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '订单完成时间',
  `openid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户唯一标识',
  `realname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户姓名',
  `stunum` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户学号',
  `dormnum` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户宿舍',
  `phone` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户电话',
  `computertype` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户电脑类型',
  `computername` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户电脑信息',
  `reason` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '维修原因',
  `image` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '维修图片',
  `repairid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '维修人员openid',
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '维修人员姓名',
  `state` int(0) DEFAULT 0 COMMENT '维修状态(0是未维修1是已维修)',
  `remark` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '完成订单备注',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of repairtable
-- ----------------------------
INSERT INTO `repairtable` VALUES (12, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230116/34288016738808326061557615227000394173.doc', NULL, NULL, NULL, NULL);
INSERT INTO `repairtable` VALUES (13, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230201/286424167525326102137479030745500740660.doc', NULL, NULL, NULL, NULL);
INSERT INTO `repairtable` VALUES (14, '3.11', '3.11', 'oga1Q5HvTVzCmG4ccZ6dkA3z9sa0', '嗯嗯嗯', '1234', '12345', '12345', '台式', 'ASUS', 'test', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/384668167549624122019072227696700099856.jpg', 'oga1Q5HvTVzCmG4ccZ6dkA3z9sa0', NULL, 1, 'hhhhhh');
INSERT INTO `repairtable` VALUES (15, '3.11', '3.11', 'oga1Q5HvTVzCmG4ccZ6dkA3z9sa0', '嗯嗯嗯', '1234', '12345', '12345', '台式', 'ASUS', 'test', 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/384668167549624122019072227696700099856.jpg', 'oga1Q5HvTVzCmG4ccZ6dkA3z9sa0', NULL, 1, 'hhhhhh');

-- ----------------------------
-- Table structure for superuser
-- ----------------------------
DROP TABLE IF EXISTS `superuser`;
CREATE TABLE `superuser`  (
  `username` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `password` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of superuser
-- ----------------------------
INSERT INTO `superuser` VALUES ('CAStudio', 'ca666');
INSERT INTO `superuser` VALUES ('AllHope', 'AllHope');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` int(0) NOT NULL AUTO_INCREMENT COMMENT '用户id',
  `openid` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户唯一标识',
  `updatetime` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '更新时间',
  `headshot` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '头像',
  `dormnum` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '宿舍号(登陆用户名)',
  `gender` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '性别',
  `repair` int(0) DEFAULT 0 COMMENT '维修者\"0为普通用户1为维修者\"(登录凭证)',
  `nickname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '微信名称',
  `phone` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '电话或者微信ID(登陆密码)',
  `realname` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户名字',
  `stunum` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL COMMENT '用户学号',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 55 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES (33, NULL, NULL, 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230203/65242516753943566044411612625100725816.json', NULL, NULL, 1, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (34, NULL, NULL, 'https://castudio-1312808466.cos.ap-guangzhou.myqcloud.com/CAStudio20230204/240580167552359800346427911121800861816.jpg', 'G221', '1', 1, 'hhh', '137101074123', 'hhhhhhhhh', '2040129217');
INSERT INTO `user` VALUES (35, NULL, 'asfasdf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (36, NULL, 'afdadsf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, '');
INSERT INTO `user` VALUES (37, NULL, 'adfadsfads', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (38, NULL, 'a', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (39, NULL, 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (40, NULL, 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (41, NULL, 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (42, NULL, 'fdas', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (43, NULL, 'adsf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (44, NULL, 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (45, NULL, 'f', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (46, NULL, 'dasf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (47, NULL, 'asdfdsafdsfadsf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (48, NULL, 'afsadd', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (49, NULL, 'a', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (50, NULL, 'fedfdsaf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (51, NULL, 'afdfadfdf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (52, NULL, 'afdf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (53, NULL, 'afadsf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (54, NULL, NULL, NULL, 'dfadsfasf', NULL, 0, NULL, NULL, NULL, NULL);
INSERT INTO `user` VALUES (55, NULL, 'hhhhhhhsidsiiiisssss', 'http://localhost:8090/user/add', 'G201', '1', 1, '大傻逼', '12323562111', '儿子', '204666666');

SET FOREIGN_KEY_CHECKS = 1;
