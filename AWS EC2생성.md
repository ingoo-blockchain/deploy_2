# AWS EC2 

회원가입 진행후, 

AWS 관리 콘솔에 들어갑니다.



![image-20220510195328761](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510195328761.png)

이후 가상머신 시작을 클릭해줍니다.



## 1. 이름 및 태그

![image-20220510195450244](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510195450244.png)

이름을 정해줍시다.



## 2. 애플리케이션 및 OS 이미지 

> 운영체제를 선택

![image-20220510195539743](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510195539743.png)

Ubuntu Server 20.04 LTS 버전을 사용했습니다 ( WSL 할때도 우분트 20.04 를 사용해서 버전 그대로 사용 )



## 인스턴스 유형

> 컴퓨터의 자원 설정

![image-20220510195655954](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510195655954.png)





## 키 페어 ( 로그인 )

> 원격 접속시 필요한 키값 받기 왠만하면 RSA 그래야 Window 사용하는컴퓨터도 됩니다.

![image-20220510200505731](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510200505731.png)

![image-20220510200459192](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510200459192.png)

![image-20220510200514832](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510200514832.png)

이파일은 잘 저장해두고 계셔야합니다.



## 보안 그룹 설정



![image-20220510201227564](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510201227564.png)

 http 와 https 에 관련된 정보를 허용해준다, 누구나 들어올수있게 합니다.



여기까지 되었다면 인스턴스 를 생성하자.

![image-20220510201332181](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510201332181.png)

![image-20220510201403037](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510201403037.png)





## 인스턴스 내용에 접속하기

![image-20220510201435328](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510201435328.png)

![image-20220510201632316](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510201632316.png)

![image-20220510201913440](C:\Users\pc-007\AppData\Roaming\Typora\typora-user-images\image-20220510201913440.png)



**원격접속 성공!**

