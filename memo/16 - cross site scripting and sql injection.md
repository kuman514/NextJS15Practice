# XSS와 SQL Injection

## XSS (Cross Site Scripting)
- HTML 코드에 `<script>` 태그를 삽입하는 방법을 이용한 공격 방법.
  - Text input이 있으며 해당 데이터가 POST/PUT/PATCH로 보내질 때, 해당 데이터가 innerHTML을 통해 삽입된다면, `<script>` 태그가 삽입되어 중요한 정보를 탈취당하는 등의 공격을 받을 위험이 있다.
- 이를 예방하려면, HTML 태그를 Sanitizing 처리해야 한다.

## SQL Injection
- SQL 질의에 임의의 질의문을 삽입하여 데이터베이스로부터 정보를 탈취하는 공격 방법.
  - 예시: `' or 1 = 1`같은 임의의 질의문을 삽입.
- 이를 예방하려면, SQL 질의 문자열에 직접 값을 넣는 것이 아닌, 플레이스홀더를 이용한 동적인 값을 넣는 방법 등을 취해야 한다.
  - ORM(Object Relational Mapping) 등등으로 SQL 문법 대신 개발하고 있는 언어를 그대로 사용하게 만드는 방법도 좋다.
