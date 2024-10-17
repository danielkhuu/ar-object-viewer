# Lightweight web server image
FROM nginx:alpine

# Copy project files into the NGINX web root
COPY . /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
