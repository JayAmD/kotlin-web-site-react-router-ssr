## Run the website using Docker:

### Docker Deployment

To build and run the migrated kotlin-web using Docker:

```bash
cd .\kotlin-web-site-react-router-ssr\

docker build -t kotlin-web-site-rr7-ssr .

# Run the container
docker run -p 3000:3000 kotlin-web-site-rr7-ssr
```

\
\
\
\
Otherwise to run a DEV server:

Install the dependencies:

```bash
npm install
```

And Start the development server with HMR:

```bash
npm run dev
```

Your application will be available at `http://localhost:5173`.
\
\

