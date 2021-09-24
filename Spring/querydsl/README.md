# QueryDsl

## Intellij에서 QueryDSL 자동생성 클래스 찾지 못하는 경우

1. File > Project structure

<img src="https://user-images.githubusercontent.com/41010744/132791357-48b8e545-7d67-4e93-8fc5-87397a10139e.png">

2. `Modules` 탭에서 `target/generated-sources/java` 폴더 클릭한 뒤 상단 `Mark as`의 `Sources` 클릭하여 소스폴더로 인식하도록 설정

<img src="https://user-images.githubusercontent.com/41010744/132791449-125e8481-87d9-4ffe-a3e8-3d8c4f901440.png">

## 스프링 부트 2.5 업데이트 : hibernate, data.sql 관련 변동사항

- data.sql 스크립트를 초기화하는 과정 중간에 테이블을 찾지 못하는 상황
- spring boot : 2.4 > 2.5 버전 변동하는 데 있어 아래와 같은 변동 사항

> By default, data.sql scripts are now run before Hibernate is initialized. This aligns the behavior of basic script-based initialization with that of Flyway and Liquibase. If you want to use data.sql to populate a schema created by Hibernate, set spring.jpa.defer-datasource-initialization to true. While mixing database initialization technologies is not recommended, this will also allow you to use a schema.sql script to build upon a Hibernate-created schema before it’s populated via data.sql.

- spring boot 2.5 버전 부터 스크립트 기반 초기화의 동작 과정을 flyway, liquibase와 일치 시키기 위해
- data.sql은 hibernate 초기화되기 전에 실행된다는 내용
- 따라서 hibernate 초기화를 통해 생성된 스키마에다가 데이터를 채우기를 위해서 `data.sql`가 실행되기를 원한다면 application.yml(도는 properties)에 **spring.jpa.defer-datasource-initialization 옵션 값을 true**로 추가
