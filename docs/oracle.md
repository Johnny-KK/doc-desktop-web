# Oracle

## 导入数据库

```shell
# 以管理员身份登录
sqlplus sys/power@orcl AS SYSDBA

# 新建表空间
create tablespace <tablespace-name> datafile <file-path> size 300M autoextend on;
Create tablespace pma datafile 'D:\oracle\product\10.2.0\oradata\pma\pma.DBF' size 300M autoextend on;

# 查看表空间
select tablespace_name from dba_tablespaces;

# 新建用户
Create user <user-name> identified by <password> default tablespace <tablespace-name> temporary tablespace TEMP;
Create user pma identified by pma default tablespace pma temporary tablespace TEMP;

# 授DBA权限
grant dba to <user-name>;
grant dba to pma;

# 授予用户无限制表空间分配空间
alter user <user-name> quota unlimited on <tablespace-name>;
alter user pma quota unlimited on pma;

# 导入数据库文件--imp方式
imp pma/pma@ORCL FILE=E:\pma\IMP_REMOTE_20190920.dmp fromuser=imp touser=pma LOG=E:\pma\imp20190923.log IGNORE=y

# 导入数据库文件--impdp方式
impdp pma/pma@ORCL REMAP_SCHEMA=imp:pma directory=DATA_PUMP_DIR dumpfile=IMP_20190923.DMP logfile=imp_pma_20190923.log exclude=table_statistics
# 其中directory使用一下命令查询
selec * FROM dba_directories
```

## 待整理

--/导入数据库之前建立表空间 
create tablespace 表空间名
datafile 'D:\app\Administrator\product\11.2.0\dbhome_1\oradata\名称.dbf' size 1000M
autoextend on next 500M maxsize unlimited logging   
extent management local autoallocate
segment space management auto;

--/导入数据库之前建立对应的用户
create user 用户名              --创建用户名
identified by 密码          --创建密码
default tablespace 表空间名      --默认表空间
temporary tablespace 临时表空间名     --临时表空间（默认的temp）

--/用户名赋权
grant connect,resource,dba to 用户名;  

--/创建转储目录
create or replace directory dpdata as 'D:\oracledata';  
grant read, write on directory dpdata to xnhd; 	

--查看转储目录
select * from dba_directories;

--/导出语句、若导入低版本必须加vision参数
expdp 用户名/密码@数据库名 directory=dpdata dumpfile=20190501.dmp logfile=20190501log.log

--/导入语句
impdp 用户名/密码@数据库名 REMAP_SCHEMA=old_schema_name:new_schema_name remap_tablespace=old_tablespace_name:new_tablespace_name directory=dpdata dumpfile=20190501.dmp logfile=20190501log.log  TABLE_EXISTS_ACTION=REPLACE

REMAP_SCHEMA可以定义用户的切换，其格式为：
remap_schema=old_schema_name:new_schema_name

REMAP_TABLESPACE可以定义切换对象的不同表空间，其格式为：
remap_tablespace=old_tablespace_name:new_tablespace_name



--/linux操作系统导入导出数据操作步骤
1、登陆oracle用户：[root@localhost ~]# su - oracle
2、[oracle@localhost ~]$ sqlplus sys/ as sysdba
切换到
SQL>
后创建表空间、用户、赋权、创建转储目录，导入导出语句如上面一致；

### 新建sequence和trigger和存储过程

参考网址：http://blog.sina.com.cn/s/blog_6151984a0100p7qd.html

已创建的表名是：STUDENT_1

1.建立sequence
  create sequence SEQUENCE_STUDENT_1;
   检查结果 
   select * from user_sequences;
2.建立trigger
   
create or replace trigger TRIGGER_STUDENT_1
before insert on STUDENT_1
for each row
begin
select SEQUENCE_STUDENT_1.nextval into :new.STU_ID from dual;
end TRIGGER_STUDENT_1

检查结果
 select trigger_name from user_triggers;

3. 测试插入
  
insert into STUDENT_1(STU_NAME,STU_AGE) values('mac',33);

5.----新建oracle定时任务

DECLARE
   job_no_ NUMBER;   
begin
    sys.dbms_job.submit(job_no_,
    what => 'insert_query_count_result;',
    next_date => to_date('11-12-2017 14:24:11', 'dd-mm-yyyy hh24:mi:ss'),
    interval => 'sysdate+10/86400');--每天86400秒钟，即一秒钟运行prc_name过程一次
    commit;
end;

6. 查看定时任务
select * from dba_jobs
7、删除定时任务

dbms_job.remove(jobid);
 
8.直接运行定时任务

begin  
  dbms_job.run(jobid); 
end; 

9.设置定时任务的开启与关闭 ---true关闭，false开启

begin  
DBMS_JOB.BROKEN(21,FALSE);  
end; 


10. 修改定时任务：
begin
    sys.dbms_job.change(201,
    what => 'insert_query_count_result;',
    next_date => to_date('11-12-2017 14:24:11', 'dd-mm-yyyy hh24:mi:ss'),
    interval =>'TRUNC(SYSDATE+1)+(11*60+30)/(24*60)') ;--每天早上11点30分 ，运行一次
    commit;
end;

