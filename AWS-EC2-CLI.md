# AWS CLI 로 EC2 image 생성



- IAM

- AWS CLI 설치

- AWS CLI 설정 

- AWS CLI로 keypair 만들어보기

- 보안그룹 만들어보기

  - 인바운드 규칙 생성해보기

- EC2 인스턴스 생성하기

- EC2 인스턴스 에서 Nginx 설치하기

  

  

  

## 1. IAM 





AWS 계정을 생성하고 로그인을 한다.

그런데 개발자는 혼자하는 직업 아니고 누군가에게 나의 계정을 주는 일이 생긴다면 어떨가?

누가 내 계정으로 인스턴스를 막만들고 막쓰면 돈이 엄청 나오겠죠? 



그래서 누구는 EC2 보기만 하게 하고싶고, 아니면 생성만 하게 하고싶고 할수도있어요 이럴때 사용하는게

계정입니다. 즉 `Linux` 에서 배웠던것 처럼 슈퍼계정이 있고 사용자 계정을 만들어서 권한을 제한하는거에요.



사실 오늘 배울내용은 그 안에서 엄청 최소단위이지만 그래도 

감각을 익히는데 부족함이 없을겁니다. 



로그인 이후 검색창에 **IAM** 을 적어서 들어가주세요.



![스크린샷 2023-03-18 오후 6.06.30](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.06.30.png)





**왼쪽 사이드 메뉴에서 사용자를 클릭 합니다.**

![스크린샷 2023-03-18 오후 6.07.41](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.07.41.png)



이후 **사용자 추가** 버튼을 눌러서 사용자를 늘려보도록 하죠. 저는 이미 만들었지만 여러분들도 진행해주세요.



![스크린샷 2023-03-18 오후 6.08.23](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.09.21.png)



저는 `blockchain8`  이라고 생성했습니다.

> 한글 안됩니다, 아래 나와있어요





이후  정책 설정에서 



**직접 정책 연결** 을 클릭해서 정책 하나를 추가할겁니다. 



다른것들은 절대 건들지 못하고, 오로지 EC2 관련된것만 사용하게 할거에요.





![스크린샷 2023-03-18 오후 6.10.30](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.10.30.png)





정책 검색 창에 `AmazonEC2FullAccess` 검색해서 하나만 추가하도록 하겠습니다.



![스크린샷 2023-03-18 오후 6.12.14](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.12.14.png)



하고 다음 버튼누르면 `태그`  설정 하라고 나오는데,  나중에 관리해질게 많아지면 사용을 많이하지만 지금 우리에겐 상관없어요 



사용자 생성이 되었다면 저처럼 `blockchain8` 이 나올겁니다.

![스크린샷 2023-03-18 오후 6.13.31](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.13.31.png)





이후 `blockchain8` 을 클릭하시고, **보안 자격 증명**을 클릭하신다음에 **2개 의 설정** 진행 할 겁니다.



![스크린샷 2023-03-18 오후 6.15.56](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.15.56.png)



- **콘솔 로그인 ** : AWS Console 이란 마치 CLI 를 말하는 듯한 터미널 을 연상케 하는데 사실 AWS Console 이라는건 단순히 GUI 환경 즉 사이트를 말하는겁니다. 즉 사이트 로그인할때 사용할 패스워드를 할거냐 안할거냐 물어보는거에요, 우리는 둘다 보면서 진행 할거라서 **콘솔 엑세스 관리** 를 클릭하시고 암호를 입력해주세요 이때 자동암호보단, 수동으로 미리 만들어 놓는게 편하시겠죠 ?
- **엑세스 키** : 중요한 내용입니다 CLI 로 로그인할때 Access Key 와 Secret Key 로 접속을 할겁니다. 미리 생성해서 `.CSV` 파일을 받아주세요.

> 이때 CLI 로 선택해주세요. 



그다음 `Console` 에서 로그인을 진행 해보세요. 





![스크린샷 2023-03-18 오후 6.21.36](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.21.36.png)

**계정 ID**는 생성할때 만들어주는 식별자입니다 !





## AWS CLI 설치



aws cli 설치방법은 

OS 마다 다릅니다.



AWS 공식문서는 너무나도 잘나와있어서 공식문서보고 합시다.

https://docs.aws.amazon.com/ko_kr/cli/latest/userguide/getting-started-install.html



이후 각자 컴퓨터에서 

```
aws --version
```



![스크린샷 2023-03-18 오후 6.25.53](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.25.53.png)



잘 나오도록 설정하시면 됩니다.





## AWS CLI 설정 



```sh
aws configure

# IAM 에 대한 엑세스키 입력
# IAM 에 대한 시크릿키 입력
# 리전 선택 : ap-northeast-2
# return format : json
```







## AWS CLI로 keypair 만들어보기



keypar 생성하기

```sh
aws ec2 create-key-pair --key-name blockchain8 --query 'KeyMaterial' --output text > MyKeyPair.pem
```



keypair 생성목록 확인하기

```sh
aws ec2 describe-key-pairs
```

*만약 해당 키페어만 찾고싶은 경우 --key-name [키페어이름]* 을 넣어주면 된다!



keypar 삭제하기

```
aws ec2 delete-key-pair --key-name MyKeyPair
```





이게 뭔가 싶지만 우리는 만들어봤던 겁니다..

그리고 실제로 pem 파일이 여러분 디렉토리에 생겼을 거에요.



그리고 EC2 에서 사이드메뉴에서 **키페어** 를 선택하면 이렇게 생성된것을 확인 할 수 있습니다.



![스크린샷 2023-03-18 오후 6.30.38](/Users/ingoo/Library/Application Support/typora-user-images/스크린샷 2023-03-18 오후 6.30.38.png)







## 보안그룹 만들어보기



```sh
aws ec2 create-security-group --group-name blockchain8-front --description "DESCRIPTION"
```







