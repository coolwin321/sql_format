# SQL Formatter Web App

A simple web-based tool to format SQL queries for scheduling by removing comments and normalizing whitespace.

## Features

- Removes single-line comments (starting with `--` or `#`)
- Removes multi-line comments (`/* ... */`)
- Preserves regex patterns (especially useful for `REGEXP_CONTAINS` functions)
- Normalizes whitespace
- Wraps the SQL in double quotes and adds a semicolon
- Copy formatted SQL to clipboard with one click
- Responsive design that works on all devices

## How to Use

1. Paste your SQL query into the input area
2. Click the "Format SQL" button
3. The formatted SQL will appear in the output area
4. Click "Copy to Clipboard" to copy the formatted SQL

## Local Development

1. Clone this repository
2. Open `index.html` in your web browser

## Deployment

This is a static website that can be deployed to any web hosting service. For GitHub Pages:

1. Create a new repository on GitHub
2. Push the contents of this directory to the `gh-pages` branch
3. Enable GitHub Pages in your repository settings

## License

MIT License - feel free to use this code for any purpose.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.
