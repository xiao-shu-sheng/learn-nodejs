--  Active: 1723123294639@@127.0.0.1@3306

# 创建数据库
-- CREATE DATABASE IF NOT EXISTS `teacher`
-- DROP DATABASE IF EXISTS `teacher`


-- CREATE DATABASE IF NOT EXISTS `test`

# 使用数据库
-- USE `test`

-- DESC `user`

-- DROP TABLE IF EXISTS `user`

-- CREATE TABLE `user`(
--     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
--     name VARCHAR(255) COMMENT '名字',
--     age INT COMMENT '年龄',
--     address VARCHAR(255) COMMENT '地址',
--     creat_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间'
-- )COMMENT '用户表'

-- ALTER TABLE `student` RENAME `teacher`

-- ALTER TABLE `user` ADD COLUMN `hobby` VARCHAR(255) COMMENT '爱好'

-- ALTER TABLE `user` ADD COLUMN `hobby2` VARCHAR(255) COMMENT '癖好'

-- ALTER TABLE `user` DROP `hobby2`, DROP `hobby`

-- ALTER TABLE `user` ADD COLUMN `gender` BOOLEAN COMMENT '性别'

-- ALTER TABLE `user` MODIFY `gender` INT COMMENT '性别'

# CREATE TABLE  建表
# NOT NULL 字段不能为空
# INT 字段的类型
# AUTO_INCREMENT 自增
# PRIMARY KEY 设置主键
# TIMESTAMP时间戳
# DEFAULT CURRENT_TIMESTAMP 填充默认值为创建时间
# COMMENT 增加注释
# ALTER 改变 RENAME h换名
# DROP 删除
# MODIFY 修改


-- INSERT INTO `user` (name, age, address, hobby, gender)
-- VALUES
--     ('桔子', 18, '东海蓬莱岛', '阿强', 0),
--     ('阿强', 18, '大荒、成都载天', '桔子', 1)

-- SELECT * from `user`

-- SELECT `hobby` as `special-hobby` FROM `user` WHERE id = 1

-- SELECT * from `user` ORDER BY `id` DESC
# 降序排列

-- SELECT * from `user` WHERE hobby = '人妻' LIMIT 0,3
# LIMIT 限制数从0开始

-- SELECT * from `user` LIMIT 0,3

-- SELECT * from `user` WHERE hobby = '人妻' AND age < 50


-- SELECT * from `user` WHERE hobby LIKE '%妻'
# LIKE 模糊匹配 '%妻'以'妻'结尾的字符， '妻%'以'妻'开头的字符，'%妻%'含'妻'的字符匹配0个或者多个，'%_妻%'下划线代表模糊几个 ，


# 更新
-- UPDATE `user` SET hobby = '阿珍' WHERE name = '阿强'

# 删除

-- DELETE FROM `user` WHERE hobby = '阿强'

-- # 批量删除
-- DELETE FROM `user` WHERE id IN (6, 7, 8)

-- SELECT CONCAT(`name`, '喜欢',`hobby`) as hobby FROM `user` WHERE age < 50

-- SELECT LEFT(name, 1) FROM `user`

-- SELECT AVG(`age`) from `user`

-- SELECT COUNT(*) FROM `user`

-- SELECT max(`age`) from `user`

-- SELECT DATE_ADD(NOW(), INTERVAL 1 DAY) FROM `user` 

-- SELECT DATE_ADD(`creat_time`, INTERVAL 1 DAY) FROM `user` 

-- SELECT DATE_SUB(`creat_time`, INTERVAL 1 DAY) FROM `user` 

-- SELECT  `id`, `name`, `hobby`, IF (gender = 1, '男', '女') as `gender` FROM `user`

-- SELECT * FROM `user` WHERE `age` BETWEEN 16 AND 31

