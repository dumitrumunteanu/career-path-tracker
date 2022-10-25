## CarPaT: Career Path Tracker

### Prerequisites
1. Docker
2. docker-compose

### Installation guide

1. Clone this repository on your computer
2. Build the image for the application.
Inside the `carpat-app` directory execute the following command:
    ```
    docker build -t carpat-application .
    ```
3. Inside the `carpat-environment` directory run 
    ```
    docker-compose up -d
    ```  
    to start the containers.
4. Open `http://localhost:880/` in your browser to use the application.
