FROM golang:1.22 as builder

WORKDIR /user/src/app

COPY go.mod go.sum ./

RUN go mod download

COPY . .

RUN go build -v -o ./base ./examples/base/main.go

EXPOSE 8090

CMD [ "./base", "serve", "--http=0.0.0.0:8090"]