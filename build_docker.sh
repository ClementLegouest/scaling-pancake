docker build -t name_generator_image .
docker run -dit --name name_generator_app -p 8080:80 name_generator_image