# Data Extraction App

A Node.js application that extracts data from HTML files using CSS selectors with Cheerio. The app can retrieve both non-repetitive and repetitive data from structured HTML content, such as tables. It supports dynamic extraction based on a provided JSON configuration file, making it flexible for various HTML formats.

## Features

- Extracts page titles and table data.
- Supports looping through table rows to gather multiple data entries.
- Configurable via JSON selectors for easy adaptation to different HTML structures.

## Installation

To get started with this project, first clone the repository. You can do this by running the command `git clone https://github.com/yourusername/data-extraction-app.git`. After cloning, navigate into the project directory with `cd data-extraction-app`. Make sure you have [Node.js](https://nodejs.org/) installed on your machine. Once you are in the project directory, install the required dependencies by running c.

## Setup and Configuration

### Step 1: Prepare HTML File
The sample.html and table_sample.html files contain the data to extract. Ensure they have a valid structure, including elements like a title and the necessary data.

### Step 2: Create a JSON Selectors File
The selectors_first.json selectors_second.json files define the CSS selectors for the data you want to extract. These files is already provided in the repository.

### Step 3:  Running the Application
To run the application for the main task, use the following command: `node app.js sample.html selectors_first.json main
` and to run for the bonus task use this command: `node app.js table_sample.html selectors_second.json bonus`.
