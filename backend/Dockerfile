FROM rust:1.53-alpine

WORKDIR /app
COPY ./rust /app

RUN cargo build

CMD [ "/app/target/debug/rust" ]