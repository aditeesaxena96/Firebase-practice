# ![VenuIq](logo.png)

[![Build Status](https://travis-ci.org/laravel/framework.svg)](https://travis-ci.org/laravel/framework)
[![Total Downloads](https://poser.pugx.org/laravel/framework/d/total.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Stable Version](https://poser.pugx.org/laravel/framework/v/stable.svg)](https://packagist.org/packages/laravel/framework)
[![Latest Unstable Version](https://poser.pugx.org/laravel/framework/v/unstable.svg)](https://packagist.org/packages/laravel/framework)
[![License](https://poser.pugx.org/laravel/framework/license.svg)](https://packagist.org/packages/laravel/framework)


# Getting started

## Installation

Please install following server requirements before you start.
   
   laravel 5.3,
   php 7.0,
   mysql 5.7,
   All php extension which needed for laravel


Clone the repository

    git clone https://gitlab.kelltontech.net/venuIq/venuIq.git

Switch to the repo folder

    cd venuIq

Install all the dependencies using composer

    composer install
    composer update

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Generate a new application key

    php artisan key:generate

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Run the database seeder

   php artisan db:seed

Run the all other seeder

  php artisan db:seed --class=ConferenceFeaturesSeeder
  php artisan db:seed --class=ConferenceFormSeeder
  php artisan db:seed --class=BeaconUUIDSeeder
  php artisan db:seed --class=AppMenuConfTableSeeder

To create default folder

  php artisan folder:create

Start the local development server

    php artisan serve

You can now access the server at http://127.0.0.1:8000

**TL;DR command list**

    git clone https://gitlab.kelltontech.net/venuIq/venuIq.git
    cd venuIq
    composer install
    composer update
    cp .env.example .env
    php artisan folder:create
    php artisan key:generate
    
**Make sure you set the correct database connection information before running the migrations** [Environment variables](#environment-variables)

    php artisan migrate
    php artisan db:seed
    php artisan db:seed --class=ConferenceFeaturesSeeder
    php artisan db:seed --class=ConferenceFormSeeder
    php artisan serve

## Database seeding

**Populate the database with seed data with relationships which includes users, articles, comments, tags, favorites and follows. This can help you to quickly start testing the api or couple a frontend and start using it with ready content.**

Run the database seeder and you're done

    php artisan db:seed

***Note*** : It's recommended to have a clean database before seeding. You can refresh your migrations at any point to clean the database by running the following command

    php artisan migrate:refresh

## Environment variables

- `.env` - Environment variables can be set in this file

***Note*** : You can quickly set the database information and other variables in this file and have the application fully working.

----------
## Steps to add Delegate

1. Login with user_id "super_admin@venu-iq.com" and password "super_admin@123"
2. Add Client with unique email id, password and futher details.
3. Assign Package with feature enabled "Delegate".
4. Send email to access the package.
5. By login through client credentials or by admin panel you can add conference.
6. By adding Conference now you can add delegate too. 

----------
## Contributors
Pavnish Kumar 
