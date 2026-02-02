# SAGTA Map downloader

## Map specifications

Maps are defined in QGIS projects that need to be synced to the correct path on the server. 

Maps must follow [these specifications](https://github.com/kartoza/SAGTA/wiki/SAGTA-Map-Downloader-Specifications)

## System Setup

This repo is based on the work provided by [lizmap](git@github.com:3liz/lizmap-docker-compose.git).

To get a running version of the repo you can use the following methods:

1). Setup and publishing QGIS Projects

2). Server Deployments

### Setup and publishing QGIS Projects

QGIS projects provide the majority of functionality for the applications. It is important to
setup an automated way to share these projects. Currently the repository containst projects and 
these are only updated when they are significant changes. To setup the projects and update them you will 
need to follow instructions in [QGIS Desktop Setup](https://github.com/kartoza/SAGTA/tree/main/qgis_desktop_setup#readme)

### Docker-Compose Deployment (Simplified)

The deployment folder contains everything needed to run Lizmap without cloning external repositories.

#### Quick Start

```bash
# Clone the SAGTA repository
git clone git@github.com:kartoza/SAGTA.git
cd SAGTA/deployment

# Run the setup script
./setup.sh

# Edit .env to adjust settings (optional)
nano .env

# Start the services
docker compose pull
docker compose up -d

# Install Lizmap server plugin
docker compose exec map qgis-plugin-manager init
docker compose exec map qgis-plugin-manager update
docker compose exec map qgis-plugin-manager install "Lizmap server"
docker compose restart map
```

Access Lizmap at http://localhost:8090 (default credentials: `admin` / `admin`)

#### Using SAGTA Projects

To use the SAGTA QGIS projects, update your `.env`:

```bash
LIZMAP_PROJECTS=../projects
```

Or copy the projects to the deployment folder:

```bash
cp -r ../projects/* ./projects/
```

#### Directory Structure

After running `setup.sh`, the following structure is created:

```
deployment/
├── docker-compose.yml
├── .env
├── config/
│   ├── nginx.conf
│   └── pg_service.conf.example
├── lizmap/
│   ├── etc/           # Configuration files
│   ├── plugins/       # QGIS server plugins
│   ├── var/           # Runtime data
│   ├── www/           # Web assets
│   └── mapproxy/      # MapProxy configuration
└── projects/          # QGIS projects
```

#### Custom QGIS Server Plugins

Copy custom plugins to the plugins directory:

```bash
cp -r ../plugins/qgisserver/* ./lizmap/plugins/
```

**Note:** The default login credentials are `admin:admin`.

### Legacy Deployment (using lizmap-docker-compose)

<details>
<summary>Click to expand legacy deployment instructions</summary>

* Make a deployment folder where all source code will be stored

  ```bash
  mkdir -p /home/${user}/deployment/map_downloader
  cd /home/${user}/deployment/map_downloader
  ```

* Clone the `SAGTA` and `lizmap` repository.

    ```bash
    git clone git@github.com:kartoza/SAGTA.git
    git clone git@github.com:3liz/lizmap-docker-compose.git
    ```

* Navigate to the `lizmap-docker-compose` folder and configure:

  ```bash
  cd lizmap-docker-compose
  make configure
  rm -rf ./lizmap/instances/*
  ```

* Copy configuration from SAGTA:

  ```bash
  cp ../SAGTA/deployment/docker-compose.yml .
  cp ../SAGTA/deployment/env.example .env
  ```

* Update `.env` paths to match your deployment location.

* Copy plugins and projects:

  ```bash
  cp -r ../SAGTA/plugins/qgisserver/* ./lizmap/plugins/
  cp -r ../SAGTA/projects/* ./lizmap/instances/
  ```

* Start services:

  ```bash
  docker compose up -d
  ```

</details>

* Activate the Profile tool following instructions from
[profile-plugin](https://github.com/kartoza/SAGTA/tree/main/plugins/lizmap/profile_tool/README.md)

#### SAGTA Oauth Deployment

The instance deployed above will have all the plugins available but will use the normal login
to the platform. In order to authenticate with the [SAGTA](https://sagta.org.za/) domain a few
changes are needed. These changes are based on https://github.com/kartoza/lizmap-web-client

* Make sure the services are not running: 
  ```bash
  docker-compose stop
  ```
* Open the `docker-compose.yml` file to make some changes.
* Add the following environment variables to the `lizmap` service in the `docker-compose.yml`
  ```bash
  CLIENT_ID: add a value here 
  CLIENT_SECRET: add a value here
  SAGTA_URL: https://sagta.org.za
  REDIRECT_URI: https://maps.sagta.org.za/
  MEMBER_USERNAME: sagta_mapdownloader
  MEMBER_PASSWORD: add a password here
  ```
* Adjust the volumes section in `lizmap` service in the `docker-compose.yml`
  ```bash
  /home/${user}/deployment/map_downloader/lizmap-docker-compose/lizmap/modules/lizmap:/www/lizmap/modules/lizmap
  /home/${user}/deployment/map_downloader/lizmap-docker-compose/lizmap/modules/view/controllers:/www/lizmap/modules/view/controllers
  ```
* Update the repository adding changes from https://github.com/kartoza/lizmap-web-client

  ```bash
  cd /home/${user}/deployment/map_downloader/
  git clone git@github.com:kartoza/lizmap-web-client.git
  cd lizmap-web-client
  cp -r ./lizmap/modules/lizmap/module.xml /home/${user}/deployment/map_downloader/lizmap-docker-compose/lizmap/modules/lizmap/
  cp -r ./lizmap/modules/lizmap/classes/sagta.class.php /home/${user}/deployment/map_downloader/lizmap-docker-compose/lizmap/modules/lizmap/classes
  cp -r ./lizmap/modules/lizmap/templates/user_menu.tpl /home/${user}/deployment/map_downloader/lizmap-docker-compose/lizmap/modules/lizmap/templates/
  cp -r ./lizmap/modules/view/controllers/default.classic.php /home/${user}/deployment/map_downloader/lizmap-docker-compose/lizmap/modules/view/controllers/
  cp -r ./lizmap/modules/view/controllers/lizMap.classic.php /home/${user}/deployment/map_downloader/lizmap-docker-compose/lizmap/modules/view/controllers/
  cp -r ./lizmap/var/config/admin/auth.coord.ini.php /home/${user}/deployment/map_downloader/lizmap-docker-compose/lizmap/var/lizmap-config/admin/
  ```
  **Note:** For each new version of lizmap web client we need to update our repository with upstream
changes before we continue the update process.

* Start the services again
  ```bash
  cd /home/${user}/deployment/map_downloader/lizmap-docker-compose
  docker compose up -d
  
  ```

### kubernetes Deployment

**Note:** This is still a work in progress.

All manifest are available from [sagta-manifests](https://github.com/kartoza/devops/tree/master/rancher-2.x/manifests/projects/sagta)
