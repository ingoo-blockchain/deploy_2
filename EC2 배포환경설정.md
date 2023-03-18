# 환경설정하기



## node 설치하기

```sh
sudo apt update
sudo apt upgrade -y 
# sudo apt install -y build-essential
sudo apt install net-tools
sudo apt install curl 

# nvm 설치
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
source ~/.bashrc

# nvm 버전확인
nvm --version

# nodejs LTS 설치
nvm install node --lts

# 설치된 노드 버전 확인
nvm ls

node --version
npm --version

```





## mysql 설치하기

```sh
sudo apt install mysql-server -y
mysql --version

## sevice 명령어로 실행하기
sudo service mysql start

## mysql 프로세스 확인하기
sudo service mysql status

sudo mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by '[password]';

#ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password by #'root';
exit

sudo mysql -uroot -p[패스워드]


create user 'ingoo'@'%' identified WITH mysql_native_password by 'Ingoo0427!';
grant all privileges on *.* to 'ingoo'@'%' with grant option;
FLUSH PRIVILEGES;

exit

sudo service mysql restart 

mysql -uingoo -p[설정한 암호]

mysql > create database backend;
```



**workbench 접속테스트**

해보기



## mysql 외부접속 설정

```sh

sudo netstat -ntlp | grep mysqld 

```

![image-20220215212904611](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220215212904611.png)





```sh
## mysqld.cnf 파일 찾기
cd /etc/mysql/mysql.conf.d
ls

sudo vi mysqld.cnf
```

**bind-address 부분을 0.0.0.0 으로 바꿔주자.**



![image-20220215213525147](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220215213525147.png)



```sh
sudo service mysql restart
sudo netstat -ntlp | grep mysqld

ifconfig # 아이피주소 확인해보기.
```



**아차차.. aws 인스턴스 보안그룹 인바운드 규칙 3306 포트를 추가를안했다....**





```sh
sudo lsof -i :80   # 사용중인 포트번호 조회

sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000
# https://linuxstory1.tistory.com/entry/iptables-%EA%B8%B0%EB%B3%B8-%EB%AA%85%EB%A0%B9%EC%96%B4-%EB%B0%8F-%EC%98%B5%EC%85%98-%EB%AA%85%EB%A0%B9%EC%96%B4


```





## PM2



```sh
npm install -g pm2

pm2 --version

pm2 start index.js
pm2 kill
pm2 log

pm2 monit
# 빠져나올 경우 q


# https://pm2.keymetrics.io/docs/usage/quick-start/
```





```sh
npm install -g pm2

pm2 start npm --name "front" -- start

pm2 start 
pm2 stop
pm2 list
pm2 restart
pm2 monit
```

