---
sidebar_position: 5
---

# Payment Integration

SportX integrates with multiple payment gateways to provide users with secure and convenient payment options for deposits and withdrawals. The payment integration ensures smooth transactions and enables users to fund their wallets and cash out their winnings effortlessly. This section outlines the payment gateways used in SportX and the steps to configure and manage them.

## Supported Payment Gateways

SportX supports the following payment gateways:

1. **PayPal**

   - PayPal is a widely recognized and trusted online payment platform that allows users to make secure payments using their PayPal accounts or credit/debit cards.

2. **EasyPay**
   - EasyPay is a popular payment gateway that provides mobile money payment services, specifically tailored for MTN Mobile Money and Airtel Money users.

## Configuring Payment Gateways

To configure the supported payment gateways in SportX, follow the steps below:

### PayPal Integration

1. Obtain PayPal API Credentials

   - Sign up for a PayPal developer account (if not already done).
   - Generate PayPal REST API credentials, including the client ID and secret.

2. Configure PayPal in the `.env` file

   - In the `.env` file of the web app (`sportx-web` directory), set the following variables with your PayPal API credentials:
     ```
     PAYPAL_CLIENT_ID=YOUR_PAYPAL_CLIENT_ID
     PAYPAL_SECRET=YOUR_PAYPAL_SECRET
     ```

3. Handle PayPal Payment Processing
   - In the backend (`sportx-web`), utilize the PayPal SDK to handle payment processing.
   - Verify payment status and log transactions using the Laravel backend integration.

### EasyPay Integration

1. Register for EasyPay Service

   - Contact EasyPay or the respective local telecommunication companies (MTN and Airtel) to register for their mobile money payment services.

2. Obtain EasyPay API Credentials

   - Obtain the necessary API credentials from EasyPay or the respective telecommunication companies.

3. Configure EasyPay in the `.env` file

   - In the `.env` file of the web app (`sportx-web`), set the following variables with your EasyPay API credentials:
     ```
     EASYPAY_API_KEY=YOUR_EASYPAY_API_KEY
     EASYPAY_API_SECRET=YOUR_EASYPAY_API_SECRET
     ```

4. Implement EasyPay Payment Processing
   - Utilize the EasyPay API and SDK to handle mobile money transactions.
   - Integrate the backend (`sportx-web`) to verify payments and log transactions.

## Managing Payment Transactions

SportX administrators can monitor and manage payment transactions from the admin dashboard. They have access to the "Transactions" section, which displays a detailed record of all user deposits, withdrawals, and bet transactions. Administrators can view transaction history, track revenue, and analyze betting patterns.

## Payment Security and Compliance

SportX ensures that payment transactions are secure and compliant with industry standards. Personal and financial information is protected using encryption and secure payment gateways. The platform also implements fraud detection mechanisms to maintain a fair and secure betting environment.
