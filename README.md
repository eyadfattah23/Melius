# Melius

Melius is a privacy-focused web application designed to help users overcome porn addiction. Built as part of the ALX portfolio, this platform allows users to track progress, access recovery resources, and manage their journey without compromising anonymity.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [Related Projects](#related-projects)
8. [License](#license)
9. [Future Improvements](#future-improvements)
10. [Author's Story](#authors-story)


## Introduction

Melius provides a confidential environment for users seeking recovery from porn addiction, offering anonymous accounts and useful tools to aid in the journey. The platform has been developed with care to ensure users' privacy and data security.

- **Deployed site**: [Melius website](https://meliusapp.com)
- **Final project blog article**: [Read here](#)
- **Authors**:
  - Eyad Abdelfattah – Backend Developer  
    [GitHub](https://github.com/eyadfattah23) | [LinkedIn](https://www.linkedin.com/in/eyad-fattah/)
  - Lamia Hamdi – Frontend Developer  
    [GitHub](https://github.com/Lamia1406) | [LinkedIn](https://www.linkedin.com/in/lamia-hamdi/)
  - Larini Abdllah – Backend Developer  
    [GitHub](https://github.com/laribox) | [LinkedIn](https://www.linkedin.com/in/larini-abdllah/)

## Features

- **Anonymous Account Creation**: Users can sign up without sharing personal information.
- **Progress Tracking**: Monitor your progress over time and gain achievements the longer you stay on track.
- **Resource Hub**: Access articles, videos, and exercises to support recovery.
- **Community Support**: Engage with a like-minded community to share experiences and encourage one another.
- **Privacy Protection**: Data security is a top priority, ensuring anonymity at all stages.


## Technologies Used

- **Backend**: Flask (Python)
- **Frontend**: HTML, CSS, JavaScript, React
- **Server**: Nginx
- **Authentication**: JWT (JSON Web Tokens)
- **API Documentation**: Swagger
- **Database**: MySQL
- **Testing**: Unittest (Python)
- **Deployment**: Docker, Bash scripts

## Installation

You can either use the provided Bash script or manually install the application as detailed below.

### Install with Bash Script

Run the automated installation with the following commands:

```bash
cd /var
chmod u+x melius.sh
./melius.sh
```

## Manual Installation

### Prerequisites

- Python 3.x
- Pip
- MySQL
- Nginx
- Node.js
- npm

### Clone the Repository

```bash
git clone https://github.com/eyadfattah23/Melius.git
cd Melius
```

### Install Dependencies

```bash
pip install -r requirements.txt
```

### Install frontend dependencies:

```bash
cd frontend
npm install
```

### Set Up MySQL

```bash
cd /var/Melius
mysql -u root < setup_mysql_dev.sql
```

### Set Up Nginx

Update Nginx configuration with the appropriate settings

### Run the Application

```bash
cd /var/Melius
python3 -m api.v1.app
```

```bash
cd frontend
npm run dev
```

## Usage

Once the application is running, access it via your browser:

- Backend: <http://localhost:5050>
- Frontend: <http://localhost:3000>
- API Documentation : <http://localhost:5050/apidocs/>
- API Endpoint : <http://localhost:5050/api/v1>

Users can create anonymous accounts, track their progress, and access resources.

## Screenshot

![Melius Screenshot](#) (Placeholder for the screenshot)

## Contributing

Contributions are welcome! To contribute:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-branch`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature-branch`).
5.  Open a pull request.

Ensure your code follows PEP8 guidelines, is documented, and includes unit tests for any new features.

## Related Projects

- **[NoFap](https://nofap.com/)**: A community-driven platform supporting recovery.
- **[Reboot Nation](https://rebootnation.org/)**: Another initiative aimed at overcoming porn addiction.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

## Future Improvements

-   **Mobile Optimization**: Enhance the platform's responsiveness for mobile devices.
-   **Donation Feature**: Allow users to support the platform through donations.
-   **Voice Chat**: Enable voice communication between users for additional support.
-   **Goal Setting**: Add a feature to set monthly or weekly goals. Completing these goals will reward users with points or achievements.

## Author's Story

The idea behind Melius started from a personal experience with a close friend struggling with porn addiction. Watching this friend battle the addiction and trying different solutions without success motivated the team to create something that addresses the root of the problem in a more effective and compassionate way. We believe that privacy, community support, and easily accessible tools are crucial to overcoming this challenge. With this passion, the Melius team is dedicated to helping others take control of their lives.
