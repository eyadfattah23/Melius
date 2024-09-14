# Melius

Melius is a privacy-focused web application designed to help users overcome porn addiction. Built as part of the ALX portfolio, this platform allows users to track progress, access recovery resources, and manage their journey without compromising anonymity.

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
- **Progress Tracking**: Monitor your progress over time.
- **Resource Hub**: Provides articles, videos, and exercises to support recovery.
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

- **Mobile App**: Develop a companion mobile app for Melius.
- **Gamification**: Introduce achievement badges to encourage users.
- **AI Chatbot**: Provide users with an AI-based support assistant for guidance.

## Author's Story

This project was born from a personal belief that everyone deserves a safe, non-judgmental space to recover. The challenge was balancing complete anonymity with robust functionality, achieved through JWT authentication and encrypted databases. Future iterations will explore mobile platforms and incorporate user feedback to enhance the platform.
