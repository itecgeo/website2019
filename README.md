# Web itecgeo

Para iniciar el proyecto

```bash
npm install
npm start
```

## docker compose

es importante correr el --build, ya que es necesario que se manden los cambios en el codigo de js

```bash
#correr de manera local
docker-compose -f docker-compose-local.yml up -d --build

#correr con red de traefi, pero en local
docker-compose -f docker-compose-local-traefik.yml up -d --build

#correr con red de traegik, en produccion
docker-compose up -d --build
```