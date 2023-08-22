---
sidebar_position: 3
---

# Project Setup

Welcome to SportX, a powerful and seamless betting platform for sports enthusiasts. This section will guide you through the necessary steps to get started with the platform, including setting up the development environment, installing dependencies, and running the web and mobile app versions.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your machine:

- For the Web App:

  - PHP (version 8.1 or higher)
  - Composer (dependency manager for PHP)
  - Node.js and NPM (Node Package Manager)
  - MySQL or any compatible database server
  - Laravel CLI (Command Line Interface)

- For the Mobile App:
  - Flutter SDK (stable version)
  - Dart language SDK
  - Android Studio (for Android development) with Flutter and Dart plugins
  - Xcode (for iOS development) with Flutter and Dart plugins (Mac only)

## Setting Up the Development Environment

Follow these steps to set up your development environment for the web and mobile app versions of SportX:

### Web App

1. Clone the repository from the Git repository or download the project ZIP.

2. Navigate to the `sportx-web` directory using the command line.

3. Install PHP dependencies by running:

   ```
   composer install
   ```

4. Install frontend dependencies using NPM:

   ```
   npm install
   ```

5. Create a new `.env` file by copying `.env.example` and update it with your database and other configuration settings.

6. Generate a new application key:

   ```
   php artisan key:generate
   ```

Certainly! Below is the updated "Installation" section with the addition of configuring mail settings for sending verification emails to users upon registration:

---

## Installation

Welcome to SportX! This section will guide you through the installation process of the web and mobile app versions of SportX on your local development environment.

### Web App Installation

1. Clone the repository from the Git repository or download the project ZIP.

2. Navigate to the `sportx-web` directory using the command line.

3. Install PHP dependencies by running:

   ```
   composer install
   ```

4. Install frontend dependencies using NPM:

   ```
   npm install
   ```

5. Create a new `.env` file by copying `.env.example` and update it with your database and other configuration settings.

6. Generate a new application key:

   ```
   php artisan key:generate
   ```

7. Configure Mail Settings for Verification Email:

   - Open the `.env` file and find the following variables related to email:
     ```
     MAIL_MAILER=smtp
     MAIL_HOST=your_smtp_host
     MAIL_PORT=your_smtp_port
     MAIL_USERNAME=your_smtp_username
     MAIL_PASSWORD=your_smtp_password
     MAIL_ENCRYPTION=your_smtp_encryption
     MAIL_FROM_ADDRESS=your_email_address
     MAIL_FROM_NAME="${APP_NAME}"
     ```
   - Replace the placeholders (e.g., `your_smtp_host`, `your_smtp_port`, etc.) with your SMTP mail server details. These settings will be used to send verification emails to users upon registration.

8. Configure Database:

   - Create a new MySQL database for SportX. Open the `.env` file, find and update the following database variables to match your database credentials

   ```
    DB_CONNECTION=mysql
    DB_HOST=your_database_host
    DB_PORT=your_database_port
    DB_DATABASE=your_database_name
    DB_USERNAME=your_database_username
    DB_PASSWORD=your_database_password
   ```

9. Run database migrations to set up the database schema:

   ```
   php artisan migrate
   ```

10. Seed the database with initial data (if applicable):

    ```
    php artisan db:seed
    ```

11. Run the development server:

    ```
    php artisan serve
    ```

12. The web app should now be accessible at `http://localhost:8000`.

### Mobile App

1. Clone the repository from the Git repository or download the project ZIP.

2. Navigate to the `sportx-app` directory using the command line.

3. Run Flutter doctor to ensure all dependencies are installed and configured correctly:

   ```
   flutter doctor
   ```

4. Install the Flutter and Dart plugins in your IDE (Android Studio or Visual Studio Code).

5. Connect a physical device or start an emulator for testing the app.

6. Run the app on the device/emulator:

   ```
   flutter run
   ```

7. The mobile app should now be running on your device/emulator.

## Additional Configurations

- For Web App:

  - Configure the `.env` file for payment gateways (PayPal, EasyPay) and other third-party services.
  - Customize the web app's appearance and layout by updating the Tailwind CSS styles in the `resources/css` directory.

  - Fetching Football Data:
    To display live matches, fixtures, and other football-related information, SportX relies on the Rapid API Football API. Follow the steps below to subscribe to the Rapid API and obtain the necessary access key:

    1. Visit the [Rapid API website](https://rapidapi.com/api-sports/api/api-football) and sign up for an account.

    2. Search for the "API-Football" in the marketplace and select the appropriate subscription plan that fits your needs.

    3. Once subscribed, you will receive an access key. Copy the access key, as you will need it to make requests to the Football API.

    4. In the `.env` file of the web app (located in the `sportx-web` directory), set the following environment variable with your Rapid API access key:
       ```
       RAPID_FOOTBALL_KEY=YOUR_RAPID_API_ACCESS_KEY
       ```

- For Mobile App:
  - Configure Firebase for Firebase Cloud Messaging (FCM) to enable push notifications.
  - Update the app's appearance and layout by modifying the Flutter widgets in the `lib/views` and `lib/widgets` directories.

## Congratulations!

You have successfully set up the development environment for SportX. Now you can start exploring and customizing the platform to suit your requirements. Happy betting!

Access the platform by navigating to the domain or IP address where SportX is hosted.

### Admin Access

To access the admin dashboard, go to `/admin` in your browser and log in using the default admin credentials:

- Username: admin@sportx.com
- Password: secret

### Manager Access

To access the manager dashboard, go to `/branch/manager` in your browser and log in using the manager account created from the admin panel

### Teller Access

To access the teller dashboard, go to `/branch/teller` in your browser and log in using the teller account created from the manager or admin panel

### Comprehensive Documentation:

For a detailed System Architecture guide, explore our comprehensive System Architecture guide (PDF) provided with the source code. It covers the general aspects of the platform.

### Ongoing Support:

At SportX, we value our customers. If you encounter any issues or need assistance, our support team is here to help. Reach our to us through our support channels, and we'll be happy to assist you.

Welcome to the World of SportX, where your Sports betting business takes center stage. Let the betting excitement begin!
