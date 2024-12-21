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
  

### convention

router : kebab-case
components folder : kebab-case
components : PascalCase
type & interface : PascalCase
constant (진짜 상수) : UPPER_SNAKE_CASE
constant(일반적 상수) & variable(변수) : carmelCase
function : carmelCase
class (코드 내 객체 지향적인 클래스): PascalCase
CSS framework class(tailwind): kebab-case
styled class : snake_case