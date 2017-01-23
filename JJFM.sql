-- phpMyAdmin SQL Dump
-- version 4.0.10.14
-- http://www.phpmyadmin.net
--
-- 主机: 
-- 生成日期: 2017-01-19 00:39:08
-- 服务器版本: 5.5.50-log
-- PHP 版本: 5.3.29p1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `JJFM`
--

-- --------------------------------------------------------

--
-- 表的结构 `DataInfo`
--

CREATE TABLE IF NOT EXISTS `DataInfo` (
  `ID` int(255) NOT NULL AUTO_INCREMENT COMMENT 'ID',
  `zhuanti` varchar(200) NOT NULL COMMENT '专题名称',
  `KeyWord` varchar(300) NOT NULL COMMENT '关键词',
  `Bg` varchar(500) NOT NULL COMMENT '专题背景地址',
  `Slogo` varchar(500) NOT NULL COMMENT '专题封面',
  `Time` int(20) NOT NULL COMMENT '数据提交时间',
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

--
-- 转存表中的数据 `DataInfo`
--

INSERT INTO `DataInfo` (`ID`, `zhuanti`, `KeyWord`, `Bg`, `Slogo`, `Time`) VALUES
(1, 'LoveLive!第二季', '', 'https://i3.hereacg.com/1/bg.jpg', 'https://i3.hereacg.com/1/logo/slogo.jpg', 1477370818),
(2, '虎与龙/龙虎斗/龙与虎', '', 'https://i3.hereacg.com/2/bg.jpg', 'https://i3.hereacg.com/2/logo/slogo.jpg', 1477457113),
(3, '对魔导学园35试验小队', '', 'https://i3.hereacg.com/3/bg.jpg', 'https://i3.hereacg.com/3/logo/slogo.jpg', 1477459894),
(4, '六花的勇者', '', 'https://i3.hereacg.com/4/bg.png', 'https://i3.hereacg.com/4/logo/slogo.jpg', 1477490737),
(5, '变态王子与不笑猫', '', 'https://i3.hereacg.com/5/bg.jpg', 'https://i3.hereacg.com/5/logo/slogo.jpg', 1477493022),
(6, '青春×机关枪', '', 'https://i3.hereacg.com/6/bg.jpg', 'https://i3.hereacg.com/6/logo/slogo.jpg', 1477546451),
(7, '请问您今天要来点兔子吗？ 第二季', '', 'https://i3.hereacg.com/7/bg.jpg', 'https://i3.hereacg.com/7/logo/slogo.jpg', 1477549316),
(8, '恋爱与选举与巧克力', '', 'https://i3.hereacg.com/8/bg.jpg', 'https://i3.hereacg.com/8/logo/slogo.jpg', 1477728022),
(9, '凉宫春日的忧郁', '', 'https://i3.hereacg.com/9/bg.jpg', 'https://i3.hereacg.com/9/logo/slogo.jpg', 1479778420),
(10, 'CLANNAD', '', 'https://i3.hereacg.com/10/bg.jpg', 'https://i3.hereacg.com/10/logo/slogo.jpg', 1479968399),
(11, '偶像梦幻祭', '', 'https://i3.hereacg.com/11/bg.jpg', 'https://i3.hereacg.com/11/logo/slogo.jpg', 1479983726),
(12, 'Concrete Revolutio 超人幻想', '', 'https://i3.hereacg.com/12/bg.jpg', 'https://i3.hereacg.com/12/logo/slogo.jpg', 1480003468),
(13, '月刊少女野崎君', '', 'https://i3.hereacg.com/13/bg.jpg', 'https://i3.hereacg.com/13/logo/slogo.jpg', 1480004721),
(14, 'ALDNOAH.ZERO（第2期）', '', 'https://i3.hereacg.com/14/bg.jpg', 'https://i3.hereacg.com/14/logo/slogo.jpg', 1480005214),
(15, '月歌。', '', 'https://i3.hereacg.com/15/bg.jpg', 'https://i3.hereacg.com/15/logo/slogo.jpg', 1480059088),
(16, '初音ミク', '', 'https://i3.hereacg.com/16/bg.jpg', 'https://i3.hereacg.com/16/logo/slogo.jpg', 1480313249),
(17, '刀剑神域', '', 'https://i3.hereacg.com/17/bg.jpg', 'https://i3.hereacg.com/17/logo/slogo.jpg', 1480330153),
(18, '黑执事', '', 'https://i3.hereacg.com/18/bg.jpg', 'https://i3.hereacg.com/18/logo/slogo.jpg', 1480345851),
(19, '黑执事II', '', 'https://i3.hereacg.com/19/bg.jpg', 'https://i3.hereacg.com/19/logo/slogo.jpg', 1480346777),
(20, '文豪野犬', '', 'https://i3.hereacg.com/20/bg.jpg', 'https://i3.hereacg.com/20/logo/slogo.jpg', 1480348131),
(21, '文豪野犬 第二季', '', 'https://i3.hereacg.com/21/bg.jpg', 'https://i3.hereacg.com/21/logo/slogo.jpg', 1480349217),
(22, 'Lovelive!', '', 'https://i3.hereacg.com/22/bg.jpg', 'https://i3.hereacg.com/22/logo/slogo.jpg', 1480382096),
(23, '君の名は。', '你的名字。,新海诚,宫水三叶,立花泷', 'https://i3.hereacg.com/23/bg.jpg', 'https://i3.hereacg.com/23/logo/slogo.jpg', 1480748558),
(24, '刀剑乱舞-花丸-', '刀剑乱舞,乙女', 'https://i3.hereacg.com/24/bg.jpg', 'https://i3.hereacg.com/24/logo/slogo.jpg', 1480785248),
(25, '剣が君', '剑为君舞,乙女', 'https://i3.hereacg.com/25/bg.jpg', 'https://i3.hereacg.com/25/logo/slogo.jpg', 1480929185),
(26, 'Brothers Conflict', '兄弟战争,兄弟斗争,兄弟之争,乙女', 'https://i3.hereacg.com/26/bg.jpg', 'https://i3.hereacg.com/26/logo/slogo.jpg', 1481003335),
(27, '高校星歌剧', '', 'https://i3.hereacg.com/27/bg.jpg', 'https://i3.hereacg.com/27/logo/slogo.jpg', 1481551597),
(28, 'Re:从零开始异世界生活', '', 'https://i3.hereacg.com/28/bg.jpg', 'https://i3.hereacg.com/28/logo/slogo.jpg', 1481559389),
(29, '青の祓魔师', '', 'https://i3.hereacg.com/29/bg.jpg', 'https://i3.hereacg.com/29/logo/slogo.jpg', 1481590888),
(30, 'MARGINAL#4', '', 'https://i3.hereacg.com/30/bg.jpg', 'https://i3.hereacg.com/30/logo/slogo.jpg', 1481710561),
(31, '爱·天地无用！', '', 'https://i3.hereacg.com/31/bg.jpg', 'https://i3.hereacg.com/31/logo/slogo.jpg', 1482075225),
(32, '白虎隊 志士異聞記', '白虎隊 志士異聞記,白虎队 志士异文记,白虎隊志士異聞記,白虎队志士异文记', 'https://i3.hereacg.com/32/bg.jpg', 'https://i3.hereacg.com/32/logo/slogo.jpg', 1482120482),
(33, 'Dance with Devils', 'Dance with Devils,与魔共舞', 'https://i3.hereacg.com/33/bg.jpg', 'https://i3.hereacg.com/33/logo/slogo.jpg', 1482248212),
(34, '我太受欢迎了该怎么办', '私がモテてどうすんだ,我太受欢迎了,该怎么办？,我太受欢迎了该怎么办', 'https://i3.hereacg.com/34/bg.jpg', 'https://i3.hereacg.com/34/logo/slogo.jpg', 1482487165),
(35, 'Fate/Grand Order ‐First Order‐', 'Fate/Grand Order,Fate Grand Order,命运-冠位指定,命运冠位指定,命运 冠位指定,', 'http://i3.hereacg.com/35/bg.jpg', 'http://i3.hereacg.com/35/logo/slogo.jpg', 1483267941),
(36, 'SUPER LOVERS', '超級戀人,超级恋人', 'https://i3.hereacg.com/36/bg.jpg', 'https://i3.hereacg.com/36/logo/slogo.jpg', 1484109276),
(37, '神々の悪戯', '众神的恶作剧', 'https://i3.hereacg.com/37/bg.jpeg', 'https://i3.hereacg.com/37/logo/slogo.jpg', 1484499711),
(38, '政宗君的复仇', '政宗くんのリベンジ', 'https://i3.hereacg.com/38/bg.jpg', 'https://i3.hereacg.com/38/logo/slogo.jpg', 1484752025);

-- --------------------------------------------------------

--
-- 表的结构 `MusicList`
--

CREATE TABLE IF NOT EXISTS `MusicList` (
  `ID` int(255) NOT NULL,
  `MusicID` int(255) NOT NULL AUTO_INCREMENT,
  `Title` varchar(200) NOT NULL,
  `AnimeName` varchar(200) NOT NULL,
  `A128` varchar(500) NOT NULL,
  `A320` varchar(500) NOT NULL,
  `WuSun` varchar(500) NOT NULL,
  `highurl` varchar(500) NOT NULL,
  `Top` int(2) DEFAULT '0',
  `ITop` int(255) NOT NULL,
  `Time` int(20) NOT NULL,
  `Status` int(2) NOT NULL DEFAULT '0',
  `KeyWord` varchar(300) NOT NULL,
  `slogo` varchar(500) NOT NULL,
  `Bg` varchar(500) NOT NULL,
  PRIMARY KEY (`MusicID`),
  KEY `MusicID` (`MusicID`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=83 ;

--
-- 转存表中的数据 `MusicList`
--

INSERT INTO `MusicList` (`ID`, `MusicID`, `Title`, `AnimeName`, `A128`, `A320`, `WuSun`, `highurl`, `Top`, `ITop`, `Time`, `Status`, `KeyWord`, `slogo`, `Bg`) VALUES
(1, 1, 'ラブノベルス', 'lovelive!第二季', '', 'https://i6.hereacg.com/1/audio/A320/21155348532.mp3', '', 'http://i5.hereacg.com/1/audio/A320/21155348532.mp3', 1, 0, 1477370818, 2, 'μ''s,ll', 'https://i3.hereacg.com/1/logo/slogo.jpg', 'https://i3.hereacg.com/1/bg.jpg'),
(2, 2, 'Silky Heart', '虎与龙/龙虎斗/龙与虎', '', 'https://i6.hereacg.com/2/audio/A320/0.794052111820342.mp3', '', 'http://i5.hereacg.com/2/audio/A320/0.794052111820342.mp3', 1, 0, 1477457381, 1, '', 'https://i3.hereacg.com/2/logo/slogo.jpg', 'https://i3.hereacg.com/2/bg.jpg'),
(3, 3, 'Embrace Blade', '对魔导学园35试验小队', '', 'https://i6.hereacg.com/3/audio/A320/21135446755.mp3', '', 'http://i5.hereacg.com/3/audio/A320/21135446755.mp3', 1, 1, 1477460271, 1, '', 'https://i3.hereacg.com/3/logo/slogo.jpg', 'https://i3.hereacg.com/3/bg.jpg'),
(3, 4, 'Calling my Twilight', '对魔导学园35试验小队', '', 'https://i6.hereacg.com/3/audio/A320/2113331321421.mp3', '', 'http://i5.hereacg.com/3/audio/A320/2113331321421.mp3', 0, 0, 1477490343, 0, '', 'https://i3.hereacg.com/3/logo/slogo.jpg', 'https://i3.hereacg.com/3/bg.jpg'),
(4, 5, 'Black Swallowtail', '六花的勇者', '', 'https://i6.hereacg.com/4/audio/A320/uroboros - black swallowtail.mp3', '', 'http://i5.hereacg.com/4/audio/A320/uroboros - black swallowtail.mp3', 0, 1, 1477491026, 1, '', 'https://i3.hereacg.com/4/logo/slogo.jpg', 'https://i3.hereacg.com/4/bg.png'),
(4, 6, 'Cry For The truth', '六花的勇者', '', 'https://i6.hereacg.com/4/audio/A320/michi - cry for the truth.mp3', '', 'http://i5.hereacg.com/4/audio/A320/michi - cry for the truth.mp3', 0, 0, 1477491443, 1, '', 'https://i3.hereacg.com/4/logo/slogo.jpg', 'https://i3.hereacg.com/4/bg.png'),
(4, 7, 'Nameless Heart', '六花的勇者', '', 'https://i6.hereacg.com/4/audio/A320/悠木碧 - nameless heart.mp3', '', 'http://i5.hereacg.com/4/audio/A320/悠木碧 - nameless heart.mp3', 0, 1, 1477491777, 0, '', 'https://i3.hereacg.com/4/logo/slogo.jpg', 'https://i3.hereacg.com/4/bg.png'),
(4, 8, 'Dance In The Fake', '六花的勇者', '', 'https://i6.hereacg.com/4/audio/A320/日笠陽子 - dance in the fake.mp3', '', 'http://i5.hereacg.com/4/audio/A320/日笠陽子 - dance in the fake.mp3', 0, 0, 1477492088, 0, '', 'https://i3.hereacg.com/4/logo/slogo.jpg', 'https://i3.hereacg.com/4/bg.png'),
(4, 9, 'Secret Sky', '六花的勇者', '', 'https://i6.hereacg.com/4/audio/A320/michi - secret sky.mp3', '', 'http://i5.hereacg.com/4/audio/A320/michi - secret sky.mp3', 0, 0, 1477492763, 0, '', 'https://i3.hereacg.com/4/logo/slogo.jpg', 'https://i3.hereacg.com/4/bg.png'),
(5, 10, 'Fantastic future', '变态王子与不笑猫', 'https://i6.hereacg.com/5/audio/A128/田村ゆかり - Fantastic Future.mp3', 'https://i6.hereacg.com/5/audio/A320/田村ゆかり - fantastic future.mp3', '', 'http://i5.hereacg.com/5/audio/A320/田村ゆかり - fantastic future.mp3', 1, 0, 1477493658, 1, '', 'https://i3.hereacg.com/5/logo/slogo.jpg', 'https://i3.hereacg.com/5/bg.jpg'),
(5, 11, 'Baby Sweet Berry Love', '变态王子与不笑猫', 'https://i6.hereacg.com/5/audio/A128/小仓唯 - Baby Sweet Berry Love.mp3', 'https://i6.hereacg.com/5/audio/A320/小倉唯 - baby sweet berry love.mp3', '', 'http://i5.hereacg.com/5/audio/A320/小倉唯 - baby sweet berry love.mp3', 1, 1, 1477496454, 0, '', 'https://i3.hereacg.com/5/logo/slogo.jpg', 'https://i3.hereacg.com/5/bg.jpg'),
(6, 12, 'The Bravest Destiny', '青春×机关枪', '', 'https://i6.hereacg.com/6/audio/A320/前野智昭、小松未可子、松岡禎丞 - the bravest destiny.mp3', '', 'http://i5.hereacg.com/6/audio/A320/前野智昭、小松未可子、松岡禎丞 - the bravest destiny.mp3', 1, 0, 1477546553, 1, '', 'https://i3.hereacg.com/6/logo/slogo.jpg', 'https://i3.hereacg.com/6/bg.jpg'),
(6, 13, '群青サバイバル', '青春×机关枪', '', 'https://i6.hereacg.com/6/audio/A320/小松未可子 - 群青サバイバル.mp3', '', 'http://i5.hereacg.com/6/audio/A320/小松未可子 - 群青サバイバル.mp3', 0, 0, 1477546781, 0, '', 'https://i3.hereacg.com/6/logo/slogo.jpg', 'https://i3.hereacg.com/6/bg.jpg'),
(6, 14, 'ロッカー', '青春×机关枪', '', 'https://i6.hereacg.com/6/audio/A320/小松未可子 (こまつ みかこ) - ロッカー (橱柜) (《青春x机关枪》tv动画插曲).mp3', '', 'http://i5.hereacg.com/6/audio/A320/小松未可子 (こまつ みかこ) - ロッカー (橱柜) (《青春x机关枪》tv动画插曲).mp3', 0, 0, 1477548894, 2, '', 'https://i3.hereacg.com/6/logo/slogo.jpg', 'https://i3.hereacg.com/6/bg.jpg'),
(6, 15, 'Trouble shooting', '青春×机关枪', '', 'https://i6.hereacg.com/6/audio/A320/小松未可子 (こまつ みかこ) - trouble shooting (《青春×机关枪》tv动画插曲).mp3', '', 'http://i5.hereacg.com/6/audio/A320/小松未可子 (こまつ みかこ) - trouble shooting (《青春×机关枪》tv动画插曲).mp3', 0, 0, 1477548894, 2, '', 'https://i3.hereacg.com/6/logo/slogo.jpg', 'https://i3.hereacg.com/6/bg.jpg'),
(7, 16, 'ノーポイッ！', '请问您今天要来点兔子吗？ 第二季', '', 'https://i6.hereacg.com/7/audio/A320/佐倉綾音、水瀬いのり、種田梨沙、佐藤聡美、内田真礼 - ノーポイッ!.mp3', '', 'http://i5.hereacg.com/7/audio/A320/佐倉綾音、水瀬いのり、種田梨沙、佐藤聡美、内田真礼 - ノーポイッ!.mp3', 0, 0, 1477549548, 1, '', 'https://i3.hereacg.com/7/logo/slogo.jpg', 'https://i3.hereacg.com/7/bg.jpg'),
(7, 17, 'ときめきポポロン♪', '请问您今天要来点兔子吗？ 第二季', '', 'https://i6.hereacg.com/7/audio/A320/ときめきポポロン.mp3', '', 'http://i5.hereacg.com/7/audio/A320/ときめきポポロン.mp3', 0, 0, 1477549548, 0, '', 'https://i3.hereacg.com/7/logo/slogo.jpg', 'https://i3.hereacg.com/7/bg.jpg'),
(8, 18, 'シグナルグラフ', '恋爱与选举与巧克力', 'https://i6.hereacg.com/8/audio/A128/Annabel - シグナルグラフ.mp3', 'https://i6.hereacg.com/8/audio/A320/Annabel - シグナルグラフ.mp3', 'https://i6.hereacg.com/8/audio/WuSun/Annabel - シグナルグラフ.flac', 'http://i5.hereacg.com/8/audio/A320/Annabel - シグナルグラフ.mp3', 1, 0, 1477729076, 1, '', 'https://i3.hereacg.com/8/logo/slogo.jpg', 'https://i3.hereacg.com/8/bg.jpg'),
(9, 19, 'God knows...', '凉宫春日的忧郁', '', 'https://i6.hereacg.com/9/audio/A320/平野绫 - god knows....mp3', '', 'http://i5.hereacg.com/9/audio/A320/平野绫 - god knows....mp3', 1, 1, 1479778878, 2, '', 'https://i3.hereacg.com/9/logo/slogo.jpg', 'https://i3.hereacg.com/9/bg.jpg'),
(2, 20, 'プレパレ', '虎与龙/龙虎斗/龙与虎', '', 'https://i6.hereacg.com/2/audio/A320/プレパレ.mp3', '', 'http://i5.hereacg.com/2/audio/A320/プレパレ.mp3', 0, 2, 1479957705, 1, '', 'https://i3.hereacg.com/2/logo/slogo.jpg', 'https://i3.hereacg.com/2/bg.jpg'),
(2, 21, 'オレンジ', '虎与龙/龙虎斗/龙与虎', '', 'https://i6.hereacg.com/2/audio/A320/オレンジ.mp3', '', 'http://i5.hereacg.com/2/audio/A320/オレンジ.mp3', 1, 0, 1479957888, 0, '', 'https://i3.hereacg.com/2/logo/slogo.jpg', 'https://i3.hereacg.com/2/bg.jpg'),
(2, 22, 'バニラソルト', '虎与龙/龙虎斗/龙与虎', '', 'https://i6.hereacg.com/2/audio/A320/堀江由衣 - バニラソルト.mp3', 'https://i6.hereacg.com/2/WuSun/堀江由衣 - バニラソルト.flac', 'http://i5.hereacg.com/2/audio/A320/堀江由衣 - バニラソルト.mp3', 1, 0, 1479958574, 0, '', 'https://i3.hereacg.com/2/logo/slogo.jpg', 'https://i3.hereacg.com/2/bg.jpg'),
(10, 23, 'メグメル', 'CLANNAD', 'https://i6.hereacg.com/10/A128/Clannad - メグメル.mp3', 'https://i6.hereacg.com/10/audio/A320/Clannad - メグメル.mp3', 'https://i6.hereacg.com/10/WuSun/Clannad - メグメル.flac', 'http://i5.hereacg.com/10/audio/A320/Clannad - メグメル.mp3', 1, 0, 1479968566, 1, '', 'https://i3.hereacg.com/10/logo/slogo.jpg', 'https://i3.hereacg.com/10/bg.jpg'),
(10, 24, 'だんご大家族', 'CLANNAD', '', 'https://i6.hereacg.com/10/audio/A320/钢琴 - 团子大家族.mp3', '', 'http://i5.hereacg.com/10/audio/A320/钢琴 - 团子大家族.mp3', 0, 0, 1479974336, 3, '', 'https://i3.hereacg.com/10/logo/slogo.jpg', 'https://i3.hereacg.com/10/bg.jpg'),
(10, 25, 'だんご大家族', 'CLANNAD', '', 'https://i6.hereacg.com/10/audio/A320/茶太 - だんご大家族.mp3', '', 'http://i5.hereacg.com/10/audio/A320/茶太 - だんご大家族.mp3', 0, 0, 1479974485, 2, '', 'https://i3.hereacg.com/10/logo/slogo.jpg', 'https://i3.hereacg.com/10/bg.jpg'),
(11, 26, '百花繚乱、紅月夜', '偶像梦幻祭', '', 'https://i6.hereacg.com/11/audio/A320/百花繚乱、紅月夜.mp3', '', 'http://i5.hereacg.com/11/audio/A320/百花繚乱、紅月夜.mp3', 1, 10, 1479983842, 5, '', 'https://i3.hereacg.com/11/logo/slogo.jpg', 'https://i3.hereacg.com/11/bg.jpg'),
(12, 27, 'The Beginning', 'Concrete Revolutio 超人幻想', '', 'https://i6.hereacg.com/12/audio/A320/one ok rock - the beginning.mp3', '', 'http://i5.hereacg.com/12/audio/A320/one ok rock - the beginning.mp3', 1, 0, 1480004093, 0, '', 'https://i3.hereacg.com/12/logo/slogo.jpg', 'https://i3.hereacg.com/12/bg.jpg'),
(12, 28, 'カタラレズトモ', 'Concrete Revolutio 超人幻想', '', 'https://i6.hereacg.com/12/audio/A320/zaq - カタラレズトモ.mp3', '', 'http://i5.hereacg.com/12/audio/A320/zaq - カタラレズトモ.mp3', 0, 0, 1480004278, 1, '', 'https://i3.hereacg.com/12/logo/slogo.jpg', 'https://i3.hereacg.com/12/bg.jpg'),
(13, 29, '君じゃなきゃダメみたい', '月刊少女野崎君', '', 'https://i6.hereacg.com/13/audio/A320/君じゃなきゃダメみたい.mp3', '', 'http://i5.hereacg.com/13/audio/A320/君じゃなきゃダメみたい.mp3', 0, 0, 1480004896, 1, '', 'https://i3.hereacg.com/13/logo/slogo.jpg', 'https://i3.hereacg.com/13/bg.jpg'),
(13, 30, 'ウラオモテ_フォーチュン', '月刊少女野崎君', '', 'https://i6.hereacg.com/13/audio/A320/ウラオモテ_フォーチュン.mp3', '', 'http://i5.hereacg.com/13/audio/A320/ウラオモテ_フォーチュン.mp3', 1, 0, 1480004910, 0, '', 'https://i3.hereacg.com/13/logo/slogo.jpg', 'https://i3.hereacg.com/13/bg.jpg'),
(14, 31, 'aLIEz', 'ALDNOAH.ZERO（第2期）', '', 'https://i6.hereacg.com/14/audio/A320/mizuki - aliez.mp3', '', 'http://i5.hereacg.com/14/audio/A320/mizuki - aliez.mp3', 0, 0, 1480005552, 1, '', 'https://i3.hereacg.com/14/logo/slogo.jpg', 'https://i3.hereacg.com/14/bg.jpg'),
(14, 32, 'A／Z', 'ALDNOAH.ZERO（第2期）', '', 'https://i6.hereacg.com/14/audio/A320/A／Z.mp3', '', 'http://i5.hereacg.com/14/audio/A320/A／Z.mp3', 1, 0, 1480005564, 0, '', 'https://i3.hereacg.com/14/logo/slogo.jpg', 'https://i3.hereacg.com/14/bg.jpg'),
(11, 33, 'Fight for Judge', '偶像梦幻祭', 'https://i6.hereacg.com/11/audio/A128/Fight for Judge.mp3', '', '', 'http://i5.hereacg.com/11/audio/A128/Fight for Judge.mp3', 1, 2, 1480040794, 5, '', 'https://i3.hereacg.com/11/logo/slogo.jpg', 'https://i3.hereacg.com/11/bg.jpg'),
(11, 34, 'Silent Oath', '偶像梦幻祭', 'https://i6.hereacg.com/11/audio/A128/Silent Oath.mp3', '', '', 'http://i5.hereacg.com/11/audio/A128/Silent Oath.mp3', 1, 17, 1480040803, 5, '', 'https://i3.hereacg.com/11/logo/slogo.jpg', 'https://i3.hereacg.com/11/bg.jpg'),
(11, 35, 'ONLY YOUR STARS - OFF VOCAL-', '偶像梦幻祭', '', 'https://i6.hereacg.com/11/audio/A320/V.A. - ONLY YOUR STARS - OFF VOCAL-.mp3', '', 'http://i5.hereacg.com/11/audio/A320/V.A. - ONLY YOUR STARS - OFF VOCAL-.mp3', 1, 1, 1480052295, 5, '', 'https://i3.hereacg.com/11/logo/slogo.jpg', 'https://i3.hereacg.com/11/bg.jpg'),
(15, 36, 'GRAVITIC-LOVE', '月歌。', '', 'https://i6.hereacg.com/15/audio/A320/GRAVITIC-LOVE.mp3', '', 'http://i5.hereacg.com/15/audio/A320/GRAVITIC-LOVE.mp3', 1, 0, 1480059513, 2, '', 'https://i3.hereacg.com/15/logo/slogo.jpg', 'https://i3.hereacg.com/15/bg.jpg'),
(15, 37, 'LOLV -Lots of Love-', '月歌。', '', 'https://i6.hereacg.com/15/audio/A320/LOLV -Lots of Love-.mp3', '', 'http://i5.hereacg.com/15/audio/A320/LOLV -Lots of Love-.mp3', 1, 0, 1480059520, 2, '', 'https://i3.hereacg.com/15/logo/slogo.jpg', 'https://i3.hereacg.com/15/bg.jpg'),
(16, 38, 'ストロボナイツ', '初音ミク', '', 'https://i6.hereacg.com/16/audio/A320/初音ミク - ストロボナイツ.mp3', 'https://i6.hereacg.com/16/audio/WuSun/初音ミク - ストロボナイツ.flac', 'http://i5.hereacg.com/16/audio/A320/初音ミク - ストロボナイツ.mp3', 1, 0, 1480322300, 5, '', 'https://i3.hereacg.com/16/logo/slogo.jpg', 'https://i3.hereacg.com/16/bg.jpg'),
(16, 39, 'モノクロアクト', '初音ミク', '', 'https://i6.hereacg.com/16/audio/A320/doriko - モノクロアクト.mp3', 'https://i6.hereacg.com/16/audio/WuSun/doriko - モノクロアクト.flac', 'http://i5.hereacg.com/16/audio/A320/doriko - モノクロアクト.mp3', 1, 0, 1480327767, 5, '', 'https://i3.hereacg.com/16/logo/slogo.jpg', 'https://i3.hereacg.com/16/bg.jpg'),
(17, 40, 'Crossing Field', '刀剑神域', '', 'https://i6.hereacg.com/17/audio/A320/LiSA - crossing field.mp3', 'https://i6.hereacg.com/17/audio/WuSun/LiSA - crossing field.flac', 'http://i5.hereacg.com/17/audio/A320/LiSA - crossing field.mp3', 1, 1, 1480330763, 1, '', 'https://i3.hereacg.com/17/logo/slogo.jpg', 'https://i3.hereacg.com/17/bg.jpg'),
(17, 41, 'ユメセカイ', '刀剑神域', '', 'https://i6.hereacg.com/17/audio/A320/戸松遥 - ユメセカイ.mp3', '', 'http://i5.hereacg.com/17/audio/A320/戸松遥 - ユメセカイ.mp3', 0, 2, 1480344068, 0, '', 'https://i3.hereacg.com/17/logo/slogo.jpg', 'https://i3.hereacg.com/17/bg.jpg'),
(18, 42, 'モノクロのキス', '黑执事', '', 'https://i6.hereacg.com/18/audio/A320/シド - モノクロのキス.mp3', '', 'http://i5.hereacg.com/18/audio/A320/シド - モノクロのキス.mp3', 1, 3, 1480346196, 1, '', 'https://i3.hereacg.com/18/logo/slogo.jpg', 'https://i3.hereacg.com/18/bg.jpg'),
(18, 43, 'I''m ALIVE!', '黑执事', '', 'https://i6.hereacg.com/18/audio/A320/I m ALIVE!.mp3', '', 'http://i5.hereacg.com/18/audio/A320/I m ALIVE!.mp3', 0, 1, 1480346409, 0, '', 'https://i3.hereacg.com/18/logo/slogo.jpg', 'https://i3.hereacg.com/18/bg.jpg'),
(19, 44, 'Bird', '黑执事II', '', 'https://i6.hereacg.com/19/audio/A320/Bird.mp3', '', 'http://i5.hereacg.com/19/audio/A320/Bird.mp3', 1, 1, 1480346960, 1, '', 'https://i3.hereacg.com/19/logo/slogo.jpg', 'https://i3.hereacg.com/19/bg.jpg'),
(18, 45, 'Lacrimosa', '黑执事', '', 'https://i6.hereacg.com/18/audio/A320/Kalafina - Lacrimosa.mp3', '', 'http://i5.hereacg.com/18/audio/A320/Kalafina - Lacrimosa.mp3', 1, 1, 1480347250, 0, '', 'https://i3.hereacg.com/18/logo/slogo.jpg', 'https://i3.hereacg.com/18/bg.jpg'),
(18, 46, '月の雨', '黑执事', '', 'https://i6.hereacg.com/18/audio/A320/小野大輔 - 月の雨.mp3', '', 'http://i5.hereacg.com/18/audio/A320/小野大輔 - 月の雨.mp3', 0, 1, 1480347372, 4, '', 'https://i3.hereacg.com/18/logo/slogo.jpg', 'https://i3.hereacg.com/18/bg.jpg'),
(20, 47, 'TRASH CANDY', '文豪野犬', '', 'https://i6.hereacg.com/20/audio/A320/GRANRODEO - TRASH CANDY.mp3', 'https://i6.hereacg.com/20/audio/WuSun/GRANRODEO - TRASH CANDY.flac', 'http://i5.hereacg.com/20/audio/A320/GRANRODEO - TRASH CANDY.mp3', 0, 0, 1480348761, 1, '', 'https://i3.hereacg.com/20/logo/slogo.jpg', 'https://i3.hereacg.com/20/bg.jpg'),
(20, 48, '名前を呼ぶよ', '文豪野犬', '', 'https://i6.hereacg.com/20/audio/A320/ラックライフ - 名前を呼ぶよ.mp3', 'https://i6.hereacg.com/20/audio/WuSun/ラックライフ - 名前を呼ぶよ.flac', 'http://i5.hereacg.com/20/audio/A320/ラックライフ - 名前を呼ぶよ.mp3', 0, 0, 1480348988, 0, '', 'https://i3.hereacg.com/20/logo/slogo.jpg', 'https://i3.hereacg.com/20/bg.jpg'),
(21, 49, 'Reason Living', '文豪野犬 第二季', '', 'https://i6.hereacg.com/21/audio/A320/SCREEN mode - Reason Living.mp3', '', 'http://i5.hereacg.com/21/audio/A320/SCREEN mode - Reason Living.mp3', 0, 0, 1480349428, 1, '', 'https://i3.hereacg.com/21/logo/slogo.jpg', 'https://i3.hereacg.com/21/bg.jpg'),
(21, 50, '風が吹く街', '文豪野犬 第二季', '', 'https://i6.hereacg.com/21/audio/A320/ラックライフ - 風が吹く街.mp3', '', 'http://i5.hereacg.com/21/audio/A320/ラックライフ - 風が吹く街.mp3', 0, 0, 1480349497, 0, '', 'https://i3.hereacg.com/21/logo/slogo.jpg', 'https://i3.hereacg.com/21/bg.jpg'),
(22, 51, 'START:DASH!!', 'Lovelive!', '', 'https://i6.hereacg.com/22/audio/A320/START DASH!!.mp3', 'https://i6.hereacg.com/22/audio/WuSun/START DASH!!.flac', 'http://i5.hereacg.com/22/audio/A320/START DASH!!.mp3', 1, 0, 1480382426, 2, 'μ''s,ll', 'https://i3.hereacg.com/22/logo/slogo.jpg', 'https://i3.hereacg.com/22/bg.jpg'),
(23, 52, '前前前世(movie ver.)', '君の名は。', '', 'https://i6.hereacg.com/23/audio/A320/RADWIMPS - 前前前世 (movie ver.).mp3', 'https://i6.hereacg.com/23/audio/WuSun/RADWIMPS - 前前前世 (movie ver.).flac', 'http://i5.hereacg.com/23/audio/A320/RADWIMPS - 前前前世 (movie ver.).mp3', 1, 3, 1480749574, 1, '你的名字。,新海诚,宫水三叶,立花泷', 'https://i3.hereacg.com/23/logo/slogo.jpg', 'https://i3.hereacg.com/23/bg.jpg'),
(23, 53, 'なんでもないや (movie ver.)', '君の名は。', '', 'https://i6.hereacg.com/23/audio/A320/83e95034593c21d840ba2bb513a90632d636d4d61ed269c9301356271c0f56ab.mp3', 'https://i6.hereacg.com/23/audio/SQ/b8fc8c5ee8384a27891aad6851b1184375ad4975fa04324e6f8bff4c4e4695f7.flac', 'http://i5.hereacg.com/23/audio/A320/83e95034593c21d840ba2bb513a90632d636d4d61ed269c9301356271c0f56ab.mp3', 1, 2, 1480768402, 0, '你的名字。,新海诚,宫水三叶,立花泷', 'https://i3.hereacg.com/23/logo/slogo.jpg', 'https://i3.hereacg.com/23/bg.jpg'),
(24, 54, '恋と浄土の八重桜', '刀剑乱舞-花丸-', '', 'https://i6.hereacg.com/24/A320/d1668be0794af294dd994af458c9478197c522bd5cd5efd1acc0b65f6fe57a91.mp3', '', 'http://i5.hereacg.com/24/A320/d1668be0794af294dd994af458c9478197c522bd5cd5efd1acc0b65f6fe57a91.mp3', 1, 1, 1480785895, 0, '刀剑乱舞,乙女', 'https://i3.hereacg.com/24/logo/slogo.jpg', 'https://i3.hereacg.com/24/bg.jpg'),
(25, 55, '鼓動', '剣が君', '', 'https://i6.hereacg.com/25/A320/ee60fb6af5069059631791d23d6b801330953705.mp3', '', 'http://i5.hereacg.com/25/A320/ee60fb6af5069059631791d23d6b801330953705.mp3', 1, 4, 1480930082, 5, '剑为君舞,乙女', 'https://i3.hereacg.com/25/logo/slogo.jpg', 'https://i3.hereacg.com/25/bg.jpg'),
(26, 56, 'オ・ト・ナ BREAKOUT', 'Brothers Conflict', '', 'https://i6.hereacg.com/26/A320/bd4edd8a1ab69f5c8d4afa4eff2adfd481bfe28a.mp3', '', 'http://i5.hereacg.com/26/A320/bd4edd8a1ab69f5c8d4afa4eff2adfd481bfe28a.mp3', 1, 8, 1481004398, 5, '兄弟战争,兄弟斗争,兄弟之争,乙女', 'https://i3.hereacg.com/26/logo/slogo.jpg', 'https://i3.hereacg.com/26/bg.jpg'),
(26, 57, 'I LOVE YOUが聞こえない', 'Brothers Conflict', '', 'https://i6.hereacg.com/26/A320/9e69e4609483ca02320687e3d2f1085c94572a664a82bf63325d9e4269a07999.mp3', '', 'http://i5.hereacg.com/26/A320/9e69e4609483ca02320687e3d2f1085c94572a664a82bf63325d9e4269a07999.mp3', 1, 2, 1481299427, 5, '兄弟战争,兄弟斗争,兄弟之争,乙女', 'https://i3.hereacg.com/26/logo/slogo.jpg', 'https://i3.hereacg.com/26/bg.jpg'),
(26, 58, 'BELOVED×SURVIVAL', 'Brothers Conflict', '', 'https://i6.hereacg.com/26/A320/fea8a3776b98aa3c1bda95726e3e58c1cfc553b1d7400bc53e32345898be83de.mp3', '', 'http://i5.hereacg.com/26/A320/fea8a3776b98aa3c1bda95726e3e58c1cfc553b1d7400bc53e32345898be83de.mp3', 0, 0, 1481299647, 1, '兄弟战争,兄弟斗争,兄弟之争,乙女', 'https://i3.hereacg.com/26/logo/slogo.jpg', 'https://i3.hereacg.com/26/bg.jpg'),
(22, 59, '輝夜の城で踊りたい', 'Lovelive!', '', 'https://i6.hereacg.com/22/A320/1ffdd2094d15b59d2995a9cb9a74029e166f0dac716e40f54f877c8c9714487e.mp3', 'https://i6.hereacg.com/22/SQ/8c05f7f24d9e248abe462991e62f80bc0e5b353bba656f70063f2f91c1732964.flac', 'http://i5.hereacg.com/22/A320/1ffdd2094d15b59d2995a9cb9a74029e166f0dac716e40f54f877c8c9714487e.mp3', 1, 0, 1481300569, 2, '', 'https://i3.hereacg.com/22/logo/slogo.jpg', 'https://i3.hereacg.com/22/bg.jpg'),
(16, 60, 'Gravity Rain', '初音ミク', '', 'https://i6.hereacg.com/16/A320/56180087c5be962fe0b616d160b585e911119a41973ad6660105ab595a4e5c2a.mp3', '', 'http://i5.hereacg.com/16/A320/56180087c5be962fe0b616d160b585e911119a41973ad6660105ab595a4e5c2a.mp3', 0, 0, 1481310731, 5, '', 'https://i3.hereacg.com/16/logo/slogo.jpg', 'https://i3.hereacg.com/16/bg.jpg'),
(27, 61, '我ら、綾薙学園華桜会', '高校星歌剧', '', 'https://i6.hereacg.com/27/A320/44a8108247de96081d3070dcfe3d51fb6e6ec6f9fc0f9c7da0d8f0acafd08926.mp3', '', 'http://i5.hereacg.com/27/A320/44a8108247de96081d3070dcfe3d51fb6e6ec6f9fc0f9c7da0d8f0acafd08926.mp3', 1, 1, 1481552515, 5, '', 'https://i3.hereacg.com/27/logo/slogo.jpg', 'https://i3.hereacg.com/27/bg.jpg'),
(27, 62, '天下の花', '高校星歌剧', '', 'https://i6.hereacg.com/27/A320/7fff1fb4931569243d61c8007feded8bb85aad1f4e1d5a8d732c34350c94cc80.mp3', '', 'http://i5.hereacg.com/27/A320/7fff1fb4931569243d61c8007feded8bb85aad1f4e1d5a8d732c34350c94cc80.mp3', 1, 0, 1481553017, 5, '', 'https://i3.hereacg.com/27/logo/slogo.jpg', 'https://i3.hereacg.com/27/bg.jpg'),
(27, 63, 'Limited sky', '高校星歌剧', '', 'https://i6.hereacg.com/27/A320/dd38312f48c5ecdead5966948ded47c5a84a3555d4c91aa31cf62c934183d362.mp3', '', 'http://i5.hereacg.com/27/A320/dd38312f48c5ecdead5966948ded47c5a84a3555d4c91aa31cf62c934183d362.mp3', 1, 8, 1481553212, 5, '', 'https://i3.hereacg.com/27/logo/slogo.jpg', 'https://i3.hereacg.com/27/bg.jpg'),
(27, 64, '星瞬COUNTDOWN', '高校星歌剧', '', 'https://i6.hereacg.com/27/A320/89e608201901c6b2c6a782460f8ae96794a50e62decc09edb6001ecdbdf903dc.mp3', '', 'http://i5.hereacg.com/27/A320/89e608201901c6b2c6a782460f8ae96794a50e62decc09edb6001ecdbdf903dc.mp3', 1, 1, 1481553524, 0, '', 'https://i3.hereacg.com/27/logo/slogo.jpg', 'https://i3.hereacg.com/27/bg.jpg'),
(27, 65, 'DREAMER', '高校星歌剧', '', 'https://i6.hereacg.com/27/A320/362ea5353a3f99ee7d97f5b366ccd1737e59225db8c45fba3f7274bbbef7329f.mp3', '', 'http://i5.hereacg.com/27/A320/362ea5353a3f99ee7d97f5b366ccd1737e59225db8c45fba3f7274bbbef7329f.mp3', 1, 3, 1481553680, 1, '', 'https://i3.hereacg.com/27/logo/slogo.jpg', 'https://i3.hereacg.com/27/bg.jpg'),
(28, 66, 'STYX HELIX', 'Re:从零开始异世界生活', '', 'https://i6.hereacg.com/28/A320/cb5bb4e8ae9b8e387647333693c454f347fbebb6b385455a683d2cc29b5f84d3.mp3', 'https://i6.hereacg.com/28/SQ/6d6b0d320f6b38a59e1b869964483017d1b7595677f996a9b3095e2d75306634.flac', 'http://i5.hereacg.com/28/A320/cb5bb4e8ae9b8e387647333693c454f347fbebb6b385455a683d2cc29b5f84d3.mp3', 1, 1, 1481559842, 0, '', 'https://i3.hereacg.com/28/logo/slogo.jpg', 'https://i3.hereacg.com/28/bg.jpg'),
(29, 67, 'IN MY WORLD', '青の祓魔师', '', 'https://i6.hereacg.com/29/A320/a957fff15456432c4e17ef96579e5f8de3d10d56a9839644856049ad8f30dc09.mp3', '', 'http://i5.hereacg.com/29/A320/a957fff15456432c4e17ef96579e5f8de3d10d56a9839644856049ad8f30dc09.mp3', 0, 0, 1481591614, 1, '', 'https://i3.hereacg.com/29/logo/slogo.jpg', 'https://i3.hereacg.com/29/bg.jpg'),
(29, 68, 'Take off', '青の祓魔师', '', 'https://i6.hereacg.com/29/A320/cc55be039f810f959797c4c6db16d85c77f72ed08cdd841599985ff764704393.mp3', '', 'http://i5.hereacg.com/29/A320/cc55be039f810f959797c4c6db16d85c77f72ed08cdd841599985ff764704393.mp3', 0, 0, 1481591701, 0, '', 'https://i3.hereacg.com/29/logo/slogo.jpg', 'https://i3.hereacg.com/29/bg.jpg'),
(30, 69, 'Missing you (2014)', 'MARGINAL#4', '', 'https://i6.hereacg.com/30/A320/6dc1609f0d68193735d1a4fa4bd7c5c72de3218192146f088e863ec64b3231bc.mp3', '', 'http://i5.hereacg.com/30/A320/6dc1609f0d68193735d1a4fa4bd7c5c72de3218192146f088e863ec64b3231bc.mp3', 1, 1, 1481772500, 5, '', 'https://i3.hereacg.com/30/logo/slogo.jpg', 'https://i3.hereacg.com/30/bg.jpg'),
(31, 70, 'キミと見た花 キミと見た空 -full ver.-', '爱·天地无用！', '', 'https://i6.hereacg.com/31/A320/ef82e55c69249edf695a9445b10bc4baecbac37b18fbeed6d4b402539d5d18c0.mp3', '', 'http://i5.hereacg.com/31/A320/ef82e55c69249edf695a9445b10bc4baecbac37b18fbeed6d4b402539d5d18c0.mp3', 1, 1, 1482075823, 5, '', 'https://i3.hereacg.com/31/logo/slogo.jpg', 'https://i3.hereacg.com/31/bg.jpg'),
(32, 71, '桜華、散リ往ク頃', '白虎隊 志士異聞記', '', 'https://i6.hereacg.com/32/A320/a8a2ccf6312bb671d0cf88106f0769713e777f16431e7a91a4ec24596b6c4b6f.mp3', '', 'http://i5.hereacg.com/32/A320/a8a2ccf6312bb671d0cf88106f0769713e777f16431e7a91a4ec24596b6c4b6f.mp3', 1, 4, 1482122505, 5, '白虎隊 志士異聞記,白虎队 志士异文记,白虎隊志士異聞記,白虎队志士异文记,立花慎之介,森久保祥太郎,谷山紀章', 'https://i3.hereacg.com/32/logo/slogo.jpg', 'https://i3.hereacg.com/32/bg.jpg'),
(33, 72, 'マドモ★アゼル', 'Dance with Devils', '', 'https://i6.hereacg.com/33/A320/2fa179cc8da58604251ffc44102ff6d2af2f6047b661d942dace80c181074d90.mp3', '', 'http://i5.hereacg.com/33/A320/2fa179cc8da58604251ffc44102ff6d2af2f6047b661d942dace80c181074d90.mp3', 1, 0, 1482248320, 1, 'Dance with Devils,与魔共舞', 'https://i3.hereacg.com/33/logo/slogo.jpg', 'https://i3.hereacg.com/33/bg.jpg'),
(33, 73, '革命前夜 -The Eve of the Revolution-', 'Dance with Devils', '', 'https://i6.hereacg.com/33/A320/ebb488552d037875e258ffa1a14b172c0287261b053f9efa8160f57b4079397e.mp3', '', 'http://i5.hereacg.com/33/A320/ebb488552d037875e258ffa1a14b172c0287261b053f9efa8160f57b4079397e.mp3', 1, 0, 1482248571, 5, 'Dance with Devils,与魔共舞', 'https://i3.hereacg.com/33/logo/slogo.jpg', 'https://i3.hereacg.com/33/bg.jpg'),
(30, 74, '恋のAKQJ10(ロイヤルフラッシュ)！', 'MARGINAL#4', '', 'https://i6.hereacg.com/30/A320/cde024b33b25579e8df382d20664d11842e31dfdd9e95aaa1f8484c119babe3f.mp3', '', 'http://i5.hereacg.com/30/A320/cde024b33b25579e8df382d20664d11842e31dfdd9e95aaa1f8484c119babe3f.mp3', 1, 0, 1482414922, 5, '', 'https://i3.hereacg.com/30/logo/slogo.jpg', 'https://i3.hereacg.com/30/bg.jpg'),
(34, 75, 'Prince×Prince', '我太受欢迎了该怎么办', '', 'https://i6.hereacg.com/34/A320/ffbb9d31235f5c94202ebf3ac6d8b8c21b389c5982c11da917d8743b9d295d2c.mp3', '', 'http://i5.hereacg.com/34/A320/ffbb9d31235f5c94202ebf3ac6d8b8c21b389c5982c11da917d8743b9d295d2c.mp3', 1, 0, 1482487239, 1, '私がモテてどうすんだ,我太受欢迎了,该怎么办？,我太受欢迎了该怎么办', 'https://i3.hereacg.com/34/logo/slogo.jpg', 'https://i3.hereacg.com/34/bg.jpg'),
(34, 76, 'ドキドキの風', '我太受欢迎了该怎么办', '', 'https://i6.hereacg.com/34/A320/9219744522d685b09243f14f43bf95a265a1c07eff4f6463ee5183a4a514d147.mp3', '', 'http://i5.hereacg.com/34/A320/9219744522d685b09243f14f43bf95a265a1c07eff4f6463ee5183a4a514d147.mp3', 0, 1, 1482487390, 0, '私がモテてどうすんだ,我太受欢迎了,该怎么办？,我太受欢迎了该怎么办', 'https://i3.hereacg.com/34/logo/slogo.jpg', 'https://i3.hereacg.com/34/bg.jpg'),
(2, 77, 'ホーリーナイト', '虎与龙/龙虎斗/龙与虎', '', 'https://i6.hereacg.com/2/A320/6f079d34a3365a810f2882200bef22bee2d3a594bf24010393944893d6bba34b.mp3', '', 'http://i5.hereacg.com/2/A320/6f079d34a3365a810f2882200bef22bee2d3a594bf24010393944893d6bba34b.mp3', 1, 1, 1482585626, 2, '', 'https://i3.hereacg.com/2/logo/slogo.jpg', 'https://i3.hereacg.com/2/bg.jpg'),
(35, 78, '色彩', 'Fate/Grand Order ‐First Order‐', '', 'https://i6.hereacg.com/35/A320/f787b7d6cb04b75608aebf17354cff9b1e632d5004fabe7e669c6ebc05c3e900.mp3', 'https://i6.hereacg.com/35/SQ/b33a449a685851d1f4b960cf3f4be80071348d4d05430a034837ee50be564de7.flac', 'http://i5.hereacg.com/35/A320/f787b7d6cb04b75608aebf17354cff9b1e632d5004fabe7e669c6ebc05c3e900.mp3', 1, 1, 1483268159, 5, 'Fate/Grand Order,Fate Grand Order,命运-冠位指定,命运冠位指定,命运 冠位指定,', 'http://i3.hereacg.com/35/logo/slogo.jpg', 'http://i3.hereacg.com/35/bg.jpg'),
(36, 79, 'おかえり。', 'SUPER LOVERS', 'https://i6.hereacg.com/36/A128/c3be448cd5e7a324273821de446f36a9e52b5871f0184db1e62e719f77a82717.mp3', '', '', 'http://i5.hereacg.com/36/A128/c3be448cd5e7a324273821de446f36a9e52b5871f0184db1e62e719f77a82717.mp3', 1, 1, 1484109699, 1, '超級戀人,超级恋人', 'https://i3.hereacg.com/36/logo/slogo.jpg', 'https://i3.hereacg.com/36/bg.jpg'),
(36, 80, 'ハピネスYOU&ME', 'SUPER LOVERS', 'https://i6.hereacg.com/36/A128/620772327375e8d34a1ab14078b331948ff53e70be7a313ad54acf352b096596.mp3', '', '', 'http://i5.hereacg.com/36/A128/620772327375e8d34a1ab14078b331948ff53e70be7a313ad54acf352b096596.mp3', 1, 3, 1484109824, 0, '超級戀人,超级恋人', 'https://i3.hereacg.com/36/logo/slogo.jpg', 'https://i3.hereacg.com/36/bg.jpg'),
(37, 81, '日本神話「月と凪」', '神々の悪戯', '', 'https://i6.hereacg.com/37/A320/42ee84325fb00d6fb0b85866fbf45ea38337b7fec284b73a549cbf8e9ce1da30.mp3', '', 'http://i5.hereacg.com/37/A320/42ee84325fb00d6fb0b85866fbf45ea38337b7fec284b73a549cbf8e9ce1da30.mp3', 1, 1, 1484499926, 4, '众神的恶作剧', 'https://i3.hereacg.com/37/logo/slogo.jpg', 'https://i3.hereacg.com/37/bg.jpeg'),
(38, 82, 'ワガママMIRROR HEART', '政宗君的复仇', '', 'https://i6.hereacg.com/38/A320/68ebce8acd5e32743ca3eacad1a2bc21deda47b8b3962dc8ca3be9fa786b1461.mp3', '', 'http://i5.hereacg.com/38/A320/68ebce8acd5e32743ca3eacad1a2bc21deda47b8b3962dc8ca3be9fa786b1461.mp3', 1, 0, 1484752207, 1, '政宗くんのリベンジ', 'https://i3.hereacg.com/38/logo/slogo.jpg', 'https://i3.hereacg.com/38/bg.jpg');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
