# LMS Frontened

### Setup instruction
1.Clone the Project
```
   git clone https://github.com/apekshaBL/LMS-Project.git

```
2.move to the directory
```
   cd Frontened
```
3.install the dependency

```
   npm install
```
4.start the server

```
   npm run dev

```

### Setup instruction for tailwind
[Tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1.Install tailwindcss

```
   npm install -D tailwindcss

```
2. Create tailwind Config file

```
   npx tailwindcss init

```
3. Add file extension to tailwind config file in the contents property
```
   *./src/**/*.{html,js,jsx,ts,tsx}*

```
4. Add the tailwind directive at the top of the `index.css` file
```
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
  
```
### Setup intruction for shadcn
[Shadcn official instruction doc](https://ui.shadcn.com/docs/installation/vite)
1. create the `jsconfig.json` file and add the code to it
```
{
    "compilerOptions": {
      "baseUrl": ".",
      "paths": {
        "@/*": ["./src/*"],
        "@/components/*": ["./src/components/*"],
        "@/lib/utils/*": ["./src/lib/utils/*"]
      }
    },
    "include": ["src"]
  }
  
```
2. Update vite.config.js file

```
 alias: {
      '@': path.resolve(__dirname, './src')
    }
 
```

3. Run the CLI
```
npx shadcn-ui@latest init

```
4. Configure components.json

### Adding plugins and dependencies

 ```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js
    daisyui axios react-hot-toast @tailwindcss/line-clamp
 ```

