FROM golang:latest

WORKDIR /usr/app

COPY . .

RUN go get -u -v -f all

RUN go build client/main.go

ENV ADDR=0.0.0.0
EXPOSE 8081

CMD  ["./main"]