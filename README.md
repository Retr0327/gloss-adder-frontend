# **gloss-adder-frontend**

This project lets users upload txt files with interlinear glosses, and automatically adds an additional interlinear gloss (i.e. gloss preamble) to those files.  

<p align="center">
<img src="./assest/demo.png" width="90%" height="100%" />
</p>

## **Setup**
Once downloaded, open the terminal in the project directory, and install dependencies with:

```bash
npm install
```

> If you are running on Windows run install --noptional flag (i.e. `npm install --no-optional`) which will skip installing fsevents.


### 1. Running locally in development mode.
Simply do: 

```bash 
npm run dev
```

### 2. Building and deploying in production
If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

```bash 
npm run build 
npm start
```

Run `npm run build` again any time you make changes to the site.


## **Configuring**
Create a .env.local file to the root folder, and add: 

```bash 
NEXT_PUBLIC_SERVER_URL=<the url>
``` 

# Contact Me
If you have any suggestion or question, please do not hesitate to email me at philcoke35@gmail.com.








