# Project Name 🎯

 
<img src="./images/break-free.png" alt="drawing" width="1200"/>

## Introduction 👋

Melius is born out of a desire to provide individuals struggling with porn addiction a safe, anonymous, and effective platform for recovery. The core mission of Melius is to offer a combination of community support, resource access, and personal tracking—all while ensuring complete privacy.

## Table of Contents 📑

- [Motivation & Inspiration 💡](#motivation--inspiration-)
- [Technical Overview 🛠️](#technical-overview-)
- [Features 🛠️](#features-)
- [Challenges and Solutions 🤔](#challenges--solutions-)
- [Future Enhancements 🚀](#future-enhancements-)
- [Screenshots and Visuals 🖼️](#screenshots-and-visuals-)
- [Installation :cd:](#installation-)
- [Manual Installation](#manual-installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Related Projects](#related-projects)
- [License ⚖️](#license-)

---

## Motivation & Inspiration 💡

The idea behind Melius started from a personal experience with a close friend struggling with porn addiction. Watching this friend battle the addiction and trying different solutions without success motivated the team to create something that addresses the root of the problem in a more effective and compassionate way. We believe that privacy, community support, and easily accessible tools are crucial to overcoming this challenge. With this passion, the Melius team is dedicated to helping others take control of their lives.

Melius has grown into more than just a technical project. It’s a tool built with empathy, a product of deep thought and a desire to make a real difference in people’s lives.


## Technical Overview 🛠️

Here’s a breakdown of the technology stack and architectural decisions:

### Frontend

- **React:** The frontend is powered by React for efficient UI rendering and easy state management.
- **Tailwind:** The CSS framework used for styling and layout.
- **shadcn/ui:** A collection of UI components and utilities for building web applications.

### Backend
- **Flask (Python):** Chosen for its lightweight nature, Flask allowed us to build out APIs quickly while maintaining flexibility.
- **JWT (JSON Web Tokens):** Authentication is handled with JWT to ensure that user sessions are stateless and secure.
- **MySQL:** Used for efficient storage of user progress and logs, chosen for its scalability and robustness.
  

### Key Algorithms and Solutions 🧠

One of the core challenges I encountered was [describe a key technical challenge]. After a few iterations, I chose to implement [solution or algorithm]. Here’s a breakdown of how it works:

```kotlin
// Example of the core algorithm or solution in Kotlin
fun calculateOrderTotal(order: List<OrderEntry>): Double {
    return order.sumOf { it.quantity * it.price }
}
```


## Features 🛠️

- **Anonymous Account Creation**: Users can sign up without sharing personal information.
- **Progress Tracking**: Monitor your progress over time and gain achievements the longer you stay on track.
- **Resource Hub**: Access articles, videos, and exercises to support recovery.
- **Community Support**: Engage with a like-minded community to share experiences and encourage one another.
- **Privacy Protection**: Data security is a top priority, ensuring anonymity at all stages.


## Challenges and Solutions 🤔

While building **Project Name**, I faced several obstacles that pushed me to find creative solutions:

-   **Challenge 1: Offline Support**\
    The app needed to function offline due to [mention real-world scenario, like warehouse operations]. I solved this by [explain your solution, e.g., caching data, storing it locally].

-   **Challenge 2: Handling Large Data Sets**\
    When dealing with large product inventories, the app started slowing down. I optimized this by [describe how you improved performance, e.g., using pagination, lazy loading].

Each of these challenges helped me grow in [mention specific technical or soft skills, like debugging, performance tuning, or problem-solving].

* * * * *

##  Future Enhancements 🚀

Here's what I plan for the next iteration of **Project Name**:

-   **Integrating Payment Gateways:** To allow users to complete purchases seamlessly, I plan to add [describe specific payment APIs or gateways].
-   **Improved UI/UX:** I envision [describe any UX improvements based on feedback or personal ideas].
-   **Enhanced Security:** Implementing [mention additional authentication methods, encryption, etc.].

There's always room to refine and evolve this project, and I'm excited about future possibilities.

* * * * *

## Screenshots and Visuals 🖼️

Here are some screenshots of the app in action:



## Installation :cd:

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

## License ⚖️

This project is licensed under the MIT License. See the LICENSE file for more details.
