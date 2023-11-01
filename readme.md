first install dependencies
```bash
npm install
```

Initialize the server with
```bash
node app.js
```

Go to this link
http://localhost:3000/items

and you will be able to view any items in browser


```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "popsicle", "price": 1.99}' http://localhost:3000/items
```
if that got added, you can curl or enter this url to view the item:

```bash
http://localhost:3000/items/popsicle
```


if we are doing a terminal/curl method do the following in the terminal after starting the server

```bash
#ADD
curl -X POST "http://localhost:3000/items/example_item/9.99"
#GET
curl "http://localhost:3000/items/example_item"
#UPDATE
curl -X PATCH "http://localhost:3000/items/example_item/new_name/14.99"
#DELETE
curl -X DELETE "http://localhost:3000/items/example_item"

```