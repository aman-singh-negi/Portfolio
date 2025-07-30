# Deployment Guide for Vercel

This document provides step-by-step instructions for deploying this portfolio project to Vercel.

## Prerequisites

- A GitHub account
- A Vercel account (you can sign up at [vercel.com](https://vercel.com) using your GitHub account)

## Preparation Steps

1. **Test the build locally**

   Before deploying, make sure your project builds correctly:

   ```bash
   npm run build:test
   ```

   This will run the build process and verify that all necessary files are created.

2. **Environment Variables**

   Make sure you have your Firebase configuration ready. You'll need to add these as environment variables in Vercel:

   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - `VITE_FIREBASE_PROJECT_ID`
   - `VITE_FIREBASE_STORAGE_BUCKET`
   - `VITE_FIREBASE_MESSAGING_SENDER_ID`
   - `VITE_FIREBASE_APP_ID`
   - `VITE_FIREBASE_MEASUREMENT_ID`

## Deployment Steps

1. **Push your code to GitHub**

   If you haven't already, create a GitHub repository and push your code:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/your-repo-name.git
   git push -u origin main
   ```

2. **Connect to Vercel**

   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "Add New" > "Project"
   - Import your GitHub repository
   - Select the "Vite" framework preset

3. **Configure Project Settings**

   - **Build Command**: The default `npm run build` should work
   - **Output Directory**: Should be set to `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variables**

   - In the project settings, go to "Environment Variables"
   - Add all the Firebase configuration variables from your `.env` file

5. **Deploy**

   - Click "Deploy"
   - Vercel will build and deploy your project

6. **Verify Deployment**

   - Once deployment is complete, Vercel will provide you with a URL
   - Visit the URL to ensure everything is working correctly

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to your project settings in Vercel
2. Click on "Domains"
3. Add your domain and follow the instructions to configure DNS settings

## Troubleshooting

- **Build Failures**: Check the build logs in Vercel for specific errors
- **Firebase Issues**: Verify that all environment variables are correctly set
- **Routing Problems**: The `vercel.json` file should handle client-side routing, but if you encounter issues, check that the rewrites are correctly configured

## Continuous Deployment

Vercel automatically deploys when you push changes to your GitHub repository. No additional configuration is needed for continuous deployment.