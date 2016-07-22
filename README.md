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
./server/config/mlabs.js:

```ShellSession
export default 'mongodb://USERNAME:PASSWORD@URL';
```

./server/config/sessionConfig.js:

```ShellSession
export default {
	secret: 'testsecret',
	resave: false,
	saveUninitialized: false
};
```
