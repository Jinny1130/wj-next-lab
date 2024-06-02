### PORT  
port number = 1130  
[http://localhost:1130]

### route  
  
path:'/'
- main 페이지 resume
  
  
path: '/project'
- project 들의 main page
- project title click 시 project 로 redirect
  
  
path: '/project/send-message'
- 메시지 발송 토이 프로젝트
- 입력한 번호로 AWS SMS 를 연동하여 설정해놓은 메시지가 발송된다
- AWS를 사용하기 때문에 [국제발신] 메시지로 발송됨
  
