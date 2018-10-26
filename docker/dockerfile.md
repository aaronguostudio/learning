# Create a docker file

```dockerfile
FROM woahbase/alpine-quasar

USER root

COPY package*.json ./

COPY . .

RUN npm install

RUN quasar build --mode ssr

RUN cd ./dist/ssr-mat

WORKDIR ./dist/ssr-mat

EXPOSE 3000

CMD [ "node", "index.js" ]
```

# Build
docker build -t domain/image-name:0.01 .

# Publish
docker login
docker push domain/image-name:0.01

# Run
docker run -p port:port -d domain/image-name




