{
  "version": 2,
  "builds": [
    {
      "src": "dist/frontend/browser/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}