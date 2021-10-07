FROM maven:3-openjdk-11 as builder
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests
FROM  adoptopenjdk/openjdk11:x86_64-alpine-jdk-11.0.12_7
ARG JAR_FILE=/app/target/*.jar
COPY --from=builder ${JAR_FILE} app.jar
EXPOSE 8081
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS
ENTRYPOINT ["java","-jar","-noverify", "-XX:+AlwaysPreTouch", "-Djava.security.egd=file:/dev/./urandom","/app.jar"]
