# ICARUS

This repo contains a working static website written with [Hugo](http://gohugo.io/?ref=aleksbasara), [DatoCMS](https://datocms.com/?ref=aleksbasara) and [TailwindCSS](https://tailwindcss.com/?ref=aleksbasara).

## Usage

First, install the dependencies of this project:

```
npm install
```

Add an `.env` file containing the read-only API token of your DatoCMS site:

```
echo 'DATO_API_TOKEN=abc123' >> .env
```

Then, to run this website in development mode:

```
npm run start
```

To build the final, production ready static website:

```
npm run build
```

The final result will be saved in the `public` directory.

## Licence
The source code is licensed [MIT](https://opensource.org/licenses/mit-license.php). The website content is licensed CC BY NC SA 4.0.