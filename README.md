# notf
It's A Basic Libary To Easily Create Notifications via. JS

### Desktop Preview


![alt text](https://cdn.glitch.global/20934380-c678-4d7b-9caa-dc333b22741c/notfdesktop.png)

### Mobile Preview


![alt text](https://cdn.glitch.global/20934380-c678-4d7b-9caa-dc333b22741c/mobilenotf.png?v=1645273554943)

# Installing and Using
First: Download Code And Then Import `notf.js` Bottom At Your Page With `<script src="notf.js"></script>` After Importing JS File, Import `style.css` With `<link rel="stylesheet" href="style.css">`. Then Import Material Icons With `<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">`. 

# Full Template

https://github.com/Kaxozae0/notf/blob/main/example.html

## How To Use It?

To Create Notifications, Use `createNotf(params)`

## Params

autoClose: `boolean` | Automaticly Close Notification

autoCloseTime: `number` | After How Many Miliseconds the Notification Will Be Closed. If You Enabled Auto-Close, You Should Definitely Use This Parameter.

closable: `boolean` | Make Notification Closable With Tiny `X` Button

icon: `path (File Or URL)`  | Sets Tiny Icon

iconText: `string` | Sets the Text Next to the Tiny Icon

title: `string` | Sets Title

image: `path (File OR URL)`  | Sets Large Image

body: `string`  | Sets Body

## Example

`createNotf({autoClose: true, autoCloseTime: 5000, closable: true, icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/YouTube_social_white_square_%282017%29.svg/2048px-YouTube_social_white_square_%282017%29.svg.png", iconText: "YouTube", title: "Kaxözæ", image: "https://yt3.ggpht.com/NCjhVZGHhSumIPlb1FIt0nQHWoD-ge_SxeLl35RK_uaymtGtEhvfUbSAFohdAFe23jLZn0DcTg=s88-c-k-c0x00ffffff-no-rj", body: "Uploaded A New Video!" })`

