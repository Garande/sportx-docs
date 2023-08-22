---
sidebar_position: 8
---

# How to

In this "How to" section, we provide technical step-by-step instructions for various tasks related to SportX. These guidelines are intended to help buyers and developers navigate through essential procedures and configurations. Let's explore the technical how-to's:

## How to Set Up SportX Locally for Development

1. **Clone the Repository**
   To get started, clone the SportX repository from the version control system using Git:

   ```
   git clone <repository_url>
   ```

2. **Install Dependencies**
   Navigate to the project directory and install the required dependencies for the web and mobile platforms:

   ```
   cd sportx_web
   npm install

   cd sportx_mobile
   flutter pub get
   ```

3. **Configure Environment Variables**
   Set up the necessary environment variables for the backend (Laravel) by creating an `.env` file based on the `.env.example` file. Configure the database connection and API keys for third-party services.

4. **Database Migration**
   Run the database migrations to create the required tables:

   ```
   php artisan migrate
   ```

5. **Run the Backend (Laravel)**
   Start the Laravel backend server:

   ```
   php artisan serve
   ```

6. **Run the Frontend (Vue.js)**
   Launch the Vue.js frontend on a separate terminal:

   ```
   npm run dev
   ```

7. **Run the Mobile App (Flutter)**
   Run the SportX mobile app on either an Android or iOS emulator or a physical device:
   ```
   flutter run
   ```

## How to Add a New Payment Gateway

1. **Choose a Payment Gateway**
   Select the desired payment gateway for integration. Ensure it offers a suitable API or SDK for communication with the chosen platform.

2. **Implement the Backend Logic**
   In the Laravel backend, create a new service to handle payment processing using the payment gateway's API or SDK. Implement the necessary functions for payment authorization, capturing, and error handling.

3. **Integrate the Frontend**
   On the frontend (Vue.js), create a new component to display the payment options for the new gateway. Implement the user interface for payment selection and data entry.

4. **Update the Mobile App**
   In the Flutter mobile app, integrate the new payment gateway using platform-specific code. Implement the payment flow within the app.

5. **Configure API Keys**
   Set up the API keys or credentials for the new payment gateway in the backend environment variables.

## How to Customize the User Dashboard

1. **Identify Customizations**
   Determine the desired customizations for the user dashboard. This could include rearranging components, adding new features, or updating the UI.

2. **Update Vue.js Components**
   In the Vue.js frontend, modify the user dashboard components to reflect the desired customizations. Update the component templates and logic as needed.

3. **Backend Adjustments (Optional)**
   If customizations require changes to backend data retrieval or processing, adjust the Laravel backend accordingly.

4. **Test and Validate**
   Thoroughly test the customizations to ensure they function as intended and do not introduce any issues.
