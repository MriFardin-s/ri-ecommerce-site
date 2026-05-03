QurbaniHat - Digital Haat Management System

QurbaniHat is a modern, full-stack web application designed to simplify the process of buying and selling animals. This platform provides a beautiful experience for users to browse, filter, and view detailed information about animals listed for the upcoming Qurbani season.

Live URL: https://ri-ecommerce-site.vercel.app


Project Purpose
The primary goal of this project is to create a secure and user-friendly digital marketplace for cattle and other animals trading. It eliminates the physical hassle of traditional haats by providing features like real-time data fetching, price sorting, and secure user authentication to protect sensitive animal data and media.

Key Features
Secure Authentication: Integrated with Better Auth supporting both Email/Password and Google Social Login.
Protected Routes: Private pages like `/animals` and `/my-profile` are protected via server-side session checks and Next.js Middleware.
Image Proxying: Secure animal image fetching through an API proxy route to only logged-in users can view sacrificial animal media.
Dynamic Sorting: Users can easily sort the animal list by price (Low to High / High to Low) using URL search parameters.
Optimized UI: Built with HeroUI (formerly NextUI) and Tailwind CSS for a responsive, modern, and aesthetic look.
Smooth Animations: Utilizes Animate.css for engaging entry animations on profile and card components.
Real-time Feedback: Includes a custom loading skeleton and Suspense boundaries for a better user experience during data fetching.

Technical Toolkit (NPM Packages)
This project leverages the following modern libraries and frameworks:

Next.js
Better Auth
@heroui/react
Tailwind CSS
Animate.css
Lucide React
MongoDB

Getting Start
Clone the repository:

   git clone https://github.com/MriFardin-s/ri-ecommerce-site.git