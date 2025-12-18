# Enfiction

Enfiction is a website specifically designed to run on [Shuttle.rs](https://www.shuttle.rs/). It is built using Rust and utilizes `shuttle-axum` to serve web content.

This cargo package is designed to be linked directly to a Shuttle.rs account and served to the web.

## Features

- **Shuttle Integration**: Seamlessly deploys to Shuttle's serverless platform.
- **Static File Serving**: Serves static assets (HTML, CSS, JS) from the `static/` directory using `axum` and `tower-http`.

## Getting Started

### Prerequisites

- [Rust](https://www.rust-lang.org/tools/install)
- [Shuttle CLI](https://docs.shuttle.rs/introduction/installation)

### Installation & Deployment

1.  **Install the Shuttle CLI:**

    ```bash
    cargo install cargo-shuttle
    ```

2.  **Login to Shuttle:**

    ```bash
    cargo shuttle login
    ```

3.  **Run Locally:**

    To test the application locally:

    ```bash
    cargo shuttle run
    ```

    The website will be available at `http://localhost:8000`.

4.  **Deploy to Shuttle:**

    To deploy the application to the web:

    ```bash
    cargo shuttle project start
    cargo shuttle deploy
    ```

## Project Structure

- `src/main.rs`: The entry point of the application, configuring the Axum router and Shuttle runtime.
- `static/`: Directory containing static assets (e.g., `index.html`, styles, scripts) that are served by the application.
- `Cargo.toml`: Configuration file for dependencies and package metadata.

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details.
