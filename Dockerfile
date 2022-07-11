FROM public.ecr.aws/bitnami/node:18
WORKDIR /
COPY server.js .
EXPOSE 8080
ENTRYPOINT ["node", "server.js"]
