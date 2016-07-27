# [SpotAssign](http://spotassign.com)


## Quick Start:

Clone:

```ShellSession
git clone https://github.com/SpotAssign/SpotAssign
```

Install dependencies:

```ShellSession
npm i
```

Run it:

```ShellSession
npm start -s
```

## Add configs:
./server/config/config.js:

```ShellSession
export default {
    // Session Config
    session: {
        secret: '',
        resave: false,
        saveUninitialized: false
    },

    // Auth0 Config
    auth0: {
        clientID: '',
        clientSecret: '',
    },

    // MLabs Config
    mongoUri: '',
};
```


## Generate component files

```ShellSession
gulp component --name COMPONENT_NAME
```
