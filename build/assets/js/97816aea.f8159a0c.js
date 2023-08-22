"use strict";(self.webpackChunksportx_documentation=self.webpackChunksportx_documentation||[]).push([[426],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=s(a),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(k,o(o({ref:t},d),{},{components:a})):n.createElement(k,o({ref:t},d))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},1878:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:3},o="Project Setup",l={unversionedId:"get-started/setup",id:"get-started/setup",title:"Project Setup",description:"Welcome to SportX, a powerful and seamless betting platform for sports enthusiasts. This section will guide you through the necessary steps to get started with the platform, including setting up the development environment, installing dependencies, and running the web and mobile app versions.",source:"@site/docs/get-started/setup.md",sourceDirName:"get-started",slug:"/get-started/setup",permalink:"/docs/get-started/setup",draft:!1,editUrl:"https://github.com/Garande/docs/get-started/setup.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dependencies",permalink:"/docs/get-started/dependencies"},next:{title:"User Guide",permalink:"/docs/user-guide"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Setting Up the Development Environment",id:"setting-up-the-development-environment",level:2},{value:"Web App",id:"web-app",level:3},{value:"Installation",id:"installation",level:2},{value:"Web App Installation",id:"web-app-installation",level:3},{value:"Mobile App",id:"mobile-app",level:3},{value:"Additional Configurations",id:"additional-configurations",level:2},{value:"Congratulations!",id:"congratulations",level:2},{value:"Admin Access",id:"admin-access",level:3},{value:"Manager Access",id:"manager-access",level:3},{value:"Teller Access",id:"teller-access",level:3},{value:"Comprehensive Documentation:",id:"comprehensive-documentation",level:3},{value:"Ongoing Support:",id:"ongoing-support",level:3}],d={toc:s},m="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"project-setup"},"Project Setup"),(0,r.kt)("p",null,"Welcome to SportX, a powerful and seamless betting platform for sports enthusiasts. This section will guide you through the necessary steps to get started with the platform, including setting up the development environment, installing dependencies, and running the web and mobile app versions."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you begin, make sure you have the following prerequisites installed on your machine:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the Web App:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PHP (version 8.1 or higher)"),(0,r.kt)("li",{parentName:"ul"},"Composer (dependency manager for PHP)"),(0,r.kt)("li",{parentName:"ul"},"Node.js and NPM (Node Package Manager)"),(0,r.kt)("li",{parentName:"ul"},"MySQL or any compatible database server"),(0,r.kt)("li",{parentName:"ul"},"Laravel CLI (Command Line Interface)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For the Mobile App:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Flutter SDK (stable version)"),(0,r.kt)("li",{parentName:"ul"},"Dart language SDK"),(0,r.kt)("li",{parentName:"ul"},"Android Studio (for Android development) with Flutter and Dart plugins"),(0,r.kt)("li",{parentName:"ul"},"Xcode (for iOS development) with Flutter and Dart plugins (Mac only)")))),(0,r.kt)("h2",{id:"setting-up-the-development-environment"},"Setting Up the Development Environment"),(0,r.kt)("p",null,"Follow these steps to set up your development environment for the web and mobile app versions of SportX:"),(0,r.kt)("h3",{id:"web-app"},"Web App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repository from the Git repository or download the project ZIP.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sportx-web")," directory using the command line.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install PHP dependencies by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"composer install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install frontend dependencies using NPM:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file by copying ",(0,r.kt)("inlineCode",{parentName:"p"},".env.example")," and update it with your database and other configuration settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a new application key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"php artisan key:generate\n")))),(0,r.kt)("p",null,'Certainly! Below is the updated "Installation" section with the addition of configuring mail settings for sending verification emails to users upon registration:'),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"Welcome to SportX! This section will guide you through the installation process of the web and mobile app versions of SportX on your local development environment."),(0,r.kt)("h3",{id:"web-app-installation"},"Web App Installation"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repository from the Git repository or download the project ZIP.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sportx-web")," directory using the command line.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install PHP dependencies by running:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"composer install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install frontend dependencies using NPM:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"npm install\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file by copying ",(0,r.kt)("inlineCode",{parentName:"p"},".env.example")," and update it with your database and other configuration settings.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Generate a new application key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"php artisan key:generate\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure Mail Settings for Verification Email:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Open the ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file and find the following variables related to email:",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'MAIL_MAILER=smtp\nMAIL_HOST=your_smtp_host\nMAIL_PORT=your_smtp_port\nMAIL_USERNAME=your_smtp_username\nMAIL_PASSWORD=your_smtp_password\nMAIL_ENCRYPTION=your_smtp_encryption\nMAIL_FROM_ADDRESS=your_email_address\nMAIL_FROM_NAME="${APP_NAME}"\n'))),(0,r.kt)("li",{parentName:"ul"},"Replace the placeholders (e.g., ",(0,r.kt)("inlineCode",{parentName:"li"},"your_smtp_host"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"your_smtp_port"),", etc.) with your SMTP mail server details. These settings will be used to send verification emails to users upon registration."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure Database:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Create a new MySQL database for SportX. Open the ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file, find and update the following database variables to match your database credentials")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"}," DB_CONNECTION=mysql\n DB_HOST=your_database_host\n DB_PORT=your_database_port\n DB_DATABASE=your_database_name\n DB_USERNAME=your_database_username\n DB_PASSWORD=your_database_password\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run database migrations to set up the database schema:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"php artisan migrate\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Seed the database with initial data (if applicable):"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"php artisan db:seed\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the development server:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"php artisan serve\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The web app should now be accessible at ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:8000"),"."))),(0,r.kt)("h3",{id:"mobile-app"},"Mobile App"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Clone the repository from the Git repository or download the project ZIP.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to the ",(0,r.kt)("inlineCode",{parentName:"p"},"sportx-app")," directory using the command line.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run Flutter doctor to ensure all dependencies are installed and configured correctly:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"flutter doctor\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Install the Flutter and Dart plugins in your IDE (Android Studio or Visual Studio Code).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Connect a physical device or start an emulator for testing the app.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the app on the device/emulator:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"flutter run\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The mobile app should now be running on your device/emulator."))),(0,r.kt)("h2",{id:"additional-configurations"},"Additional Configurations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Web App:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Configure the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file for payment gateways (PayPal, EasyPay) and other third-party services.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Customize the web app's appearance and layout by updating the Tailwind CSS styles in the ",(0,r.kt)("inlineCode",{parentName:"p"},"resources/css")," directory.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Fetching Football Data:\nTo display live matches, fixtures, and other football-related information, SportX relies on the Rapid API Football API. Follow the steps below to subscribe to the Rapid API and obtain the necessary access key:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Visit the ",(0,r.kt)("a",{parentName:"p",href:"https://rapidapi.com/api-sports/api/api-football"},"Rapid API website")," and sign up for an account.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Search for the "API-Football" in the marketplace and select the appropriate subscription plan that fits your needs.')),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once subscribed, you will receive an access key. Copy the access key, as you will need it to make requests to the Football API.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file of the web app (located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"sportx-web")," directory), set the following environment variable with your Rapid API access key:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"RAPID_FOOTBALL_KEY=YOUR_RAPID_API_ACCESS_KEY\n"))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"For Mobile App:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Configure Firebase for Firebase Cloud Messaging (FCM) to enable push notifications."),(0,r.kt)("li",{parentName:"ul"},"Update the app's appearance and layout by modifying the Flutter widgets in the ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/views")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"lib/widgets")," directories.")))),(0,r.kt)("h2",{id:"congratulations"},"Congratulations!"),(0,r.kt)("p",null,"You have successfully set up the development environment for SportX. Now you can start exploring and customizing the platform to suit your requirements. Happy betting!"),(0,r.kt)("p",null,"Access the platform by navigating to the domain or IP address where SportX is hosted."),(0,r.kt)("h3",{id:"admin-access"},"Admin Access"),(0,r.kt)("p",null,"To access the admin dashboard, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"/admin")," in your browser and log in using the default admin credentials:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Username: ",(0,r.kt)("a",{parentName:"li",href:"mailto:admin@sportx.com"},"admin@sportx.com")),(0,r.kt)("li",{parentName:"ul"},"Password: secret")),(0,r.kt)("h3",{id:"manager-access"},"Manager Access"),(0,r.kt)("p",null,"To access the manager dashboard, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"/branch/manager")," in your browser and log in using the manager account created from the admin panel"),(0,r.kt)("h3",{id:"teller-access"},"Teller Access"),(0,r.kt)("p",null,"To access the teller dashboard, go to ",(0,r.kt)("inlineCode",{parentName:"p"},"/branch/teller")," in your browser and log in using the teller account created from the manager or admin panel"),(0,r.kt)("h3",{id:"comprehensive-documentation"},"Comprehensive Documentation:"),(0,r.kt)("p",null,"For a detailed System Architecture guide, explore our comprehensive System Architecture guide (PDF) provided with the source code. It covers the general aspects of the platform."),(0,r.kt)("h3",{id:"ongoing-support"},"Ongoing Support:"),(0,r.kt)("p",null,"At SportX, we value our customers. If you encounter any issues or need assistance, our support team is here to help. Reach our to us through our support channels, and we'll be happy to assist you."),(0,r.kt)("p",null,"Welcome to the World of SportX, where your Sports betting business takes center stage. Let the betting excitement begin!"))}u.isMDXComponent=!0}}]);