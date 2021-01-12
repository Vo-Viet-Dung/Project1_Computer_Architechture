FROM httpd:latest
LABEL Name=project1computerarchitechture Version=0.0.1
RUN apt-get -y update && apt-get install -y fortunes && apt-get install apache2
CMD ["sh", "-c", "/usr/games/fortune -a | cowsay"]
VOLUME [ "C:\Users\admin\Desktop\Project1_Computer_Architechture" ]
