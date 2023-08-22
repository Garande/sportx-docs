---
sidebar_position: 1
---

# Web Structure

This file structure represents the main components and directories for the web version of SportX. The public directory contains compiled CSS, JavaScript, and image assets, while the resources directory contains raw assets, JavaScript components, language files, views, and SCSS for styling.

| Directory/File | Description                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| public/        | Contains publicly accessible assets, including compiled CSS, JavaScript, and image files.                                               |
| resources/     | Holds the source code and assets for the web application, including Vue.js components, language files, views, and SCSS for styling.     |
| config/        | Includes configuration files for various settings, such as database connections, services, and environment-specific settings.           |
| database/      | Contains files related to database management, including migration files to set up the database schema and seed files for initial data. |
| tests/         | Houses automated test files to ensure code quality and reliability through testing.                                                     |
| .env           | The environment configuration file that sets up environment-specific variables and settings.                                            |
| composer.json  | The Composer package file that lists PHP package dependencies and manages the autoload process.                                         |
| package.json   | The NPM package file that lists JavaScript package dependencies for the frontend.                                                       |
| ...            | Other configuration and metadata files.                                                                                                 |

This file structure represents the main components and directories for the web version of SportX. The `public` directory contains compiled CSS, JavaScript, and image assets, while the `resources` directory contains raw assets, JavaScript components, language files, views, and SCSS for styling.

The `routes` directory includes web routes for non-API routes, and the `config` directory contains configuration files for various settings. The `database` directory contains migration and seed files to set up the database schema and initial data. The `storage` directory holds various storage files, such as logs and cache. The `tests` directory is for automated tests, ensuring code quality and reliability.

The `.env` file contains environment configuration settings, and `composer.json` and `package.json` list package dependencies for PHP and JavaScript respectively.
