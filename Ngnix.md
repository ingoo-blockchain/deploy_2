3.37.36.148

52.79.246.108

# Ngnix 



```sh
# sudo apt update && sudo apt upgrade

# back 

sudo apt install nginx 

sudo service nginx start
# sudo service nginx status 

sudo service nginx stop 
# sudo service nginx status [q]
# sudo nginx -t ## default 문법

cd /etc/nginx/sites-enabled
ls

sudo vi default ## /var/www/html
```

**default**

```


location / {
	proxy_pass http://127.0.0.1:3000
}
```





## 포트포워딩

```sh
sudo iptables -A PREROUTING -t nat -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000

sudo iptables -t nat -L --line-numbers

sudo iptables -t nat -D PREROUTING [번호]
```







## 탄력적 IP

AWS -> 메뉴 이름일뿐, 

![image-20220512100726819](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220512100726819.png)





![image-20220512100701584](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220512100701584.png)

생성하고 싶으면 주황색 버튼 누르기,









**탄력적 IP 주소 연결**

![image-20220512101030099](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220512101030099.png)



## 

```
cd /etc/nginx/sites-enabled/
ls 
sudo vi default 


location / {
	server_name [도메인];
	listen 80;
	location / {
		proxy_set_header HOST $host;
		proxy_redirect off;
		proxy_pass http://127.0.0.1:8080;
	}
}
```





공개키, 비밀키 



## Next 빌드하기 



```sh
cd ~

git clone -b next_project --single-branch https://github.com/ingoo-blockchain/ingooTemplate.git

cd ingooTemplate
cd next_front

npm install

sudo vi package.json

npm run build
# .next가 생성되었을 거임

npm run start 
# 실행될거임. 


#########
sudo rm -rf ./ingooTemplate/
git clone -b next_project --single-branch https://github.com/ingoo-blockchain/ingooTemplate.git

cd ingooTemplate && cd next_front
npm install
npm run start 
```







### 스왑메모리

```sh
## 설정
sudo dd if=/dev/zero of=/mnt/swapfile bs=1M count=2048
sudo mkswap /mnt/swapfile
sudo swapon /mnt/swapfile

## 해제
sudo swapoff -v /mnt/swapfile
sudo rm /mnt/swapfile
```





## certbot-auto



```sh
# Ngnix 실행된 다음에 진행해야함.
wget https://dl.eff.org/certbot-auto

chmod 775 certbot-auto # 실행권한을 다주기위함,
./certbot-auto # 실행시키기

vi /etc/ngnix/ngnix.conf
```





## clone tab







### 도메인 연결 Route 53



![image-20220512121253370](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220512121253370.png)





**가비아**

![image-20220512121508609](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220512121508609.png)

| 유형  | 값                      |
| ----- | ----------------------- |
| A     | 탄력적 IP (고정된 IP값) |
| CNAME | A레코드 이름            |

![image-20220512121949512](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220512121949512.png)





## PM2

```
npm install -g pm2

pm2 start npm --name "front" -- start

pm2 start 
pm2 stop
pm2 list
pm2 restart
pm2 monit
```

