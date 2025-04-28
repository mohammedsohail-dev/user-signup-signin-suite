# User Signup Signin Suite

<div align="center">
  <img src="https://img.shields.io/badge/Quasar-15AABF?style=for-the-badge&logo=quasar&logoColor=white" />
  <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" />
  <img src="https://img.shields.io/badge/Pinia-ffd93b?style=for-the-badge&logo=pinia&logoColor=black" />
  <img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</div>

---

A **User Signup and Signin Suite** for easy integration into any app using **Supabase** and **Quasar Framework**.

- 🧩 **Pinia** is used for user data storage.
- 🛢️ **Supabase** manages user authentication and data in **PostgreSQL**.
- ⚡ Built for fast, modern app development with **hot reload**, **linting**, and **production build** workflows.

---

## Getting Started 🚀

Update Supabase Client Details 🔧

Before running the app, update your Supabase Project URL and Anon Key inside the supabaseCreateClient.js (or wherever you initialize Supabase):

```
const supabase = createClient('YOUR_SUPABASE_URL', 'YOUR_SUPABASE_ANON_KEY');
```
Make sure to replace 'YOUR_SUPABASE_URL' and 'YOUR_SUPABASE_ANON_KEY' with your actual credentials from your Supabase dashboard.

also initialise user data by running this sql query

```
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname VARCHAR(50) NOT NULL,
    lastname VARCHAR(50),
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    createdat TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```


### 1. Install the dependencies
```bash
yarn
# or
npm install

```


### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Lint the files
```bash
yarn lint
# or
npm run lint
```


### Format the files
```bash
yarn format
# or
npm run format
```


### Build the app for production
```bash
quasar build
```

### Website 
![LoginSuite](https://github.com/user-attachments/assets/cbc399ef-966f-43bc-a2b3-eb06eaeaed0b)


![forgotpassword](https://github.com/user-attachments/assets/1a545574-b4aa-48eb-8df2-600f677d792a)

![Signup](https://github.com/user-attachments/assets/d5a43a38-25c2-4f9d-884f-501c7e606696)

![forgotpassword](https://github.com/user-attachments/assets/614273fe-e1e9-4d79-8f06-043ad6c8e82b)


![Landing1](https://github.com/user-attachments/assets/6180567e-0ae3-409f-a121-5009c60b0df4)


![Landing2](https://github.com/user-attachments/assets/2ecf27cb-a0cc-467c-bc26-82fdf876c69a)


![Landing3](https://github.com/user-attachments/assets/dab35f16-3525-495d-980f-b045a83ec88a)


![Dashboard](https://github.com/user-attachments/assets/2c0e6a1f-5ee3-4695-9a53-15170d0e7e31)


### Customize the configuration
See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
