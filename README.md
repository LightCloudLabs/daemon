# Light Daemon 

## Overview
Light Daemon is the daemon for the Light Panel.

## Installation
1. Clone the repository:
```bash
git clone https://github.com/LightCloudLabs/daemon.git
```

3. Install dependencies:
```bash
npm install
```

5. Configure LightDAEMON:
- Get your Panel's access key from the Light panel's config.json file and set it as 'remoteKey'. Do the same for the other way, set your Aird access key and configure it on the Panel.

4. Start the Daemon:
```bash
node . # or use pm2 to keep it online
```

## Configuration
Configuration settings can be adjusted in the `config.json` file. This includes the authentication key for API access.

## Usage
The daemon runs as a background service, interfacing with the Light Panel for operational commands and status updates. It is not typically interacted with directly by end-users.

## Contributing
Contributions to enhance the functionality or performance of the Light Daemon are encouraged. Please submit pull requests for any enhancements.

## License
(c) 2024 MJ and contributors. This software is licensed under the MIT License.


## Credits
SRYDEN
