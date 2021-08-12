# Dockerfile and Docker Compose workshop

This is a project to demonstrate how to write Dockerfile and use multiple dockerized container using docker-compose.

Index
-----

*   Introduction
*   Resources for the presentation
*   General discussion of docker and building images
*   Dockerfile
*   Dockerhub
*   Syntax
*   Dockerfile Example 01
*   Dockerfile Example 02
*   Docker compose
*   Docker-compose example

Resources
---------

1.  [Dockerfile API Reference](https://docs.docker.com/engine/reference/builder/)
2.  [Dockerfile Best Practice](https://docs.docker.com/develop/develop-images/dockerfile_best-practices/)
3.  [Cheatsheet](https://kapeli.com/cheat_sheets/Dockerfile.docset/Contents/Resources/Documents/index)
4.  [Awesome Compose](https://github.com/docker/awesome-compose)
5.  [Docker-Compose for Django and React with Nginx reverse-proxy and Let's encrypt certificate](https://saasitive.com/tutorial/docker-compose-django-react-nginx-let-s-encrypt/)
6.  [Docker system resource management](https://docs.docker.com/config/containers/resource_constraints/)
7.  [CMD vs RUN vs ENTRYPOINT](https://goinbigdata.com/docker-run-vs-cmd-vs-entrypoint/)

### Dockerfile

#### Syntax
Source -> https://kapeli.com/cheat_sheets/Dockerfile.docset/Contents/Resources/Documents/index

#### Some notes

Volume:

*   The host directory is declared at container run-time: The host directory (the mountpoint) is, by its nature, host-dependent. This is to preserve image portability, since a given host directory can’t be guaranteed to be available on all hosts. For this reason, you can’t mount a host directory from within the Dockerfile. The VOLUME instruction does not support specifying a host-dir parameter. You must specify the mountpoint when you create or run the container. \[[link](https://docs.docker.com/engine/reference/builder/#notes-about-specifying-volumes)\]

Entrypoint:

*   To sum up this will run, when there is no other parameter is specified. Useful if the container is set to do a single thing. \[[source\]](https://stackoverflow.com/a/34245657/5830339)
*   A simple trick to keep container running without any process is to specify Entrypoint as such →

    ENTRYPOINT ["tail", "-f", "/dev/null"]

Alpine:

*   Most minimal build. Alpine Linux is **a Linux distribution built around musl libc and BusyBox**. The image is only 5 MB in size and has access to a package repository that is much more complete than other BusyBox based images. This makes Alpine Linux a great image base for utilities and even production applications.
*   Alpine images usually doesn't include compilers. So any package that may require compiling will not work with such image. You can however use any pre-compiled packages. 
    *   psycopg2: binary or regular will not work in an alpine image.