# Oblique Strategies for Programmers

This repo has two parts:
* A REST API driven by DataFire
* A web app driven by AngularJS

## REST API
The data behind the REST API is contained in
[this Google Sheet](https://docs.google.com/spreadsheets/d/1Oy9fiRqmDQgLbTSjMyiYWXZU4kImesa6fqyJVnUbeMg/edit#gid=0).
The API is hosted at `oblique-strategies.prod.with-datafire.io` and has two endpoints:

### GET /strategies
Returns a list of all strategies.

### POST /strategies
Adds a new strategy to the spreadsheet. The strategy must be manually approved (by editing column D)
before it appears in the web app.

## Web App
The application source lives under the `web/` directory. The compiled web app lives in the `docs/` directory,
and is served at [sites.datafire.io](https://sites.datafire.io/oblique-strategies)
